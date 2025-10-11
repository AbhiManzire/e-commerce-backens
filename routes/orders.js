const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect, admin } = require('../middleware/authMiddleware');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    console.log('🔄 Creating order with data:', req.body);
    
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({ message: 'No order items' });
      return;
    }

    // Validate required fields
    if (!orderItems || !shippingAddress || !paymentMethod || !totalPrice) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    // Ensure paymentMethod is a string
    const paymentMethodValue = typeof paymentMethod === 'string' 
      ? paymentMethod 
      : paymentMethod?.method || 'mobile_otp';

    // Validate shipping address fields
    if (!shippingAddress.fullName || !shippingAddress.address || !shippingAddress.city || 
        !shippingAddress.postalCode || !shippingAddress.country || !shippingAddress.phone) {
      res.status(400).json({ message: 'Missing required shipping address fields' });
      return;
    }

    // Map cart items to order items format
    const mappedOrderItems = orderItems.map(item => ({
      name: item.name,
      qty: item.qty,
      image: item.image,
      price: item.price,
      size: item.size,
      product: item._id // Map _id to product field
    }));

    const order = new Order({
      orderItems: mappedOrderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod: paymentMethodValue,
      taxPrice: taxPrice || 0,
      shippingPrice: shippingPrice || 0,
      totalPrice,
      status: 'pending'
    });

    console.log('📦 Order object to save:', order);
    const createdOrder = await order.save();
    console.log('✅ Order created successfully:', createdOrder._id);
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error('❌ Order creation error:', error);
    console.error('❌ Error details:', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
router.put('/:id/pay', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
router.put('/:id/deliver', protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Update order (admin)
// @route   PUT /api/orders/:id
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    console.log('🔄 Updating order:', req.params.id, 'with data:', req.body);
    
    const order = await Order.findById(req.params.id);

    if (order) {
      // Update order fields
      if (req.body.isPaid !== undefined) {
        order.isPaid = req.body.isPaid;
        if (req.body.isPaid && !order.paidAt) {
          order.paidAt = Date.now();
        }
      }
      
      if (req.body.isDelivered !== undefined) {
        order.isDelivered = req.body.isDelivered;
        if (req.body.isDelivered && !order.deliveredAt) {
          order.deliveredAt = Date.now();
        }
      }
      
      if (req.body.status) {
        order.status = req.body.status;
      }

      const updatedOrder = await order.save();
      console.log('✅ Order updated successfully:', updatedOrder._id);
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error('❌ Update order error:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'id name email');
    res.json(orders);
  } catch (error) {
    console.error('Get all orders error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
