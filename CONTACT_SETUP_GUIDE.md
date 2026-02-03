# Contact Form & Footer Setup Guide

This document explains how to set up and use the contact form with SMTP email functionality and footer component.

## Features Added

### 1. Contact Form Page
- **Location**: `src/pages/Contact.jsx`
- **Route**: `/contact`
- **Features**:
  - Name, Email, Subject, and Message fields
  - Client-side form validation
  - Success/Error message display
  - Loading state during submission
  - Responsive design

### 2. Footer Component
- **Location**: `src/components/Footer.jsx`
- **Features**:
  - Multiple footer sections (Featured, Shop, Help, Company)
  - Newsletter subscription form
  - Links to legal pages
  - Mobile responsive design
  - Integrated with React Router

### 3. Backend Contact API
- **Endpoint**: `POST /api/contact`
- **Features**:
  - SMTP email sending using Nodemailer
  - Sends email to admin and confirmation email to user
  - Error handling
  - Input validation

## Installation & Configuration

### Step 1: Install Dependencies

The required packages are already installed:
```bash
npm install nodemailer dotenv
```

### Step 2: Create Environment File

Create a `.env` file in the `server/` directory (copy from `.env.example`):

```bash
cd server
cp .env.example .env
```

### Step 3: Configure Email Settings

Edit `server/.env` with your email configuration:

```env
# Email service provider
EMAIL_SERVICE=gmail

# Your email address
EMAIL_USER=your-email@gmail.com

# App-specific password (see below for Gmail setup)
EMAIL_PASSWORD=your-app-password

# Admin email where forms are sent
ADMIN_EMAIL=admin@nike-clone.com

# Other settings
PORT=4000
JWT_SECRET=your-secret-key-change-this
```

## Email Provider Setup

### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication**:
   - Go to myaccount.google.com
   - Click "Security" in the left menu
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password
   - Copy this password to `.env` as `EMAIL_PASSWORD`

3. **In `.env` file**:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # 16-character app password
   ```

### Other Email Providers

**Outlook/Hotmail**:
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

**Yahoo**:
```env
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

**Custom SMTP Server**:
If using a custom SMTP server, modify `server/index.js`:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})
```

## Testing the Contact Form

1. **Start the server**:
   ```bash
   cd server
   npm start
   # Or for development with auto-reload:
   npm run dev
   ```

2. **Start the frontend**:
   ```bash
   npm run dev
   ```

3. **Visit the contact page**:
   - Navigate to http://localhost:5173/contact
   - Fill out the form
   - Click "Send Message"

4. **Check the results**:
   - Admin will receive an email with the form submission
   - User will receive a confirmation email
   - Success message displays on the form

## File Structure

```
nike-clone/
├── server/
│   ├── index.js (Updated with /api/contact endpoint)
│   ├── .env.example (Email configuration template)
│   ├── .env (Your actual configuration - DON'T COMMIT THIS)
│   └── package.json (Updated with nodemailer & dotenv)
├── src/
│   ├── pages/
│   │   └── Contact.jsx (New)
│   ├── components/
│   │   ├── Footer.jsx (New)
│   │   └── Nav.jsx (Updated with contact link)
│   ├── styles/
│   │   ├── Contact.css (New)
│   │   └── Footer.css (New)
│   └── App.jsx (Updated with Contact route & Footer)
```

## API Endpoint Details

### POST /api/contact

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Product Inquiry",
  "message": "I have a question about your products..."
}
```

**Success Response** (200):
```json
{
  "message": "Email sent successfully! We will contact you soon."
}
```

**Error Response** (400/500):
```json
{
  "message": "All fields are required" // or other error message
}
```

## Styling Customization

### Contact Form Styling
- Edit `src/styles/Contact.css`
- Variables to customize:
  - Colors: `#000`, `#fff`, `#666`, `#f5f5f5`
  - Font sizes: `3em`, `1.2em`, etc.
  - Spacing: margins, padding, gaps

### Footer Styling
- Edit `src/styles/Footer.css`
- Background color: `#111`
- Link colors: `#999`, `#fff`
- Responsive breakpoints: 768px and 480px

## Troubleshooting

### "Failed to send email" Error

1. **Check `.env` file exists** in `server/` directory
2. **Verify email credentials** are correct
3. **For Gmail**: Ensure app password (16 chars) is used, not regular password
4. **Check 2FA is enabled** on Gmail account
5. **Allow less secure apps** (if not using app password)

### "ADMIN_EMAIL not configured"

- Add `ADMIN_EMAIL` to your `.env` file
- Example: `ADMIN_EMAIL=your-company@example.com`

### Form doesn't submit

1. Check browser console for errors
2. Verify backend server is running on port 4000
3. Check CORS is enabled in `server/index.js`
4. Ensure all required fields are filled

### Emails not received

1. Check spam/junk folder
2. Verify email credentials again
3. Check server console for error messages
4. Test with a simple email service first (like Mailtrap)

## Development Tips

### Using Mailtrap for Testing

Mailtrap is a free service perfect for testing emails without sending real emails:

1. Go to mailtrap.io and create account
2. Get SMTP credentials from Mailtrap
3. Update `.env`:
   ```env
   EMAIL_SERVICE=YOUR_SMTP_HOST
   EMAIL_USER=your_mailtrap_user
   EMAIL_PASSWORD=your_mailtrap_password
   ```

### Console Logging

To debug email sending, check `server/index.js` for console.error statements. Errors are logged when emails fail to send.

## Security Notes

⚠️ **Important**:
- **Never commit `.env` file** to version control
- **Never share email passwords** in code or with others
- Use app-specific passwords (not your main password)
- Consider using email services with better security for production

## Next Steps

- Customize email templates in `server/index.js`
- Add file upload support to contact form
- Implement email rate limiting
- Add email validation
- Store contact form submissions in database
- Add admin dashboard to view submissions

## Support

For issues with:
- **Gmail setup**: See https://support.google.com/accounts/answer/185833
- **Nodemailer**: See https://nodemailer.com/
- **Environment variables**: See https://github.com/motdotla/dotenv

Enjoy your contact form!
