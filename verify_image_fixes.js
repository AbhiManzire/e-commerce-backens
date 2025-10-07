const mongoose = require('mongoose');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mearnsneakers').then(async () => {
  console.log('Connected to database');
  
  try {
    console.log('🔍 Verifying all product images...\n');

    // Get all categories
    const categories = await Product.distinct('category');
    console.log(`Found ${categories.length} categories in the database\n`);

    let totalProducts = 0;
    let productsWithImages = 0;
    let productsWithoutImages = 0;
    let brokenImages = 0;

    // Check each category
    for (const category of categories.sort()) {
      const products = await Product.find({ category: category });
      totalProducts += products.length;
      
      console.log(`📂 ${category.toUpperCase()} (${products.length} products):`);
      
      let categoryWithImages = 0;
      let categoryWithoutImages = 0;
      let categoryBrokenImages = 0;

      for (const product of products) {
        if (product.images && product.images.length > 0) {
          categoryWithImages++;
          productsWithImages++;
          
          // Check if first image URL is valid
          const firstImage = product.images[0];
          if (firstImage && firstImage.startsWith('http')) {
            console.log(`  ✅ ${product.name} - ${firstImage}`);
          } else {
            categoryBrokenImages++;
            brokenImages++;
            console.log(`  ❌ ${product.name} - Invalid image URL: ${firstImage}`);
          }
        } else {
          categoryWithoutImages++;
          productsWithoutImages++;
          console.log(`  ⚠️  ${product.name} - No images`);
        }
      }

      console.log(`  📊 Category Summary: ${categoryWithImages} with images, ${categoryWithoutImages} without images, ${categoryBrokenImages} broken images\n`);
    }

    // Overall summary
    console.log('🎯 OVERALL VERIFICATION SUMMARY:');
    console.log('================================');
    console.log(`📊 Total Products: ${totalProducts}`);
    console.log(`✅ Products with Images: ${productsWithImages}`);
    console.log(`⚠️  Products without Images: ${productsWithoutImages}`);
    console.log(`❌ Products with Broken Images: ${brokenImages}`);
    console.log(`📈 Success Rate: ${((productsWithImages / totalProducts) * 100).toFixed(1)}%`);

    // Check for specific issues that were mentioned in the images
    console.log('\n🔍 CHECKING FOR SPECIFIC ISSUES:');
    console.log('================================');

    // Check for placeholder images
    const placeholderProducts = await Product.find({
      $or: [
        { 'images.0': { $regex: /placeholder/i } },
        { 'images.0': { $regex: /not available/i } },
        { 'images.0': { $regex: /image not found/i } }
      ]
    });

    if (placeholderProducts.length > 0) {
      console.log(`⚠️  Found ${placeholderProducts.length} products with placeholder images:`);
      placeholderProducts.forEach(product => {
        console.log(`  - ${product.name} (${product.category})`);
      });
    } else {
      console.log('✅ No placeholder images found');
    }

    // Check for duplicate images across categories
    console.log('\n🔍 CHECKING FOR IMAGE CONSISTENCY:');
    console.log('==================================');
    
    const imageMap = new Map();
    const allProducts = await Product.find({}, 'name category images');
    
    allProducts.forEach(product => {
      if (product.images && product.images[0]) {
        const firstImage = product.images[0];
        if (!imageMap.has(firstImage)) {
          imageMap.set(firstImage, []);
        }
        imageMap.get(firstImage).push({
          name: product.name,
          category: product.category
        });
      }
    });

    // Find images used in multiple categories
    const crossCategoryImages = [];
    imageMap.forEach((products, imageUrl) => {
      const categories = [...new Set(products.map(p => p.category))];
      if (categories.length > 1) {
        crossCategoryImages.push({
          imageUrl,
          categories,
          products: products.length
        });
      }
    });

    if (crossCategoryImages.length > 0) {
      console.log(`⚠️  Found ${crossCategoryImages.length} images used across multiple categories:`);
      crossCategoryImages.slice(0, 5).forEach(item => {
        console.log(`  - Image: ${item.imageUrl}`);
        console.log(`    Used in: ${item.categories.join(', ')} (${item.products} products)`);
      });
      if (crossCategoryImages.length > 5) {
        console.log(`  ... and ${crossCategoryImages.length - 5} more`);
      }
    } else {
      console.log('✅ All images are category-specific');
    }

    // Final recommendations
    console.log('\n💡 RECOMMENDATIONS:');
    console.log('===================');
    
    if (productsWithoutImages > 0) {
      console.log(`- Add images to ${productsWithoutImages} products that don't have any`);
    }
    
    if (brokenImages > 0) {
      console.log(`- Fix ${brokenImages} products with broken image URLs`);
    }
    
    if (crossCategoryImages.length > 0) {
      console.log(`- Consider using more unique images for each category (${crossCategoryImages.length} images are shared)`);
    }
    
    if (productsWithoutImages === 0 && brokenImages === 0) {
      console.log('🎉 All products have valid images! Your e-commerce store is ready to go!');
    }

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Database connection closed');
  }
}).catch(err => {
  console.error('Database connection error:', err);
  process.exit(1);
});
