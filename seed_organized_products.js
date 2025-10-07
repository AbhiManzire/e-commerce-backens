const mongoose = require('mongoose');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mearnsneakers')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Organized product data by categories
const organizedProducts = {
  // MEN'S CATEGORIES
  men: {
    tshirt: [
      {
        name: "Men's Premium Cotton T-Shirt",
        brand: "YOUTH CIRCLE",
        description: "High-quality cotton t-shirt with modern fit and comfortable feel.",
        price: 25,
        originalPrice: 35,
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 20 },
          { size: 'M', stock: 30 },
          { size: 'L', stock: 25 },
          { size: 'XL', stock: 15 },
          { size: 'XXL', stock: 10 }
        ],
        colors: ['Black', 'White', 'Navy', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 156,
        tags: ['Men', 'T-Shirt', 'Cotton', 'Casual']
      },
      {
        name: "Men's Graphic Print T-Shirt",
        brand: "YOUTH CIRCLE",
        description: "Stylish graphic print t-shirt perfect for casual wear.",
        price: 30,
        originalPrice: 40,
        images: [
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1617137984095-74e4e5e36135?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 18 },
          { size: 'M', stock: 28 },
          { size: 'L', stock: 23 },
          { size: 'XL', stock: 13 },
          { size: 'XXL', stock: 8 }
        ],
        colors: ['Black', 'White', 'Red', 'Blue'],
        inStock: true,
        featured: true,
        rating: 4.0,
        numReviews: 89,
        tags: ['Men', 'T-Shirt', 'Graphic', 'Casual']
      },
      {
        name: "Men's V-Neck T-Shirt",
        brand: "YOUTH CIRCLE",
        description: "Classic V-neck t-shirt with premium cotton blend.",
        price: 28,
        originalPrice: 38,
        images: [
          'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 15 },
          { size: 'M', stock: 25 },
          { size: 'L', stock: 20 },
          { size: 'XL', stock: 12 },
          { size: 'XXL', stock: 7 }
        ],
        colors: ['White', 'Black', 'Gray', 'Navy'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 67,
        tags: ['Men', 'T-Shirt', 'V-Neck', 'Cotton']
      },
      {
        name: "Men's Polo T-Shirt",
        brand: "YOUTH CIRCLE",
        description: "Classic polo t-shirt with collar and button placket.",
        price: 35,
        originalPrice: 45,
        images: [
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 12 },
          { size: 'M', stock: 22 },
          { size: 'L', stock: 18 },
          { size: 'XL', stock: 10 },
          { size: 'XXL', stock: 6 }
        ],
        colors: ['Navy', 'White', 'Black', 'Red'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 98,
        tags: ['Men', 'Polo', 'T-Shirt', 'Classic']
      },
      {
        name: "Men's Basic T-Shirt",
        brand: "YOUTH CIRCLE",
        description: "Essential basic t-shirt for everyday wear.",
        price: 22,
        originalPrice: 30,
        images: [
          'https://images.unsplash.com/photo-1617137984095-74e4e5e36135?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 25 },
          { size: 'M', stock: 35 },
          { size: 'L', stock: 30 },
          { size: 'XL', stock: 20 },
          { size: 'XXL', stock: 15 }
        ],
        colors: ['White', 'Black', 'Gray', 'Navy'],
        inStock: true,
        featured: false,
        rating: 4.0,
        numReviews: 134,
        tags: ['Men', 'T-Shirt', 'Basic', 'Essential']
      }
    ],
    shirt: [
      {
        name: "Men's Formal Dress Shirt",
        brand: "YOUTH CIRCLE",
        description: "Professional formal dress shirt for business and formal occasions.",
        price: 45,
        originalPrice: 60,
        images: [
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1617137984095-74e4e5e36135?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 15 },
          { size: 'M', stock: 25 },
          { size: 'L', stock: 20 },
          { size: 'XL', stock: 12 },
          { size: 'XXL', stock: 8 }
        ],
        colors: ['White', 'Light Blue', 'Pink', 'Lavender'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 78,
        tags: ['Men', 'Shirt', 'Formal', 'Business']
      },
      {
        name: "Men's Casual Button-Down Shirt",
        brand: "YOUTH CIRCLE",
        description: "Versatile casual button-down shirt perfect for smart casual looks.",
        price: 40,
        originalPrice: 55,
        images: [
          'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 18 },
          { size: 'M', stock: 28 },
          { size: 'L', stock: 23 },
          { size: 'XL', stock: 15 },
          { size: 'XXL', stock: 10 }
        ],
        colors: ['Blue', 'White', 'Gray', 'Green'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 92,
        tags: ['Men', 'Shirt', 'Casual', 'Button-Down']
      },
      {
        name: "Men's Checkered Shirt",
        brand: "YOUTH CIRCLE",
        description: "Classic checkered pattern shirt for a timeless look.",
        price: 38,
        originalPrice: 50,
        images: [
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 12 },
          { size: 'M', stock: 22 },
          { size: 'L', stock: 18 },
          { size: 'XL', stock: 10 },
          { size: 'XXL', stock: 6 }
        ],
        colors: ['Red/White', 'Blue/White', 'Black/White', 'Green/White'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 56,
        tags: ['Men', 'Shirt', 'Checkered', 'Pattern']
      },
      {
        name: "Men's Flannel Shirt",
        brand: "YOUTH CIRCLE",
        description: "Warm and comfortable flannel shirt for casual wear.",
        price: 42,
        originalPrice: 58,
        images: [
          'https://images.unsplash.com/photo-1617137984095-74e4e5e36135?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 10 },
          { size: 'M', stock: 20 },
          { size: 'L', stock: 16 },
          { size: 'XL', stock: 8 },
          { size: 'XXL', stock: 5 }
        ],
        colors: ['Red/Black', 'Blue/Black', 'Green/Black', 'Gray/Black'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 73,
        tags: ['Men', 'Shirt', 'Flannel', 'Warm']
      },
      {
        name: "Men's Oxford Shirt",
        brand: "YOUTH CIRCLE",
        description: "Classic Oxford shirt with button-down collar.",
        price: 48,
        originalPrice: 65,
        images: [
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 8 },
          { size: 'M', stock: 18 },
          { size: 'L', stock: 14 },
          { size: 'XL', stock: 6 },
          { size: 'XXL', stock: 4 }
        ],
        colors: ['White', 'Light Blue', 'Pink', 'Yellow'],
        inStock: true,
        featured: false,
        rating: 4.5,
        numReviews: 85,
        tags: ['Men', 'Shirt', 'Oxford', 'Classic']
      }
    ],
    jeans: [
      {
        name: "Men's Slim Fit Denim Jeans",
        brand: "YOUTH CIRCLE",
        description: "Modern slim fit denim jeans with stretch for comfort.",
        price: 65,
        originalPrice: 85,
        images: [
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 8 },
          { size: '30', stock: 12 },
          { size: '32', stock: 15 },
          { size: '34', stock: 18 },
          { size: '36', stock: 10 },
          { size: '38', stock: 6 }
        ],
        colors: ['Blue', 'Black', 'Light Blue', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 124,
        tags: ['Men', 'Jeans', 'Slim Fit', 'Denim']
      },
      {
        name: "Men's Straight Fit Jeans",
        brand: "YOUTH CIRCLE",
        description: "Classic straight fit jeans for everyday comfort.",
        price: 60,
        originalPrice: 80,
        images: [
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 10 },
          { size: '30', stock: 15 },
          { size: '32', stock: 20 },
          { size: '34', stock: 22 },
          { size: '36', stock: 12 },
          { size: '38', stock: 8 }
        ],
        colors: ['Blue', 'Black', 'Dark Blue', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 98,
        tags: ['Men', 'Jeans', 'Straight Fit', 'Classic']
      },
      {
        name: "Men's Distressed Jeans",
        brand: "YOUTH CIRCLE",
        description: "Trendy distressed jeans with authentic wear patterns.",
        price: 70,
        originalPrice: 90,
        images: [
          'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 6 },
          { size: '30', stock: 10 },
          { size: '32', stock: 12 },
          { size: '34', stock: 15 },
          { size: '36', stock: 8 },
          { size: '38', stock: 5 }
        ],
        colors: ['Light Blue', 'Blue', 'Black', 'Gray'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 67,
        tags: ['Men', 'Jeans', 'Distressed', 'Trendy']
      },
      {
        name: "Men's Skinny Fit Jeans",
        brand: "YOUTH CIRCLE",
        description: "Modern skinny fit jeans for a contemporary look.",
        price: 68,
        originalPrice: 88,
        images: [
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 5 },
          { size: '30', stock: 8 },
          { size: '32', stock: 10 },
          { size: '34', stock: 12 },
          { size: '36', stock: 6 },
          { size: '38', stock: 4 }
        ],
        colors: ['Black', 'Blue', 'Dark Blue', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.0,
        numReviews: 89,
        tags: ['Men', 'Jeans', 'Skinny Fit', 'Modern']
      },
      {
        name: "Men's Relaxed Fit Jeans",
        brand: "YOUTH CIRCLE",
        description: "Comfortable relaxed fit jeans for all-day wear.",
        price: 62,
        originalPrice: 82,
        images: [
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 12 },
          { size: '30', stock: 18 },
          { size: '32', stock: 22 },
          { size: '34', stock: 25 },
          { size: '36', stock: 15 },
          { size: '38', stock: 10 }
        ],
        colors: ['Blue', 'Black', 'Light Blue', 'Gray'],
        inStock: true,
        featured: false,
        rating: 4.4,
        numReviews: 112,
        tags: ['Men', 'Jeans', 'Relaxed Fit', 'Comfortable']
      }
    ],
    sneakers: [
      {
        name: "Men's Running Sneakers",
        brand: "YOUTH CIRCLE",
        description: "High-performance running sneakers with cushioning technology.",
        price: 85,
        originalPrice: 120,
        images: [
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 8 },
          { size: '7.5', stock: 12 },
          { size: '8', stock: 15 },
          { size: '8.5', stock: 18 },
          { size: '9', stock: 20 },
          { size: '9.5', stock: 16 },
          { size: '10', stock: 14 },
          { size: '10.5', stock: 12 },
          { size: '11', stock: 10 },
          { size: '11.5', stock: 8 },
          { size: '12', stock: 6 }
        ],
        colors: ['White', 'Black', 'Blue', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.5,
        numReviews: 156,
        tags: ['Men', 'Sneakers', 'Running', 'Athletic']
      },
      {
        name: "Men's Casual Sneakers",
        brand: "YOUTH CIRCLE",
        description: "Versatile casual sneakers perfect for everyday wear.",
        price: 75,
        originalPrice: 100,
        images: [
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 6 },
          { size: '7.5', stock: 10 },
          { size: '8', stock: 12 },
          { size: '8.5', stock: 15 },
          { size: '9', stock: 18 },
          { size: '9.5', stock: 14 },
          { size: '10', stock: 12 },
          { size: '10.5', stock: 10 },
          { size: '11', stock: 8 },
          { size: '11.5', stock: 6 },
          { size: '12', stock: 4 }
        ],
        colors: ['White', 'Black', 'Navy', 'Brown'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 134,
        tags: ['Men', 'Sneakers', 'Casual', 'Everyday']
      },
      {
        name: "Men's High-Top Sneakers",
        brand: "YOUTH CIRCLE",
        description: "Classic high-top sneakers with retro styling.",
        price: 90,
        originalPrice: 125,
        images: [
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 4 },
          { size: '7.5', stock: 8 },
          { size: '8', stock: 10 },
          { size: '8.5', stock: 12 },
          { size: '9', stock: 15 },
          { size: '9.5', stock: 12 },
          { size: '10', stock: 10 },
          { size: '10.5', stock: 8 },
          { size: '11', stock: 6 },
          { size: '11.5', stock: 4 },
          { size: '12', stock: 3 }
        ],
        colors: ['White', 'Black', 'Red', 'Blue'],
        inStock: true,
        featured: false,
        rating: 4.2,
        numReviews: 89,
        tags: ['Men', 'Sneakers', 'High-Top', 'Retro']
      },
      {
        name: "Men's Basketball Sneakers",
        brand: "YOUTH CIRCLE",
        description: "High-performance basketball sneakers with ankle support.",
        price: 95,
        originalPrice: 130,
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 3 },
          { size: '7.5', stock: 6 },
          { size: '8', stock: 8 },
          { size: '8.5', stock: 10 },
          { size: '9', stock: 12 },
          { size: '9.5', stock: 10 },
          { size: '10', stock: 8 },
          { size: '10.5', stock: 6 },
          { size: '11', stock: 4 },
          { size: '11.5', stock: 3 },
          { size: '12', stock: 2 }
        ],
        colors: ['White', 'Black', 'Red', 'Blue'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 67,
        tags: ['Men', 'Sneakers', 'Basketball', 'Athletic']
      },
      {
        name: "Men's Skateboard Sneakers",
        brand: "YOUTH CIRCLE",
        description: "Durable skateboard sneakers with reinforced toe cap.",
        price: 80,
        originalPrice: 110,
        images: [
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 5 },
          { size: '7.5', stock: 9 },
          { size: '8', stock: 11 },
          { size: '8.5', stock: 13 },
          { size: '9', stock: 16 },
          { size: '9.5', stock: 13 },
          { size: '10', stock: 11 },
          { size: '10.5', stock: 9 },
          { size: '11', stock: 7 },
          { size: '11.5', stock: 5 },
          { size: '12', stock: 3 }
        ],
        colors: ['Black', 'White', 'Gray', 'Navy'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 78,
        tags: ['Men', 'Sneakers', 'Skateboard', 'Durable']
      }
    ],
    cargo: [
      {
        name: "Men's Military Cargo Pants",
        brand: "YOUTH CIRCLE",
        description: "Durable military-style cargo pants with multiple pockets.",
        price: 55,
        originalPrice: 75,
        images: [
          'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 8 },
          { size: '30', stock: 12 },
          { size: '32', stock: 15 },
          { size: '34', stock: 18 },
          { size: '36', stock: 10 },
          { size: '38', stock: 6 }
        ],
        colors: ['Green', 'Black', 'Khaki', 'Brown'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 89,
        tags: ['Men', 'Cargo', 'Military', 'Pockets']
      },
      {
        name: "Men's Slim Cargo Pants",
        brand: "YOUTH CIRCLE",
        description: "Modern slim fit cargo pants with functional pockets.",
        price: 58,
        originalPrice: 78,
        images: [
          'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 6 },
          { size: '30', stock: 10 },
          { size: '32', stock: 12 },
          { size: '34', stock: 15 },
          { size: '36', stock: 8 },
          { size: '38', stock: 5 }
        ],
        colors: ['Black', 'Gray', 'Navy', 'Green'],
        inStock: true,
        featured: true,
        rating: 4.1,
        numReviews: 67,
        tags: ['Men', 'Cargo', 'Slim Fit', 'Modern']
      },
      {
        name: "Men's Casual Cargo Pants",
        brand: "YOUTH CIRCLE",
        description: "Comfortable casual cargo pants for everyday wear.",
        price: 52,
        originalPrice: 72,
        images: [
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 10 },
          { size: '30', stock: 15 },
          { size: '32', stock: 18 },
          { size: '34', stock: 20 },
          { size: '36', stock: 12 },
          { size: '38', stock: 8 }
        ],
        colors: ['Khaki', 'Black', 'Green', 'Brown'],
        inStock: true,
        featured: false,
        rating: 4.0,
        numReviews: 78,
        tags: ['Men', 'Cargo', 'Casual', 'Comfortable']
      },
      {
        name: "Men's Tactical Cargo Pants",
        brand: "YOUTH CIRCLE",
        description: "Heavy-duty tactical cargo pants for outdoor activities.",
        price: 65,
        originalPrice: 85,
        images: [
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 4 },
          { size: '30', stock: 8 },
          { size: '32', stock: 10 },
          { size: '34', stock: 12 },
          { size: '36', stock: 6 },
          { size: '38', stock: 4 }
        ],
        colors: ['Green', 'Black', 'Brown', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 45,
        tags: ['Men', 'Cargo', 'Tactical', 'Outdoor']
      },
      {
        name: "Men's Street Cargo Pants",
        brand: "YOUTH CIRCLE",
        description: "Urban street-style cargo pants with modern design.",
        price: 60,
        originalPrice: 80,
        images: [
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 7 },
          { size: '30', stock: 11 },
          { size: '32', stock: 13 },
          { size: '34', stock: 16 },
          { size: '36', stock: 9 },
          { size: '38', stock: 6 }
        ],
        colors: ['Black', 'Gray', 'Navy', 'Green'],
        inStock: true,
        featured: false,
        rating: 4.2,
        numReviews: 56,
        tags: ['Men', 'Cargo', 'Street', 'Urban']
      }
    ],
    trousers: [
      {
        name: "Men's Chino Trousers",
        brand: "YOUTH CIRCLE",
        description: "Classic chino trousers perfect for smart casual looks.",
        price: 50,
        originalPrice: 70,
        images: [
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 8 },
          { size: '30', stock: 12 },
          { size: '32', stock: 15 },
          { size: '34', stock: 18 },
          { size: '36', stock: 10 },
          { size: '38', stock: 6 }
        ],
        colors: ['Khaki', 'Navy', 'Gray', 'Brown'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 98,
        tags: ['Men', 'Trousers', 'Chino', 'Smart Casual']
      },
      {
        name: "Men's Formal Trousers",
        brand: "YOUTH CIRCLE",
        description: "Professional formal trousers for business attire.",
        price: 55,
        originalPrice: 75,
        images: [
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 6 },
          { size: '30', stock: 10 },
          { size: '32', stock: 12 },
          { size: '34', stock: 15 },
          { size: '36', stock: 8 },
          { size: '38', stock: 5 }
        ],
        colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 76,
        tags: ['Men', 'Trousers', 'Formal', 'Business']
      },
      {
        name: "Men's Casual Trousers",
        brand: "YOUTH CIRCLE",
        description: "Comfortable casual trousers for relaxed wear.",
        price: 48,
        originalPrice: 68,
        images: [
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 10 },
          { size: '30', stock: 15 },
          { size: '32', stock: 18 },
          { size: '34', stock: 20 },
          { size: '36', stock: 12 },
          { size: '38', stock: 8 }
        ],
        colors: ['Gray', 'Navy', 'Brown', 'Beige'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 87,
        tags: ['Men', 'Trousers', 'Casual', 'Comfortable']
      },
      {
        name: "Men's Dress Trousers",
        brand: "YOUTH CIRCLE",
        description: "Elegant dress trousers for special occasions.",
        price: 60,
        originalPrice: 80,
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 4 },
          { size: '30', stock: 8 },
          { size: '32', stock: 10 },
          { size: '34', stock: 12 },
          { size: '36', stock: 6 },
          { size: '38', stock: 4 }
        ],
        colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
        inStock: true,
        featured: true,
        rating: 4.5,
        numReviews: 54,
        tags: ['Men', 'Trousers', 'Dress', 'Elegant']
      },
      {
        name: "Men's Work Trousers",
        brand: "YOUTH CIRCLE",
        description: "Durable work trousers for professional environments.",
        price: 52,
        originalPrice: 72,
        images: [
          'https://images.unsplash.com/photo-1581655353564-dff123a1eb820?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '28', stock: 9 },
          { size: '30', stock: 13 },
          { size: '32', stock: 16 },
          { size: '34', stock: 19 },
          { size: '36', stock: 11 },
          { size: '38', stock: 7 }
        ],
        colors: ['Black', 'Navy', 'Gray', 'Brown'],
        inStock: true,
        featured: false,
        rating: 4.2,
        numReviews: 65,
        tags: ['Men', 'Trousers', 'Work', 'Professional']
      }
    ],
    'hoodies-sweaters': [
      {
        name: "Men's Pullover Hoodie",
        brand: "YOUTH CIRCLE",
        description: "Comfortable pullover hoodie with kangaroo pocket.",
        price: 45,
        originalPrice: 65,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 15 },
          { size: 'M', stock: 25 },
          { size: 'L', stock: 20 },
          { size: 'XL', stock: 12 },
          { size: 'XXL', stock: 8 }
        ],
        colors: ['Black', 'Gray', 'Navy', 'White'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 112,
        tags: ['Men', 'Hoodie', 'Pullover', 'Casual']
      },
      {
        name: "Men's Zip-Up Hoodie",
        brand: "YOUTH CIRCLE",
        description: "Versatile zip-up hoodie for layering and style.",
        price: 48,
        originalPrice: 68,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 12 },
          { size: 'M', stock: 22 },
          { size: 'L', stock: 18 },
          { size: 'XL', stock: 10 },
          { size: 'XXL', stock: 6 }
        ],
        colors: ['Navy', 'Black', 'Gray', 'Green'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 89,
        tags: ['Men', 'Hoodie', 'Zip-Up', 'Layering']
      },
      {
        name: "Men's Crew Neck Sweater",
        brand: "YOUTH CIRCLE",
        description: "Classic crew neck sweater for smart casual looks.",
        price: 55,
        originalPrice: 75,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 8 },
          { size: 'M', stock: 18 },
          { size: 'L', stock: 15 },
          { size: 'XL', stock: 8 },
          { size: 'XXL', stock: 5 }
        ],
        colors: ['Navy', 'Gray', 'Black', 'Cream'],
        inStock: true,
        featured: false,
        rating: 4.4,
        numReviews: 67,
        tags: ['Men', 'Sweater', 'Crew Neck', 'Classic']
      },
      {
        name: "Men's V-Neck Sweater",
        brand: "YOUTH CIRCLE",
        description: "Elegant V-neck sweater perfect for layering.",
        price: 58,
        originalPrice: 78,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 6 },
          { size: 'M', stock: 16 },
          { size: 'L', stock: 13 },
          { size: 'XL', stock: 6 },
          { size: 'XXL', stock: 4 }
        ],
        colors: ['Gray', 'Navy', 'Black', 'Brown'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 54,
        tags: ['Men', 'Sweater', 'V-Neck', 'Elegant']
      },
      {
        name: "Men's Cardigan Sweater",
        brand: "YOUTH CIRCLE",
        description: "Versatile cardigan sweater for smart casual styling.",
        price: 62,
        originalPrice: 82,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'S', stock: 5 },
          { size: 'M', stock: 14 },
          { size: 'L', stock: 11 },
          { size: 'XL', stock: 5 },
          { size: 'XXL', stock: 3 }
        ],
        colors: ['Navy', 'Gray', 'Black', 'Cream'],
        inStock: true,
        featured: false,
        rating: 4.5,
        numReviews: 43,
        tags: ['Men', 'Sweater', 'Cardigan', 'Versatile']
      }
    ],
    flipflop: [
      {
        name: "Men's Comfort Flip Flops",
        brand: "YOUTH CIRCLE",
        description: "Comfortable flip flops with cushioned sole.",
        price: 25,
        originalPrice: 35,
        images: [
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 10 },
          { size: '8', stock: 15 },
          { size: '9', stock: 20 },
          { size: '10', stock: 18 },
          { size: '11', stock: 12 },
          { size: '12', stock: 8 }
        ],
        colors: ['Black', 'Brown', 'Navy', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.1,
        numReviews: 78,
        tags: ['Men', 'Flip Flops', 'Comfort', 'Casual']
      },
      {
        name: "Men's Beach Flip Flops",
        brand: "YOUTH CIRCLE",
        description: "Perfect beach flip flops with water-resistant material.",
        price: 22,
        originalPrice: 32,
        images: [
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 12 },
          { size: '8', stock: 18 },
          { size: '9', stock: 22 },
          { size: '10', stock: 20 },
          { size: '11', stock: 14 },
          { size: '12', stock: 10 }
        ],
        colors: ['Blue', 'Green', 'Orange', 'Red'],
        inStock: true,
        featured: true,
        rating: 4.0,
        numReviews: 65,
        tags: ['Men', 'Flip Flops', 'Beach', 'Water-Resistant']
      },
      {
        name: "Men's Sport Flip Flops",
        brand: "YOUTH CIRCLE",
        description: "Athletic flip flops with arch support.",
        price: 28,
        originalPrice: 38,
        images: [
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 8 },
          { size: '8', stock: 12 },
          { size: '9', stock: 16 },
          { size: '10', stock: 14 },
          { size: '11', stock: 10 },
          { size: '12', stock: 6 }
        ],
        colors: ['Black', 'Gray', 'Navy', 'White'],
        inStock: true,
        featured: false,
        rating: 4.2,
        numReviews: 52,
        tags: ['Men', 'Flip Flops', 'Sport', 'Arch Support']
      },
      {
        name: "Men's Casual Flip Flops",
        brand: "YOUTH CIRCLE",
        description: "Everyday casual flip flops for relaxed wear.",
        price: 20,
        originalPrice: 30,
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 15 },
          { size: '8', stock: 20 },
          { size: '9', stock: 25 },
          { size: '10', stock: 22 },
          { size: '11', stock: 16 },
          { size: '12', stock: 12 }
        ],
        colors: ['Black', 'Brown', 'Gray', 'Navy'],
        inStock: true,
        featured: false,
        rating: 3.9,
        numReviews: 89,
        tags: ['Men', 'Flip Flops', 'Casual', 'Everyday']
      },
      {
        name: "Men's Premium Flip Flops",
        brand: "YOUTH CIRCLE",
        description: "High-quality premium flip flops with leather straps.",
        price: 35,
        originalPrice: 50,
        images: [
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '7', stock: 6 },
          { size: '8', stock: 10 },
          { size: '9', stock: 12 },
          { size: '10', stock: 10 },
          { size: '11', stock: 8 },
          { size: '12', stock: 5 }
        ],
        colors: ['Brown', 'Black', 'Tan', 'Navy'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 34,
        tags: ['Men', 'Flip Flops', 'Premium', 'Leather']
      }
    ]
  },
  // LADIES' CATEGORIES
  ladies: {
    clothing: [
      {
        name: "Ladies' Casual T-Shirt",
        brand: "YOUTH CIRCLE",
        description: "Comfortable casual t-shirt for everyday wear.",
        price: 28,
        originalPrice: 38,
        images: [
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 15 },
          { size: 'S', stock: 25 },
          { size: 'M', stock: 30 },
          { size: 'L', stock: 20 },
          { size: 'XL', stock: 10 }
        ],
        colors: ['Pink', 'White', 'Black', 'Lavender'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 134,
        tags: ['Ladies', 'T-Shirt', 'Casual', 'Comfortable']
      },
      {
        name: "Ladies' Crop Top",
        brand: "YOUTH CIRCLE",
        description: "Trendy crop top perfect for summer styling.",
        price: 32,
        originalPrice: 42,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 12 },
          { size: 'S', stock: 20 },
          { size: 'M', stock: 25 },
          { size: 'L', stock: 18 },
          { size: 'XL', stock: 8 }
        ],
        colors: ['Coral', 'Mint', 'White', 'Black'],
        inStock: true,
        featured: true,
        rating: 4.1,
        numReviews: 89,
        tags: ['Ladies', 'Crop Top', 'Summer', 'Trendy']
      },
      {
        name: "Ladies' Blouse",
        brand: "YOUTH CIRCLE",
        description: "Elegant blouse for office and formal occasions.",
        price: 45,
        originalPrice: 60,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 8 },
          { size: 'S', stock: 15 },
          { size: 'M', stock: 20 },
          { size: 'L', stock: 15 },
          { size: 'XL', stock: 7 }
        ],
        colors: ['White', 'Navy', 'Black', 'Blush'],
        inStock: true,
        featured: false,
        rating: 4.3,
        numReviews: 67,
        tags: ['Ladies', 'Blouse', 'Formal', 'Elegant']
      },
      {
        name: "Ladies' Tank Top",
        brand: "YOUTH CIRCLE",
        description: "Comfortable tank top for layering and casual wear.",
        price: 25,
        originalPrice: 35,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 18 },
          { size: 'S', stock: 28 },
          { size: 'M', stock: 32 },
          { size: 'L', stock: 22 },
          { size: 'XL', stock: 12 }
        ],
        colors: ['Black', 'White', 'Gray', 'Navy'],
        inStock: true,
        featured: false,
        rating: 4.0,
        numReviews: 98,
        tags: ['Ladies', 'Tank Top', 'Casual', 'Layering']
      },
      {
        name: "Ladies' Long Sleeve Top",
        brand: "YOUTH CIRCLE",
        description: "Versatile long sleeve top for all seasons.",
        price: 35,
        originalPrice: 48,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 10 },
          { size: 'S', stock: 18 },
          { size: 'M', stock: 22 },
          { size: 'L', stock: 16 },
          { size: 'XL', stock: 9 }
        ],
        colors: ['Burgundy', 'Navy', 'Black', 'Cream'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 76,
        tags: ['Ladies', 'Long Sleeve', 'Versatile', 'All Seasons']
      }
    ],
    shoes: [
      {
        name: "Ladies' Heeled Sandals",
        brand: "YOUTH CIRCLE",
        description: "Elegant heeled sandals for special occasions.",
        price: 65,
        originalPrice: 85,
        images: [
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '5', stock: 8 },
          { size: '6', stock: 12 },
          { size: '7', stock: 15 },
          { size: '8', stock: 18 },
          { size: '9', stock: 12 },
          { size: '10', stock: 8 }
        ],
        colors: ['Black', 'Nude', 'Red', 'Gold'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 89,
        tags: ['Ladies', 'Heels', 'Sandals', 'Elegant']
      },
      {
        name: "Ladies' Flat Sandals",
        brand: "YOUTH CIRCLE",
        description: "Comfortable flat sandals for everyday wear.",
        price: 45,
        originalPrice: 60,
        images: [
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '5', stock: 10 },
          { size: '6', stock: 15 },
          { size: '7', stock: 20 },
          { size: '8', stock: 22 },
          { size: '9', stock: 15 },
          { size: '10', stock: 10 }
        ],
        colors: ['Brown', 'Black', 'Tan', 'White'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 112,
        tags: ['Ladies', 'Flats', 'Sandals', 'Comfortable']
      },
      {
        name: "Ladies' Sneakers",
        brand: "YOUTH CIRCLE",
        description: "Stylish sneakers for active lifestyle.",
        price: 75,
        originalPrice: 100,
        images: [
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '5', stock: 6 },
          { size: '6', stock: 10 },
          { size: '7', stock: 12 },
          { size: '8', stock: 15 },
          { size: '9', stock: 10 },
          { size: '10', stock: 6 }
        ],
        colors: ['White', 'Pink', 'Black', 'Gray'],
        inStock: true,
        featured: false,
        rating: 4.3,
        numReviews: 78,
        tags: ['Ladies', 'Sneakers', 'Active', 'Stylish']
      },
      {
        name: "Ladies' Boots",
        brand: "YOUTH CIRCLE",
        description: "Fashionable boots for winter and fall.",
        price: 85,
        originalPrice: 110,
        images: [
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '5', stock: 4 },
          { size: '6', stock: 8 },
          { size: '7', stock: 10 },
          { size: '8', stock: 12 },
          { size: '9', stock: 8 },
          { size: '10', stock: 5 }
        ],
        colors: ['Black', 'Brown', 'Tan', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.5,
        numReviews: 56,
        tags: ['Ladies', 'Boots', 'Winter', 'Fashionable']
      },
      {
        name: "Ladies' Loafers",
        brand: "YOUTH CIRCLE",
        description: "Classic loafers for professional and casual wear.",
        price: 55,
        originalPrice: 75,
        images: [
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '5', stock: 7 },
          { size: '6', stock: 12 },
          { size: '7', stock: 14 },
          { size: '8', stock: 16 },
          { size: '9', stock: 11 },
          { size: '10', stock: 7 }
        ],
        colors: ['Black', 'Brown', 'Navy', 'Burgundy'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 67,
        tags: ['Ladies', 'Loafers', 'Classic', 'Professional']
      }
    ],
    accessories: [
      {
        name: "Ladies' Handbag",
        brand: "YOUTH CIRCLE",
        description: "Stylish handbag perfect for everyday use.",
        price: 45,
        originalPrice: 65,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'One Size', stock: 20 }
        ],
        colors: ['Black', 'Brown', 'Navy', 'Tan'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 98,
        tags: ['Ladies', 'Handbag', 'Stylish', 'Everyday']
      },
      {
        name: "Ladies' Crossbody Bag",
        brand: "YOUTH CIRCLE",
        description: "Convenient crossbody bag for hands-free style.",
        price: 35,
        originalPrice: 50,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'One Size', stock: 25 }
        ],
        colors: ['Black', 'Brown', 'Pink', 'Navy'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 76,
        tags: ['Ladies', 'Crossbody', 'Convenient', 'Hands-Free']
      },
      {
        name: "Ladies' Scarf",
        brand: "YOUTH CIRCLE",
        description: "Elegant scarf for style and warmth.",
        price: 25,
        originalPrice: 35,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'One Size', stock: 30 }
        ],
        colors: ['Red', 'Blue', 'Green', 'Purple'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 89,
        tags: ['Ladies', 'Scarf', 'Elegant', 'Warmth']
      },
      {
        name: "Ladies' Sunglasses",
        brand: "YOUTH CIRCLE",
        description: "Fashionable sunglasses with UV protection.",
        price: 40,
        originalPrice: 55,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'One Size', stock: 15 }
        ],
        colors: ['Black', 'Brown', 'Gold', 'Silver'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 67,
        tags: ['Ladies', 'Sunglasses', 'Fashionable', 'UV Protection']
      },
      {
        name: "Ladies' Jewelry Set",
        brand: "YOUTH CIRCLE",
        description: "Beautiful jewelry set for special occasions.",
        price: 55,
        originalPrice: 75,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'One Size', stock: 12 }
        ],
        colors: ['Gold', 'Silver', 'Rose Gold', 'Pearl'],
        inStock: true,
        featured: false,
        rating: 4.5,
        numReviews: 45,
        tags: ['Ladies', 'Jewelry', 'Beautiful', 'Special Occasions']
      }
    ],
    lingerie: [
      {
        name: "Ladies' Bra Set",
        brand: "YOUTH CIRCLE",
        description: "Comfortable and supportive bra set.",
        price: 35,
        originalPrice: 50,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: '32A', stock: 8 },
          { size: '32B', stock: 10 },
          { size: '34A', stock: 12 },
          { size: '34B', stock: 15 },
          { size: '36A', stock: 10 },
          { size: '36B', stock: 12 }
        ],
        colors: ['Black', 'White', 'Nude', 'Pink'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 78,
        tags: ['Ladies', 'Bra', 'Comfortable', 'Supportive']
      },
      {
        name: "Ladies' Panty Set",
        brand: "YOUTH CIRCLE",
        description: "Soft and comfortable panty set.",
        price: 25,
        originalPrice: 35,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 15 },
          { size: 'S', stock: 20 },
          { size: 'M', stock: 25 },
          { size: 'L', stock: 18 },
          { size: 'XL', stock: 12 }
        ],
        colors: ['Black', 'White', 'Nude', 'Lavender'],
        inStock: true,
        featured: true,
        rating: 4.2,
        numReviews: 89,
        tags: ['Ladies', 'Panty', 'Soft', 'Comfortable']
      },
      {
        name: "Ladies' Sleepwear Set",
        brand: "YOUTH CIRCLE",
        description: "Comfortable sleepwear set for restful nights.",
        price: 40,
        originalPrice: 55,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 10 },
          { size: 'S', stock: 15 },
          { size: 'M', stock: 20 },
          { size: 'L', stock: 15 },
          { size: 'XL', stock: 10 }
        ],
        colors: ['Pink', 'Lavender', 'White', 'Gray'],
        inStock: true,
        featured: false,
        rating: 4.4,
        numReviews: 67,
        tags: ['Ladies', 'Sleepwear', 'Comfortable', 'Restful']
      },
      {
        name: "Ladies' Shapewear",
        brand: "YOUTH CIRCLE",
        description: "Comfortable shapewear for smooth silhouette.",
        price: 50,
        originalPrice: 70,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 6 },
          { size: 'S', stock: 10 },
          { size: 'M', stock: 12 },
          { size: 'L', stock: 10 },
          { size: 'XL', stock: 6 }
        ],
        colors: ['Black', 'Nude', 'White', 'Beige'],
        inStock: true,
        featured: true,
        rating: 4.5,
        numReviews: 54,
        tags: ['Ladies', 'Shapewear', 'Comfortable', 'Smooth']
      },
      {
        name: "Ladies' Lace Set",
        brand: "YOUTH CIRCLE",
        description: "Elegant lace set for special occasions.",
        price: 60,
        originalPrice: 80,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 4 },
          { size: 'S', stock: 8 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 8 },
          { size: 'XL', stock: 4 }
        ],
        colors: ['Black', 'White', 'Red', 'Nude'],
        inStock: true,
        featured: false,
        rating: 4.6,
        numReviews: 43,
        tags: ['Ladies', 'Lace', 'Elegant', 'Special Occasions']
      }
    ],
    'sport-tshirt': [
      {
        name: "Ladies' Sports Bra",
        brand: "YOUTH CIRCLE",
        description: "High-support sports bra for active lifestyle.",
        price: 35,
        originalPrice: 50,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 12 },
          { size: 'S', stock: 18 },
          { size: 'M', stock: 22 },
          { size: 'L', stock: 16 },
          { size: 'XL', stock: 10 }
        ],
        colors: ['Black', 'Navy', 'Pink', 'Gray'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 98,
        tags: ['Ladies', 'Sports Bra', 'High Support', 'Active']
      },
      {
        name: "Ladies' Workout Tank",
        brand: "YOUTH CIRCLE",
        description: "Breathable workout tank for intense training.",
        price: 30,
        originalPrice: 42,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 15 },
          { size: 'S', stock: 22 },
          { size: 'M', stock: 25 },
          { size: 'L', stock: 18 },
          { size: 'XL', stock: 12 }
        ],
        colors: ['Black', 'White', 'Pink', 'Purple'],
        inStock: true,
        featured: true,
        rating: 4.3,
        numReviews: 87,
        tags: ['Ladies', 'Workout Tank', 'Breathable', 'Training']
      },
      {
        name: "Ladies' Yoga Top",
        brand: "YOUTH CIRCLE",
        description: "Comfortable yoga top for flexibility and movement.",
        price: 38,
        originalPrice: 52,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 10 },
          { size: 'S', stock: 16 },
          { size: 'M', stock: 20 },
          { size: 'L', stock: 14 },
          { size: 'XL', stock: 8 }
        ],
        colors: ['Lavender', 'Mint', 'Black', 'White'],
        inStock: true,
        featured: false,
        rating: 4.2,
        numReviews: 76,
        tags: ['Ladies', 'Yoga Top', 'Comfortable', 'Flexible']
      },
      {
        name: "Ladies' Running Top",
        brand: "YOUTH CIRCLE",
        description: "Moisture-wicking running top for long distances.",
        price: 42,
        originalPrice: 58,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 8 },
          { size: 'S', stock: 14 },
          { size: 'M', stock: 18 },
          { size: 'L', stock: 12 },
          { size: 'XL', stock: 6 }
        ],
        colors: ['Navy', 'Black', 'Orange', 'Teal'],
        inStock: true,
        featured: true,
        rating: 4.5,
        numReviews: 65,
        tags: ['Ladies', 'Running Top', 'Moisture-Wicking', 'Long Distance']
      },
      {
        name: "Ladies' Fitness Tee",
        brand: "YOUTH CIRCLE",
        description: "Versatile fitness tee for all workout types.",
        price: 28,
        originalPrice: 38,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 12 },
          { size: 'S', stock: 18 },
          { size: 'M', stock: 22 },
          { size: 'L', stock: 16 },
          { size: 'XL', stock: 10 }
        ],
        colors: ['Gray', 'Black', 'White', 'Coral'],
        inStock: true,
        featured: false,
        rating: 4.1,
        numReviews: 92,
        tags: ['Ladies', 'Fitness Tee', 'Versatile', 'All Workouts']
      }
    ],
    'co-ord-set': [
      {
        name: "Ladies' Casual Co-ord Set",
        brand: "YOUTH CIRCLE",
        description: "Stylish casual co-ord set for effortless style.",
        price: 65,
        originalPrice: 85,
        images: [
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 8 },
          { size: 'S', stock: 12 },
          { size: 'M', stock: 15 },
          { size: 'L', stock: 10 },
          { size: 'XL', stock: 6 }
        ],
        colors: ['Navy', 'Black', 'Gray', 'Burgundy'],
        inStock: true,
        featured: true,
        rating: 4.4,
        numReviews: 78,
        tags: ['Ladies', 'Co-ord Set', 'Casual', 'Effortless']
      },
      {
        name: "Ladies' Formal Co-ord Set",
        brand: "YOUTH CIRCLE",
        description: "Elegant formal co-ord set for professional looks.",
        price: 75,
        originalPrice: 95,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 6 },
          { size: 'S', stock: 10 },
          { size: 'M', stock: 12 },
          { size: 'L', stock: 8 },
          { size: 'XL', stock: 4 }
        ],
        colors: ['Black', 'Navy', 'Gray', 'Burgundy'],
        inStock: true,
        featured: true,
        rating: 4.5,
        numReviews: 56,
        tags: ['Ladies', 'Co-ord Set', 'Formal', 'Professional']
      },
      {
        name: "Ladies' Summer Co-ord Set",
        brand: "YOUTH CIRCLE",
        description: "Light and breezy summer co-ord set.",
        price: 55,
        originalPrice: 75,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 10 },
          { size: 'S', stock: 15 },
          { size: 'M', stock: 18 },
          { size: 'L', stock: 12 },
          { size: 'XL', stock: 8 }
        ],
        colors: ['Coral', 'Mint', 'Lavender', 'White'],
        inStock: true,
        featured: false,
        rating: 4.3,
        numReviews: 67,
        tags: ['Ladies', 'Co-ord Set', 'Summer', 'Light']
      },
      {
        name: "Ladies' Party Co-ord Set",
        brand: "YOUTH CIRCLE",
        description: "Glamorous party co-ord set for special events.",
        price: 85,
        originalPrice: 110,
        images: [
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 4 },
          { size: 'S', stock: 8 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 6 },
          { size: 'XL', stock: 3 }
        ],
        colors: ['Gold', 'Silver', 'Black', 'Red'],
        inStock: true,
        featured: true,
        rating: 4.6,
        numReviews: 43,
        tags: ['Ladies', 'Co-ord Set', 'Party', 'Glamorous']
      },
      {
        name: "Ladies' Workout Co-ord Set",
        brand: "YOUTH CIRCLE",
        description: "Comfortable workout co-ord set for active lifestyle.",
        price: 60,
        originalPrice: 80,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        sizes: [
          { size: 'XS', stock: 8 },
          { size: 'S', stock: 12 },
          { size: 'M', stock: 15 },
          { size: 'L', stock: 10 },
          { size: 'XL', stock: 6 }
        ],
        colors: ['Black', 'Navy', 'Pink', 'Purple'],
        inStock: true,
        featured: false,
        rating: 4.2,
        numReviews: 89,
        tags: ['Ladies', 'Co-ord Set', 'Workout', 'Active']
      }
    ]
  }
};

const seedOrganizedProducts = async () => {
  try {
    console.log('Starting to seed organized products...');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    const allProducts = [];
    
    // Add men's products
    Object.keys(organizedProducts.men).forEach(category => {
      organizedProducts.men[category].forEach(product => {
        allProducts.push({
          ...product,
          category: category
        });
      });
    });
    
    // Add ladies' products
    Object.keys(organizedProducts.ladies).forEach(category => {
      organizedProducts.ladies[category].forEach(product => {
        allProducts.push({
          ...product,
          category: category
        });
      });
    });
    
    // Insert all products
    const insertedProducts = await Product.insertMany(allProducts);
    console.log(`Successfully seeded ${insertedProducts.length} organized products`);
    
    // Show category breakdown
    const categories = await Product.distinct('category');
    console.log('\nProducts per category:');
    for (const category of categories) {
      const count = await Product.countDocuments({ category });
      console.log(`  ${category}: ${count} products`);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding organized products:', error);
    process.exit(1);
  }
};

seedOrganizedProducts();
