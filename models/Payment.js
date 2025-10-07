const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'INR'
  },
  paymentMethod: {
    type: String,
    default: 'mobile_otp'
  },
  status: {
    type: String,
    enum: ['pending', 'otp_sent', 'otp_verified', 'completed', 'failed', 'cancelled'],
    default: 'pending'
  },
  otp: {
    code: {
      type: String,
      required: true
    },
    expiresAt: {
      type: Date,
      required: true
    },
    attempts: {
      type: Number,
      default: 0,
      max: 3
    }
  },
  transactionId: {
    type: String,
    unique: true,
    sparse: true
  },
  paymentGatewayResponse: {
    type: mongoose.Schema.Types.Mixed
  },
  failureReason: {
    type: String
  }
}, {
  timestamps: true
});

// Index for faster queries
paymentSchema.index({ order: 1 });
paymentSchema.index({ user: 1 });
paymentSchema.index({ mobileNumber: 1 });
paymentSchema.index({ status: 1 });

// Virtual for checking if OTP is expired
paymentSchema.virtual('isOtpExpired').get(function() {
  return this.otp.expiresAt < new Date();
});

// Method to generate OTP
paymentSchema.methods.generateOTP = function() {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  this.otp.code = otp;
  this.otp.expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
  this.otp.attempts = 0;
  this.status = 'otp_sent';
  return otp;
};

// Method to verify OTP
paymentSchema.methods.verifyOTP = function(enteredOTP) {
  if (this.isOtpExpired) {
    return { success: false, message: 'OTP has expired' };
  }
  
  if (this.otp.attempts >= 3) {
    return { success: false, message: 'Maximum OTP attempts exceeded' };
  }
  
  this.otp.attempts += 1;
  
  if (this.otp.code === enteredOTP) {
    this.status = 'otp_verified';
    return { success: true, message: 'OTP verified successfully' };
  }
  
  return { success: false, message: 'Invalid OTP' };
};

// Method to complete payment
paymentSchema.methods.completePayment = function(transactionId) {
  this.status = 'completed';
  this.transactionId = transactionId;
  this.paymentGatewayResponse = {
    timestamp: new Date(),
    status: 'success'
  };
};

// Method to fail payment
paymentSchema.methods.failPayment = function(reason) {
  this.status = 'failed';
  this.failureReason = reason;
  this.paymentGatewayResponse = {
    timestamp: new Date(),
    status: 'failed',
    reason: reason
  };
};

module.exports = mongoose.model('Payment', paymentSchema);
