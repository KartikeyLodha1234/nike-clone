# Quick Setup Checklist

## ✅ Implementation Complete

All files have been created and configured. Follow this checklist to get up and running.

---

## 📋 Pre-Setup Checklist

- [ ] Node.js and npm installed
- [ ] Project already running locally
- [ ] Gmail or other email provider account ready

---

## 🔧 Setup Steps

### Step 1: Configure Email (5 minutes)

For **Gmail** (recommended):

1. Go to **myaccount.google.com**
2. Click **Security** (left menu)
3. Enable **2-Step Verification** if not already enabled
4. Go to **myaccount.google.com/apppasswords**
5. Select "Mail" and "Windows Computer" (or your device)
6. Copy the **16-character password**

Create `server/.env`:
```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your Gmail:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # Paste the 16-char password here
ADMIN_EMAIL=admin@nike-clone.com
```

### Step 2: Install Dependencies (already done ✓)

```bash
# Already installed, but verify:
cd server
npm list nodemailer dotenv
```

Expected output shows both packages installed.

### Step 3: Start Servers

**Terminal 1 - Backend**:
```bash
cd server
npm start
# Should show: API server running on http://localhost:4000
```

**Terminal 2 - Frontend**:
```bash
npm run dev
# Should show: Local: http://localhost:5173
```

### Step 4: Test It Out

1. Open **http://localhost:5173/contact** in browser
2. Fill out the contact form
3. Click "Send Message"
4. Check your email for confirmation
5. Check admin email for the submission

---

## 🎯 What's New

### Files Created:
- ✅ `src/pages/Contact.jsx` - Contact form page
- ✅ `src/components/Footer.jsx` - Footer component
- ✅ `src/styles/Contact.css` - Contact form styling
- ✅ `src/styles/Footer.css` - Footer styling
- ✅ `server/.env.example` - Email configuration template

### Files Updated:
- ✅ `src/App.jsx` - Added Contact route and Footer
- ✅ `src/components/Nav.jsx` - Added Contact link
- ✅ `server/index.js` - Added contact API endpoint

### Packages Installed:
- ✅ `nodemailer` - Email sending
- ✅ `dotenv` - Environment variables

---

## 🧪 Testing Checklist

### Basic Testing:
- [ ] Contact page loads at `/contact`
- [ ] Form displays all fields (name, email, subject, message)
- [ ] Footer appears at bottom of every page
- [ ] Contact link in navigation works

### Form Submission:
- [ ] Fill form and click Send
- [ ] Loading state shows while sending
- [ ] Success message appears on success
- [ ] Form clears after successful submission
- [ ] Admin email received with submission
- [ ] User confirmation email received

### Mobile Testing:
- [ ] Form looks good on mobile (test with DevTools)
- [ ] Footer is readable and clickable on mobile
- [ ] Navigation menu works on mobile

---

## 🆘 Troubleshooting

### "Failed to send email" Error

**Solution**:
1. Verify `.env` file exists in `server/` folder
2. Check Gmail app password is 16 characters (with spaces removed)
3. Ensure 2-Factor Authentication is enabled on Gmail
4. Verify email format in `.env` is exactly: `EMAIL_USER=your-email@gmail.com`

### "Cannot find module 'nodemailer'"

**Solution**:
```bash
cd server
npm install nodemailer
```

### Form doesn't submit

**Solution**:
1. Check browser Console (F12) for errors
2. Verify backend is running on port 4000
3. Check Network tab to see if request is being sent
4. Verify all form fields are filled

### Emails going to spam

**Solution**:
1. Check spam/junk folder first
2. Mark emails as "Not spam"
3. Look for Gmail's "This might be suspicious" warning
4. May be due to first test - usually resolves on next email

---

## 📚 Documentation Files

These files contain more detailed information:

1. **CONTACT_SETUP_GUIDE.md** - Complete setup guide with all email providers
2. **EMAIL_TEMPLATES.md** - Email template examples and customization
3. **CONTACT_FOOTER_SUMMARY.md** - Feature summary and next steps

---

## 🚀 Running in Production

When deploying to production:

1. Use **environment variables** instead of `.env` file
2. Never commit `.env` to git (add to `.gitignore`)
3. Set variables in your hosting platform (Vercel, Heroku, etc.)
4. Use stronger email credentials or services like SendGrid
5. Implement rate limiting to prevent spam
6. Add CAPTCHA to form for security

---

## ⚡ Quick Commands

```bash
# Frontend
npm run dev              # Start frontend dev server
npm run build           # Build for production

# Backend
cd server
npm start               # Start backend server
npm run dev             # Start with auto-reload (nodemon)
npm install             # Install dependencies

# Email configuration
cp server/.env.example server/.env   # Create .env file
# Then edit .env with your email settings
```

---

## ✨ Features Included

✓ Professional contact form
✓ SMTP email sending
✓ Admin notification emails
✓ User confirmation emails
✓ Footer with multiple sections
✓ Newsletter signup form
✓ Fully responsive design
✓ Error handling
✓ Loading states
✓ Environment variable support

---

## 🎓 Next Steps (Optional)

- [ ] Customize email templates (see EMAIL_TEMPLATES.md)
- [ ] Add form validation messages
- [ ] Implement file upload
- [ ] Store submissions in database
- [ ] Create admin dashboard
- [ ] Add spam protection (CAPTCHA)
- [ ] Set up email queue for reliability

---

## 📞 Getting Help

**For Gmail setup issues**:
- https://support.google.com/accounts/answer/185833

**For Nodemailer documentation**:
- https://nodemailer.com/

**For email template testing**:
- https://www.litmus.com/
- https://www.emailonacid.com/

---

## ✅ Final Checklist

Before going live:

- [ ] `.env` file created with valid email credentials
- [ ] Backend server starts without errors
- [ ] Frontend server starts without errors
- [ ] Contact form page loads
- [ ] Footer appears on all pages
- [ ] Test email submission works
- [ ] Received admin email with submission
- [ ] Received user confirmation email
- [ ] Mobile responsiveness tested
- [ ] Error handling tested with invalid inputs

---

**You're all set! 🎉 Your contact form with SMTP and footer are ready to use!**

Next: Configure your `.env` file and start the servers.
