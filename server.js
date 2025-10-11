  const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200 // For legacy browser support
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS request headers:', req.headers);
  }
  next();
});

// MongoDB Connection with error handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mearnsneakers', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log('MongoDB Connection Error:', err.message);
    console.log('Please make sure MongoDB is running or use MongoDB Atlas');
    console.log('You can install MongoDB from: https://www.mongodb.com/try/download/community');
    console.log('Or use MongoDB Atlas: https://www.mongodb.com/atlas');
    
    // Don't exit the process, let the server run with limited functionality
    console.log('Server will run with limited functionality...');
  }
};

connectDB();

// Import routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/paymentRoutes');

// Handle preflight requests
app.options('*', cors(corsOptions));

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',     
    message: 'Server is running',
    mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Test CORS endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'CORS test successful',
    timestamp: new Date().toISOString()
  });
});

// API root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'E-commerce Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      users: '/api/users',
      orders: '/api/orders',
      payments: '/api/payments'
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
