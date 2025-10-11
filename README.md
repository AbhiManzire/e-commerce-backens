# E-commerce Backend

A Node.js/Express backend for an e-commerce application with MongoDB.

## Features

- User authentication and authorization
- Product management
- Order processing
- Payment integration
- RESTful API endpoints

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mearnsneakers?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=production
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin only)
- `GET /api/users` - Get user profile
- `POST /api/users/login` - User login
- `POST /api/users/register` - User registration
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order

## Deployment on Render

1. Connect your GitHub repository to Render
2. Set the following environment variables in Render dashboard:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random string
   - `NODE_ENV`: production
3. Deploy!

## Local Development

```bash
npm install
npm run dev
```

The server will start on port 5000.

