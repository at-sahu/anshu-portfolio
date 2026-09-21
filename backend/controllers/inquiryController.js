const Inquiry = require('../models/Inquiry')
const validator = require('validator')

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function sendNotificationEmail(inquiry) {
  if (!process.env.BREVO_API_KEY || !process.env.NOTIFICATION_EMAIL || !process.env.FROM_EMAIL) {
    console.warn('Email notification skipped: Brevo environment variables are not configured')
    return false
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: process.env.FROM_NAME || 'Anshu Portfolio',
        email: process.env.FROM_EMAIL,
      },
      to: [{ email: process.env.NOTIFICATION_EMAIL }],
      replyTo: {
        email: inquiry.email,
        name: inquiry.fullName,
      },
      subject: `New Portfolio Inquiry: ${inquiry.subject}`,
      htmlContent: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(inquiry.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(inquiry.phone || 'Not provided')}</p>
        <p><strong>Budget:</strong> ${escapeHtml(inquiry.budget)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(inquiry.projectType)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(inquiry.subject)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(inquiry.message).replace(/\n/g, '<br />')}</p>
      `,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Brevo email failed (${response.status}): ${body}`)
  }

  return true
}

async function createInquiry(req, res) {
  try {
    const { fullName, email, phone, subject, budget, projectType, message } = req.body || {}

    if (!fullName || !email || !subject || !budget || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields.',
      })
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      })
    }

    if (String(fullName).length < 2 || String(fullName).length > 80) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid name.',
      })
    }

    if (String(message).length < 20 || String(message).length > 1200) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 20 and 1200 characters.',
      })
    }

    const inquiry = await Inquiry.create({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || '').trim(),
      subject: String(subject).trim(),
      budget: String(budget).trim(),
      projectType: String(projectType).trim(),
      message: String(message).trim(),
    })

    let emailSent = false
    try {
      emailSent = await sendNotificationEmail(inquiry)
    } catch (emailError) {
      console.error(emailError.message)
    }

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully.',
      inquiryId: inquiry._id,
      emailSent,
    })
  } catch (error) {
    console.error('Inquiry error:', error)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    })
  }
}

module.exports = { createInquiry }
