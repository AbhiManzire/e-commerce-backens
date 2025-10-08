const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');

dotenv.config();

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mearnsneakers';
console.log('Connecting to:', mongoUri);

const seedDatabase = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');

    // Clear existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Cleared existing data');

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log(`Inserted ${createdUsers.length} users`);

    // Get admin user ID
    const adminUser = createdUsers[0]._id;

    // Prepare products with admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // Insert products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${insertedProducts.length} products`);

    console.log('✅ Database seeded successfully!');
    console.log(`📊 Total Products: ${insertedProducts.length}`);
    console.log(`👥 Total Users: ${createdUsers.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeder
seedDatabase();
