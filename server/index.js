const express = require('express')
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000
const USERS_FILE = path.join(__dirname, 'users.json')
const PRODUCTS_FILE = path.join(__dirname, 'products.json')
const SECRET = process.env.JWT_SECRET || 'change_this_secret'

app.use(cors())
app.use(express.json())

function readUsers() {
  try {
    const raw = fs.readFileSync(USERS_FILE, 'utf8')
    return JSON.parse(raw || '[]')
  } catch (err) {
    return []
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
}

app.get('/api/products', (req, res) => {
  try {
    const data = fs.readFileSync(PRODUCTS_FILE, 'utf8')
    let products = JSON.parse(data)
    const { category, q } = req.query
    if (category) {
      products = products.filter((p) => p.category === category)
    }
    if (q) {
      const term = q.toLowerCase()
      products = products.filter(
        (p) => p.name.toLowerCase().includes(term) || (p.description || '').toLowerCase().includes(term)
      )
    }
    res.json(products)
  } catch (err) {
    res.json([])
  }
})

app.get('/api/products/:id', (req, res) => {
  try {
    const data = fs.readFileSync(PRODUCTS_FILE, 'utf8')
    const products = JSON.parse(data)
    const p = products.find((x) => String(x.id) === String(req.params.id))
    if (!p) return res.status(404).json({ message: 'Product not found' })
    res.json(p)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' })
  const users = readUsers()
  if (users.find((u) => u.email === email)) return res.status(400).json({ message: 'Email already in use' })
  const hashed = bcrypt.hashSync(password, 8)
  const user = { id: Date.now(), name, email, password: hashed }
  users.push(user)
  writeUsers(users)
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, SECRET, { expiresIn: '2h' })
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
})

app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' })
  const users = readUsers()
  const user = users.find((u) => u.email === email)
  if (!user) return res.status(400).json({ message: 'Invalid credentials' })
  const ok = bcrypt.compareSync(password, user.password)
  if (!ok) return res.status(400).json({ message: 'Invalid credentials' })
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, SECRET, { expiresIn: '2h' })
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
})

const { requireAuth } = require('./middleware/auth')

app.get('/api/profile', requireAuth, (req, res) => {
  const users = readUsers()
  const user = users.find((u) => u.id === req.user.id)
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json({ id: user.id, name: user.name, email: user.email })
})

// SMTP Configuration for Contact Form
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password',
  },
})

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    // Email to admin/company
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.ADMIN_EMAIL || 'admin@nike-clone.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'We received your message - Nike Clone Support',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Nike Clone Team</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    res.json({ message: 'Email sent successfully! We will contact you soon.' })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ message: 'Failed to send email. Please try again.' })
  }
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
