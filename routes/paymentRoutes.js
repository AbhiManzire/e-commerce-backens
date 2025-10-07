const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Order = require('../models/Order');
const { protect } = require('../middleware/authMiddleware');

// @desc    Initiate mobile payment with OTP
// @route   POST /api/payments/mobile/initiate
// @access  Private
router.post('/mobile/initiate', protect, async (req, res) => {
  try {
    const { orderId, mobileNumber } = req.body;

    // Validate input
    if (!orderId || !mobileNumber) {
      return res.status(400).json({
        success: false,
        message: 'Order ID and mobile number are required'
      });
    }

    // Validate mobile number format (Indian mobile number)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid 10-digit mobile number'
      });
    }

    // Find the order
    const order = await Order.findById(orderId).populate('user', 'name email');
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if order belongs to the user
    if (order.user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this order'
      });
    }

    // Check if order is in pending status
    if (order.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'Order is not in pending status'
      });
    }

    // Check if payment already exists
    let payment = await Payment.findOne({ order: orderId });
    
    if (payment && payment.status === 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Payment already completed for this order'
      });
    }

    // Create or update payment
    if (!payment) {
      payment = new Payment({
        order: orderId,
        user: req.user._id,
        mobileNumber: mobileNumber,
        amount: order.totalPrice,
        currency: 'INR',
        paymentMethod: 'mobile_otp'
      });
    } else {
      payment.mobileNumber = mobileNumber;
      payment.amount = order.totalPrice;
    }

    // Generate OTP
    const otp = payment.generateOTP();
    await payment.save();

    // TODO: Send OTP via SMS service (implement actual SMS service)
    console.log(`OTP for ${mobileNumber}: ${otp}`);

    res.status(200).json({
      success: true,
      message: 'OTP sent successfully to your mobile number',
      data: {
        paymentId: payment._id,
        mobileNumber: mobileNumber,
        amount: order.totalPrice,
        expiresIn: 600 // 10 minutes in seconds
      }
    });

  } catch (error) {
    console.error('Payment initiation error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// @desc    Verify OTP and complete payment
// @route   POST /api/payments/mobile/verify
// @access  Private
router.post('/mobile/verify', protect, async (req, res) => {
  try {
    const { paymentId, otp } = req.body;

    // Validate input
    if (!paymentId || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Payment ID and OTP are required'
      });
    }

    // Find the payment
    const payment = await Payment.findById(paymentId).populate('order');
    
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    // Check if payment belongs to the user
    if (payment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this payment'
      });
    }

    // Verify OTP
    const otpResult = payment.verifyOTP(otp);
    
    if (!otpResult.success) {
      await payment.save();
      return res.status(400).json({
        success: false,
        message: otpResult.message
      });
    }

    // Generate transaction ID
    const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Complete payment
    payment.completePayment(transactionId);
    await payment.save();

    // Update order status
    const order = payment.order;
    order.status = 'paid';
    order.paymentMethod = 'mobile_otp';
    order.paymentResult = {
      id: transactionId,
      status: 'completed',
      update_time: new Date(),
      email_address: order.user.email
    };
    await order.save();

    res.status(200).json({
      success: true,
      message: 'Payment completed successfully',
      data: {
        transactionId: transactionId,
        amount: payment.amount,
        orderId: order._id,
        status: 'completed'
      }
    });

  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// @desc    Resend OTP
// @route   POST /api/payments/mobile/resend
// @access  Private
router.post('/mobile/resend', protect, async (req, res) => {
  try {
    const { paymentId } = req.body;

    if (!paymentId) {
      return res.status(400).json({
        success: false,
        message: 'Payment ID is required'
      });
    }

    // Find the payment
    const payment = await Payment.findById(paymentId);
    
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    // Check if payment belongs to the user
    if (payment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this payment'
      });
    }

    // Check if payment is in correct status
    if (payment.status !== 'otp_sent' && payment.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'Cannot resend OTP for this payment'
      });
    }

    // Generate new OTP
    const otp = payment.generateOTP();
    await payment.save();

    // TODO: Send OTP via SMS service
    console.log(`Resent OTP for ${payment.mobileNumber}: ${otp}`);

    res.status(200).json({
      success: true,
      message: 'OTP resent successfully',
      data: {
        expiresIn: 600 // 10 minutes in seconds
      }
    });

  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// @desc    Get payment status
// @route   GET /api/payments/:paymentId
// @access  Private
router.get('/:paymentId', protect, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.paymentId).populate('order');
    
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    // Check if payment belongs to the user
    if (payment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this payment'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        paymentId: payment._id,
        orderId: payment.order._id,
        mobileNumber: payment.mobileNumber,
        amount: payment.amount,
        status: payment.status,
        transactionId: payment.transactionId,
        createdAt: payment.createdAt,
        updatedAt: payment.updatedAt
      }
    });

  } catch (error) {
    console.error('Get payment status error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;
