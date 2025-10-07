const mongoose = require('mongoose');
const ladiesProducts = require('./data/ladies_products');
const Product = require('./models/Product');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/mearnsneakers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addLadiesProducts = async () => {
  try {
    // Get admin user
    const adminUser = await User.findOne({ isAdmin: true });
    if (!adminUser) {
      console.log('Admin user not found');
      process.exit(1);
    }

    // Delete existing ladies products
    await Product.deleteMany({
      category: { $in: ['ladies-sport', 'ladies-clothing', 'ladies-accessories', 'lingerie'] }
    });
    console.log('Existing ladies products deleted');

    // Add new ladies products
    const sampleProducts = ladiesProducts.map((product) => {
      return { ...product, user: adminUser._id };
    });

    await Product.insertMany(sampleProducts);
    console.log('Ladies products added successfully!');
    
    // Count products by category
    const ladiesSport = await Product.countDocuments({ category: 'ladies-sport' });
    const ladiesClothing = await Product.countDocuments({ category: 'ladies-clothing' });
    const ladiesAccessories = await Product.countDocuments({ category: 'ladies-accessories' });
    const ladiesLingerie = await Product.countDocuments({ category: 'lingerie' });
    
    console.log('Ladies Sport Products:', ladiesSport);
    console.log('Ladies Clothing Products:', ladiesClothing);
    console.log('Ladies Accessories Products:', ladiesAccessories);
    console.log('Ladies Lingerie Products:', ladiesLingerie);
    
    process.exit();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

addLadiesProducts();
