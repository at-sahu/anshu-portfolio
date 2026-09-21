require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const connectDB = require('./config/db')
const inquiryRoutes = require('./routes/inquiryRoutes')
const inquiryLimiter = require('./middleware/security')

const app = express()
const PORT = process.env.PORT || 5000

app.disable('x-powered-by')
app.set('trust proxy', 1)
app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || true,
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
)
app.use(express.json({ limit: '10kb' }))

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Anshu Portfolio API is running',
  })
})

app.get('/api/health', (_req, res) => {
  res.json({ success: true, status: 'ok' })
})

app.use('/api/inquiries', inquiryLimiter, inquiryRoutes)

async function start() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error(`Startup error: ${error.message}`)
    process.exit(1)
  }
}

start()
