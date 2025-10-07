const mongoose = require('mongoose');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mearnsneakers').then(async () => {
  console.log('Connected to database');
  
  try {
    // Define image sets for the remaining categories
    const additionalImageSets = {
      'ladies-accessories': [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1617038220319-276d4f7b9b8e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1617038220319-276d4f7b9b8e?w=500&h=500&fit=crop'
      ],
      'ladies-clothing': [
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'ladies-sport': [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop'
      ],
      'lingerie': [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1617038220319-276d4f7b9b8e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1617038220319-276d4f7b9b8e?w=500&h=500&fit=crop'
      ],
      'men-accessories': [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1617038220319-276d4f7b9b8e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1617038220319-276d4f7b9b8e?w=500&h=500&fit=crop'
      ],
      'men-sport': [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop'
      ],
      'mobile': [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
      ],
      'pants': [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1506629905607-9b0a2b0b8b8b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop'
      ],
      'shirts': [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop'
      ],
      'watches': [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1523170335258-f5c6c6c0f7c8?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1523170335258-f5c6c6c0f7c8?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
      ],
      'bags': [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
      ]
    };

    let totalUpdated = 0;

    // Update images for each remaining category
    for (const [category, imageSet] of Object.entries(additionalImageSets)) {
      console.log(`\n🔄 Updating ${category} products...`);
      
      const products = await Product.find({ category: category });
      console.log(`Found ${products.length} products in ${category}`);

      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
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
    }

    console.log(`\n🎉 Additional categories update complete!`);
    console.log(`📊 Total products updated: ${totalUpdated}`);

    // Final verification - show all categories with product counts
    console.log('\n📋 Final Verification - All categories:');
    const allCategories = await Product.distinct('category');
    
    for (const category of allCategories.sort()) {
      const count = await Product.countDocuments({ category: category });
      const sampleProduct = await Product.findOne({ category: category });
      console.log(`\n${category.toUpperCase()}: ${count} products`);
      if (sampleProduct) {
        console.log(`  Sample: ${sampleProduct.name}`);
        console.log(`  Primary Image: ${sampleProduct.images[0]}`);
      }
    }

  } catch (error) {
    console.error('Error updating remaining categories:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Database connection closed');
  }
}).catch(err => {
  console.error('Database connection error:', err);
  process.exit(1);
});
