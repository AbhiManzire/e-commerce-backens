const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/authMiddleware');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const pageSize = Number(req.query.pageSize) || 12;
    const page = Number(req.query.pageNumber) || 1;
    
    // Create flexible search patterns
    const createSearchPatterns = (searchTerm) => {
      const patterns = [searchTerm];
      
      // Handle common variations
      if (searchTerm.toLowerCase().includes('tshirt')) {
        patterns.push(searchTerm.replace(/tshirt/gi, 't-shirt'));
        patterns.push(searchTerm.replace(/tshirt/gi, 't shirt'));
      }
      if (searchTerm.toLowerCase().includes('t-shirt')) {
        patterns.push(searchTerm.replace(/t-shirt/gi, 'tshirt'));
        patterns.push(searchTerm.replace(/t-shirt/gi, 't shirt'));
      }
      if (searchTerm.toLowerCase().includes('t shirt')) {
        patterns.push(searchTerm.replace(/t shirt/gi, 'tshirt'));
        patterns.push(searchTerm.replace(/t shirt/gi, 't-shirt'));
      }
      
      return [...new Set(patterns)]; // Remove duplicates
    };

    const keyword = req.query.keyword
      ? {
          $or: createSearchPatterns(req.query.keyword).map(pattern => ({
            name: {
              $regex: pattern,
              $options: 'i',
            },
          }))
        }
      : {};

    const category = req.query.category ? { category: req.query.category } : {};
    const brand = req.query.brand ? { brand: req.query.brand } : {};
    const minPrice = req.query.minPrice ? { price: { $gte: Number(req.query.minPrice) } } : {};
    const maxPrice = req.query.maxPrice ? { price: { $lte: Number(req.query.maxPrice) } } : {};
    const inStock = req.query.inStock === 'true' ? { inStock: true } : {};
    const featured = req.query.featured === 'true' ? { featured: true } : {};
    const color = req.query.color ? { colors: { $in: [req.query.color] } } : {};
    const size = req.query.size ? { 'sizes.size': req.query.size, 'sizes.stock': { $gt: 0 } } : {};

    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

    const count = await Product.countDocuments({
      ...keyword,
      ...category,
      ...brand,
      ...minPrice,
      ...maxPrice,
      ...inStock,
      ...featured,
      ...color,
      ...size
    });

    const products = await Product.find({
      ...keyword,
      ...category,
      ...brand,
      ...minPrice,
      ...maxPrice,
      ...inStock,
      ...featured,
      ...color,
      ...size
    })
      .sort({ [sortBy]: sortOrder })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      products,
      page,
      pages: Math.ceil(count / pageSize),
      total: count
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Get filter options (brands, colors, etc.)
// @route   GET /api/products/filters
// @access  Public
router.get('/filters', async (req, res) => {
  try {
    const brands = await Product.distinct('brand');
    const colors = await Product.distinct('colors');
    const categories = await Product.distinct('category');
    
    // Get all unique sizes from all products
    const products = await Product.find({}, 'sizes');
    const sizes = [...new Set(products.flatMap(p => p.sizes.map(s => s.size)))].sort((a, b) => {
      // Sort sizes numerically if they're numbers, otherwise alphabetically
      const aNum = parseFloat(a);
      const bNum = parseFloat(b);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }
      return a.localeCompare(b);
    });
    
    res.json({
      brands: brands.sort(),
      colors: colors.sort(),
      categories: categories.sort(),
      sizes: sizes
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      user: req.user._id
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    console.log('🔄 Updating product:', req.params.id, 'with data:', req.body);
    const product = await Product.findById(req.params.id);

    if (product) {
      Object.assign(product, req.body);
      const updatedProduct = await product.save();
      console.log('✅ Product updated successfully:', updatedProduct._id);
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('❌ Update product error:', error);
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('❌ Delete product error:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
router.post('/:id/reviews', async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400).json({ message: 'Product already reviewed' });
        return;
      }

      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
router.get('/top/rated', async (req, res) => {
  try {
    const products = await Product.find({}).sort({ rating: -1 }).limit(3);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
