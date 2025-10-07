const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mearnsneakers', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log('MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

// Create 5 products per category
const createProducts = async () => {
  try {
    // Clear existing products
    console.log('Clearing existing products...');
    await Product.deleteMany({});
    console.log('✅ Database cleared');

    const allProducts = [];

    // MEN'S PRODUCTS - 5 products each category
    // Men's T-shirts (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's T-Shirt ${i}`,
        "brand": "Youth Circle",
        "description": `High-quality men's t-shirt ${i} with comfortable cotton blend fabric. Perfect for casual wear.`,
        "price": 19.99 + (i * 5),
        "originalPrice": 29.99 + (i * 5),
        "images": [`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&sig=${i}`],
        "category": "tshirt",
        "sizes": [{"size": "S", "stock": 10}, {"size": "M", "stock": 15}, {"size": "L", "stock": 20}, {"size": "XL", "stock": 12}],
        "colors": ["White", "Black", "Navy", "Gray"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.0 + (i * 0.1), 5.0),
        "numReviews": 50 + (i * 10),
        "tags": ["Men", "T-Shirt", "Cotton", "Casual"]
      });
    }

    // Men's Shirts (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's Shirt ${i}`,
        "brand": "Youth Circle",
        "description": `Classic men's shirt ${i} perfect for formal and casual occasions.`,
        "price": 34.99 + (i * 5),
        "originalPrice": 44.99 + (i * 5),
        "images": [`https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop&sig=${i}`],
        "category": "shirt",
        "sizes": [{"size": "S", "stock": 8}, {"size": "M", "stock": 12}, {"size": "L", "stock": 16}, {"size": "XL", "stock": 10}],
        "colors": ["White", "Blue", "Pink", "Gray"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.1 + (i * 0.1), 5.0),
        "numReviews": 60 + (i * 10),
        "tags": ["Men", "Shirt", "Formal", "Casual"]
      });
    }

    // Men's Cargo (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's Cargo Pants ${i}`,
        "brand": "Youth Circle",
        "description": `Durable men's cargo pants ${i} with multiple pockets for utility.`,
        "price": 49.99 + (i * 5),
        "originalPrice": 69.99 + (i * 5),
        "images": [`https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "cargo",
        "sizes": [{"size": "S", "stock": 6}, {"size": "M", "stock": 10}, {"size": "L", "stock": 14}, {"size": "XL", "stock": 8}],
        "colors": ["Khaki", "Black", "Olive", "Brown"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.2 + (i * 0.1), 5.0),
        "numReviews": 70 + (i * 10),
        "tags": ["Men", "Cargo", "Pockets", "Utility"]
      });
    }

    // Men's Jeans (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's Jeans ${i}`,
        "brand": "Youth Circle",
        "description": `Classic men's jeans ${i} with comfortable fit and durable denim.`,
        "price": 59.99 + (i * 5),
        "originalPrice": 79.99 + (i * 5),
        "images": [`https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "jeans",
        "sizes": [{"size": "S", "stock": 5}, {"size": "M", "stock": 8}, {"size": "L", "stock": 12}, {"size": "XL", "stock": 6}],
        "colors": ["Blue", "Dark Blue", "Black", "Gray"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.3 + (i * 0.1), 5.0),
        "numReviews": 80 + (i * 10),
        "tags": ["Men", "Jeans", "Denim", "Classic"]
      });
    }

    // Men's Trousers (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's Trousers ${i}`,
        "brand": "Youth Circle",
        "description": `Professional men's trousers ${i} for formal occasions.`,
        "price": 54.99 + (i * 5),
        "originalPrice": 74.99 + (i * 5),
        "images": [`https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop&sig=${i}`],
        "category": "trousers",
        "sizes": [{"size": "S", "stock": 4}, {"size": "M", "stock": 7}, {"size": "L", "stock": 10}, {"size": "XL", "stock": 5}],
        "colors": ["Black", "Navy", "Gray", "Brown"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.4 + (i * 0.1), 5.0),
        "numReviews": 90 + (i * 10),
        "tags": ["Men", "Trousers", "Formal", "Professional"]
      });
    }

    // Men's Hoodies & Sweaters (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's Hoodie ${i}`,
        "brand": "Youth Circle",
        "description": `Comfortable men's hoodie ${i} perfect for casual wear.`,
        "price": 44.99 + (i * 5),
        "originalPrice": 64.99 + (i * 5),
        "images": [`https://images.unsplash.com/photo-1581655353564-dff4815485f1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "hoodies-sweaters",
        "sizes": [{"size": "S", "stock": 6}, {"size": "M", "stock": 9}, {"size": "L", "stock": 13}, {"size": "XL", "stock": 7}],
        "colors": ["Black", "Gray", "Navy", "Brown"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.5 + (i * 0.1), 5.0),
        "numReviews": 100 + (i * 10),
        "tags": ["Men", "Hoodie", "Casual", "Comfortable"]
      });
    }

    // Men's Sneakers (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's Sneakers ${i}`,
        "brand": "Youth Circle",
        "description": `High-performance men's sneakers ${i} for sports and casual wear.`,
        "price": 89.99 + (i * 10),
        "originalPrice": 129.99 + (i * 10),
        "images": [`https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "sneakers",
        "sizes": [{"size": "7", "stock": 8}, {"size": "8", "stock": 12}, {"size": "9", "stock": 15}, {"size": "10", "stock": 10}, {"size": "11", "stock": 6}],
        "colors": ["White", "Black", "Blue", "Red"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.6 + (i * 0.1), 5.0),
        "numReviews": 110 + (i * 10),
        "tags": ["Men", "Sneakers", "Sports", "Athletic"]
      });
    }

    // Men's Flip Flops (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Men's Flip Flops ${i}`,
        "brand": "Youth Circle",
        "description": `Comfortable men's flip flops ${i} perfect for beach and casual wear.`,
        "price": 19.99 + (i * 3),
        "originalPrice": 29.99 + (i * 3),
        "images": [`https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "flipflop",
        "sizes": [{"size": "7", "stock": 10}, {"size": "8", "stock": 15}, {"size": "9", "stock": 18}, {"size": "10", "stock": 12}, {"size": "11", "stock": 8}],
        "colors": ["Black", "Blue", "Brown", "Gray"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.7 + (i * 0.1), 5.0),
        "numReviews": 120 + (i * 10),
        "tags": ["Men", "Flip Flops", "Beach", "Casual"]
      });
    }

    // LADIES PRODUCTS - 5 products each category
    // Ladies T-shirts (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Ladies' T-Shirt ${i}`,
        "brand": "Youth Circle",
        "description": `Soft and comfortable ladies' t-shirt ${i} with feminine fit.`,
        "price": 17.99 + (i * 3),
        "originalPrice": 24.99 + (i * 3),
        "images": [`https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop&sig=${i}`],
        "category": "ladies-tshirt",
        "sizes": [{"size": "XS", "stock": 8}, {"size": "S", "stock": 12}, {"size": "M", "stock": 16}, {"size": "L", "stock": 14}, {"size": "XL", "stock": 10}],
        "colors": ["White", "Pink", "Lavender", "Mint"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.0 + (i * 0.1), 5.0),
        "numReviews": 50 + (i * 10),
        "tags": ["Ladies", "T-Shirt", "Soft", "Feminine"]
      });
    }

    // Ladies Shirts (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Ladies' Shirt ${i}`,
        "brand": "Youth Circle",
        "description": `Elegant ladies' shirt ${i} with flattering fit and style.`,
        "price": 32.99 + (i * 4),
        "originalPrice": 42.99 + (i * 4),
        "images": [`https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "ladies-shirt",
        "sizes": [{"size": "XS", "stock": 6}, {"size": "S", "stock": 9}, {"size": "M", "stock": 13}, {"size": "L", "stock": 11}, {"size": "XL", "stock": 7}],
        "colors": ["White", "Navy", "Coral", "Blush"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.1 + (i * 0.1), 5.0),
        "numReviews": 60 + (i * 10),
        "tags": ["Ladies", "Shirt", "Elegant", "Feminine"]
      });
    }

    // Ladies Cargo (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Ladies' Cargo Pants ${i}`,
        "brand": "Youth Circle",
        "description": `Stylish ladies' cargo pants ${i} with functional pockets.`,
        "price": 44.99 + (i * 4),
        "originalPrice": 59.99 + (i * 4),
        "images": [`https://images.unsplash.com/photo-1581655353564-dff4815485f1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "ladies-cargo",
        "sizes": [{"size": "XS", "stock": 5}, {"size": "S", "stock": 8}, {"size": "M", "stock": 12}, {"size": "L", "stock": 10}, {"size": "XL", "stock": 6}],
        "colors": ["Khaki", "Black", "Olive", "Camel"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.2 + (i * 0.1), 5.0),
        "numReviews": 70 + (i * 10),
        "tags": ["Ladies", "Cargo", "Stylish", "Functional"]
      });
    }

    // Ladies Jeans (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Ladies' Jeans ${i}`,
        "brand": "Youth Circle",
        "description": `Flattering ladies' jeans ${i} with stretch denim for comfort.`,
        "price": 54.99 + (i * 4),
        "originalPrice": 74.99 + (i * 4),
        "images": [`https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "ladies-jeans",
        "sizes": [{"size": "XS", "stock": 4}, {"size": "S", "stock": 7}, {"size": "M", "stock": 11}, {"size": "L", "stock": 9}, {"size": "XL", "stock": 5}],
        "colors": ["Blue", "Black", "Light Blue", "Gray"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.3 + (i * 0.1), 5.0),
        "numReviews": 80 + (i * 10),
        "tags": ["Ladies", "Jeans", "Stretch", "Comfortable"]
      });
    }

    // Ladies Trousers (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Ladies' Trousers ${i}`,
        "brand": "Youth Circle",
        "description": `Elegant ladies' trousers ${i} perfect for office and casual wear.`,
        "price": 49.99 + (i * 4),
        "originalPrice": 69.99 + (i * 4),
        "images": [`https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop&sig=${i}`],
        "category": "ladies-trousers",
        "sizes": [{"size": "XS", "stock": 3}, {"size": "S", "stock": 6}, {"size": "M", "stock": 9}, {"size": "L", "stock": 7}, {"size": "XL", "stock": 4}],
        "colors": ["Black", "Navy", "Beige", "Gray"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.4 + (i * 0.1), 5.0),
        "numReviews": 90 + (i * 10),
        "tags": ["Ladies", "Trousers", "Elegant", "Office"]
      });
    }

    // Ladies Hoodies (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Ladies' Hoodie ${i}`,
        "brand": "Youth Circle",
        "description": `Comfortable ladies' hoodie ${i} perfect for relaxed style.`,
        "price": 39.99 + (i * 4),
        "originalPrice": 54.99 + (i * 4),
        "images": [`https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "ladies-hoodies",
        "sizes": [{"size": "XS", "stock": 6}, {"size": "S", "stock": 9}, {"size": "M", "stock": 13}, {"size": "L", "stock": 11}, {"size": "XL", "stock": 7}],
        "colors": ["Pink", "Gray", "Black", "Lavender"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.5 + (i * 0.1), 5.0),
        "numReviews": 100 + (i * 10),
        "tags": ["Ladies", "Hoodie", "Comfortable", "Relaxed"]
      });
    }

    // Ladies Co-ord Set (5 products)
    for (let i = 1; i <= 5; i++) {
      allProducts.push({
        "name": `Ladies' Co-ord Set ${i}`,
        "brand": "Youth Circle",
        "description": `Matching ladies' co-ord set ${i} for a complete stylish look.`,
        "price": 69.99 + (i * 5),
        "originalPrice": 89.99 + (i * 5),
        "images": [`https://images.unsplash.com/photo-1581655353564-dff4815485f1?w=500&h=500&fit=crop&sig=${i}`],
        "category": "coord-set",
        "sizes": [{"size": "XS", "stock": 4}, {"size": "S", "stock": 7}, {"size": "M", "stock": 10}, {"size": "L", "stock": 8}, {"size": "XL", "stock": 5}],
        "colors": ["Black", "Navy", "Coral", "Blush"],
        "inStock": true,
        "featured": i <= 2,
        "rating": Math.min(4.6 + (i * 0.1), 5.0),
        "numReviews": 110 + (i * 10),
        "tags": ["Ladies", "Co-ord", "Set", "Matching"]
      });
    }

    // Ladies Shorts (5 products) - Your existing crop tops
    const ladiesShortsProducts = [
      {
        "name": "Straight-cut Casual Top",
        "brand": "Accurate Pro",
        "description": "Straight-cut casual top perfect for everyday wear.",
        "price": 22.99,
        "originalPrice": 34.99,
        "images": ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"],
        "category": "ladies-shorts",
        "sizes": [{"size": "XS", "stock": 10}, {"size": "S", "stock": 16}, {"size": "M", "stock": 20}, {"size": "L", "stock": 18}, {"size": "XL", "stock": 14}],
        "colors": ["Black", "Navy", "Khaki", "White", "Gray"],
        "inStock": true,
        "featured": true,
        "rating": 4.4,
        "numReviews": 156,
        "tags": ["Ladies", "Casual", "Top", "Straight-cut"]
      },
      {
        "name": "Ruffled V-neck Crop Top",
        "brand": "iBuyXi",
        "description": "Beautiful ruffled V-neck crop top with elegant design.",
        "price": 15.99,
        "originalPrice": 24.99,
        "images": ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop"],
        "category": "ladies-shorts",
        "sizes": [{"size": "XS", "stock": 10}, {"size": "S", "stock": 15}, {"size": "M", "stock": 20}, {"size": "L", "stock": 18}, {"size": "XL", "stock": 12}],
        "colors": ["White", "Black", "Pink", "Blue", "Coral"],
        "inStock": true,
        "featured": true,
        "rating": 4.5,
        "numReviews": 128,
        "tags": ["Ladies", "Crop Top", "Ruffles", "V-Neck"]
      },
      {
        "name": "Black Hollow-out Crop Top",
        "brand": "GoanGirl",
        "description": "Stylish black hollow-out crop top with unique cut-out design.",
        "price": 15.99,
        "originalPrice": 18.99,
        "images": ["https://images.unsplash.com/photo-1581655353564-dff4815485f1?w=500&h=500&fit=crop"],
        "category": "ladies-shorts",
        "sizes": [{"size": "XS", "stock": 12}, {"size": "S", "stock": 18}, {"size": "M", "stock": 22}, {"size": "L", "stock": 20}, {"size": "XL", "stock": 15}],
        "colors": ["Black", "White", "Navy", "Coral", "Pink"],
        "inStock": true,
        "featured": true,
        "rating": 4.3,
        "numReviews": 95,
        "tags": ["Ladies", "Crop Top", "Hollow-out", "Black"]
      },
      {
        "name": "Women's Jersey Crop Tee",
        "brand": "Bella Canvas",
        "description": "Comfortable women's jersey crop tee with relaxed fit.",
        "price": 18.99,
        "originalPrice": 28.99,
        "images": ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"],
        "category": "ladies-shorts",
        "sizes": [{"size": "XS", "stock": 8}, {"size": "S", "stock": 14}, {"size": "M", "stock": 18}, {"size": "L", "stock": 16}, {"size": "XL", "stock": 12}],
        "colors": ["White", "Black", "Gray", "Pink", "Navy"],
        "inStock": true,
        "featured": false,
        "rating": 4.7,
        "numReviews": 203,
        "tags": ["Ladies", "Crop Tee", "Jersey", "Comfortable"]
      },
      {
        "name": "Ladies' Summer Crop Top",
        "brand": "Youth Circle",
        "description": "Lightweight ladies' summer crop top perfect for warm weather.",
        "price": 16.99,
        "originalPrice": 22.99,
        "images": ["https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop"],
        "category": "ladies-shorts",
        "sizes": [{"size": "XS", "stock": 9}, {"size": "S", "stock": 13}, {"size": "M", "stock": 17}, {"size": "L", "stock": 15}, {"size": "XL", "stock": 11}],
        "colors": ["White", "Yellow", "Coral", "Mint"],
        "inStock": true,
        "featured": false,
        "rating": 4.2,
        "numReviews": 75,
        "tags": ["Ladies", "Crop Top", "Summer", "Lightweight"]
      }
    ];

    allProducts.push(...ladiesShortsProducts);

    // Insert all products
    console.log('Adding all products to database...');
    const insertedProducts = await Product.insertMany(allProducts);
    console.log(`✅ Successfully added ${insertedProducts.length} products!`);

    // Display summary
    console.log('\n=== PRODUCT SUMMARY ===');
    const categories = {};
    insertedProducts.forEach(product => {
      if (!categories[product.category]) {
        categories[product.category] = 0;
      }
      categories[product.category]++;
    });

    console.log('\n📊 Products by Category:');
    Object.entries(categories).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} products`);
    });

    console.log('\n🎉 Complete product database created!');
    console.log('✅ 5 products in each category');
    console.log('✅ Men and Ladies categories completely separate');
    console.log('✅ Homepage will display 5 products per category');

  } catch (error) {
    console.error('Error creating products:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nDatabase connection closed.');
    process.exit(0);
  }
};

// Run the script
const runScript = async () => {
  await connectDB();
  await createProducts();
};

runScript();
