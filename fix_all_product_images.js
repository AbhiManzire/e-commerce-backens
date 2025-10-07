const mongoose = require('mongoose');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mearnsneakers').then(async () => {
  console.log('Connected to database');
  
  try {
    // Define category-specific image sets
    const imageSets = {
      // Men's Categories
      'tshirt': [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'shirt': [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop'
      ],
      'jeans': [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop'
      ],
      'cargo': [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'trousers': [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'hoodies-sweaters': [
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop'
      ],
      'flipflop': [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
      ],
      'sneakers': [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
      ],
      
      // Ladies' Categories
      'ladies-tshirt': [
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'ladies-shirt': [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop'
      ],
      'ladies-jeans': [
        'https://i.pinimg.com/736x/94/7c/f0/947cf07167c4d9e42da60ee7459e4348.jpg',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop'
      ],
      'ladies-cargo': [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'ladies-trousers': [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'ladies-hoodies': [
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop'
      ],
      'ladies-shorts': [
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'coord-set': [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop'
      ]
    };

    // Get all unique categories from the database
    const categories = await Product.distinct('category');
    console.log('Found categories:', categories);

    let totalUpdated = 0;

    // Update images for each category
    for (const category of categories) {
      if (imageSets[category]) {
        console.log(`\n🔄 Updating ${category} products...`);
        
        const products = await Product.find({ category: category });
        console.log(`Found ${products.length} products in ${category}`);

        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          const imageSet = imageSets[category];
          
          // Use different images for each product in the category
          const productImages = [
            imageSet[i % imageSet.length], // Primary image
            ...imageSet.slice(0, 4) // Additional images
          ];

          const result = await Product.updateOne(
            { _id: product._id },
            { $set: { images: productImages } }
          );

          if (result.modifiedCount > 0) {
            totalUpdated++;
            console.log(`  ✅ Updated ${product.name}`);
          }
        }
      } else {
        console.log(`⚠️  No image set defined for category: ${category}`);
      }
    }

    console.log(`\n🎉 Image update complete!`);
    console.log(`📊 Total products updated: ${totalUpdated}`);

    // Verify updates by showing sample products from each category
    console.log('\n📋 Verification - Sample products from each category:');
    for (const category of categories) {
      if (imageSets[category]) {
        const sampleProduct = await Product.findOne({ category: category });
        if (sampleProduct) {
          console.log(`\n${category.toUpperCase()}:`);
          console.log(`  Product: ${sampleProduct.name}`);
          console.log(`  Images: ${sampleProduct.images.length}`);
          console.log(`  Primary Image: ${sampleProduct.images[0]}`);
        }
      }
    }

  } catch (error) {
    console.error('Error updating images:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Database connection closed');
  }
}).catch(err => {
  console.error('Database connection error:', err);
  process.exit(1);
});
