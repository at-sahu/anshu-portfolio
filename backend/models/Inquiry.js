const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    phone: { type: String, trim: true, maxlength: 18 },
    subject: { type: String, required: true, trim: true, maxlength: 120 },
    budget: { type: String, required: true, trim: true, maxlength: 80 },
    projectType: { type: String, required: true, trim: true, maxlength: 80 },
    message: { type: String, required: true, trim: true, maxlength: 1200 },
    status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Inquiry', inquirySchema)
