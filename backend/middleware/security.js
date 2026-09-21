const rateLimit = require('express-rate-limit')

const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many inquiries from this IP. Please try again later.',
  },
})

module.exports = inquiryLimiter
