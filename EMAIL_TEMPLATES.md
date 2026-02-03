# Email Template Examples

This file shows what the emails look like when sent through the contact form.

## Admin Email Template

**Sent to**: `admin@nike-clone.com` (or your configured ADMIN_EMAIL)

**Subject**: `New Contact Form Submission: [User's Subject]`

```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> John Doe</p>
<p><strong>Email:</strong> john.doe@example.com</p>
<p><strong>Subject:</strong> Product Quality Inquiry</p>
<p><strong>Message:</strong></p>
<p>Hello,<br><br>
I purchased your Nike shoes last week and I'm very happy with them.
However, I have a question about the warranty and care instructions.
Could someone from your team please contact me?<br><br>
Thank you,<br>
John Doe</p>
```

---

## User Confirmation Email Template

**Sent to**: User's email address from form

**Subject**: `We received your message - Nike Clone Support`

```html
<h2>Thank you for contacting us!</h2>
<p>Hi John Doe,</p>
<p>We have received your message and will get back to you as soon as possible.</p>
<p><strong>Your Message:</strong></p>
<p>Hello,<br><br>
I purchased your Nike shoes last week and I'm very happy with them.
However, I have a question about the warranty and care instructions.
Could someone from your team please contact me?<br><br>
Thank you,<br>
John Doe</p>
<p>Best regards,<br>Nike Clone Team</p>
```

---

## Customizing Email Templates

To modify the email templates, edit `server/index.js` in the contact form handler:

### Admin Email
Located around line 110-122:
```javascript
const adminMailOptions = {
  from: process.env.EMAIL_USER || 'your-email@gmail.com',
  to: process.env.ADMIN_EMAIL || 'admin@nike-clone.com',
  subject: `New Contact Form Submission: ${subject}`,
  html: `
    <!-- Modify HTML here -->
    <h2>Custom Header</h2>
    <p>Your custom content</p>
  `,
}
```

### User Confirmation Email
Located around line 124-134:
```javascript
const userMailOptions = {
  from: process.env.EMAIL_USER || 'your-email@gmail.com',
  to: email,
  subject: 'We received your message - Nike Clone Support',
  html: `
    <!-- Modify HTML here -->
    <h2>Thank you!</h2>
    <p>Your custom message</p>
  `,
}
```

## Advanced Template Examples

### Professional Business Template

```javascript
const adminMailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.ADMIN_EMAIL,
  subject: `New Contact Form Submission: ${subject}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a1a1a; color: #fff; padding: 20px; text-align: center;">
        <h1>Nike Clone - New Inquiry</h1>
      </div>
      
      <div style="padding: 20px; border: 1px solid #ddd;">
        <h2>Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
      </div>
      
      <div style="padding: 20px; background: #f5f5f5; text-align: center; font-size: 12px; color: #666;">
        <p>This email was generated automatically from the Nike Clone contact form.</p>
      </div>
    </div>
  `,
}
```

### Branded Confirmation Email

```javascript
const userMailOptions = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: '✓ We received your message - Nike Clone Support',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #000 0%, #333 100%); color: #fff; padding: 40px; text-align: center;">
        <h1 style="margin: 0; font-size: 28px;">Nike Clone</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; color: #ccc;">Thank You for Contacting Us</p>
      </div>
      
      <div style="padding: 30px; background: #fff;">
        <p style="font-size: 16px;">Hi ${name},</p>
        
        <p style="color: #666; line-height: 1.6;">
          We have received your message and appreciate you taking the time to reach out to us. 
          Our team will review your inquiry and get back to you as soon as possible.
        </p>
        
        <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #000; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Message</h3>
          <p style="color: #666; white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="color: #666; line-height: 1.6;">
          If you have any additional questions or information to add, please feel free to reply to this email.
        </p>
        
        <p style="margin-top: 30px;">
          Best regards,<br>
          <strong>Nike Clone Customer Support Team</strong><br>
          <span style="color: #999; font-size: 12px;">Response time: Within 24 hours</span>
        </p>
      </div>
      
      <div style="background: #111; color: #999; padding: 20px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">© 2026 Nike Clone. All rights reserved.</p>
        <p style="margin: 5px 0 0 0;">
          <a href="#" style="color: #999; text-decoration: none;">Privacy Policy</a> | 
          <a href="#" style="color: #999; text-decoration: none;">Terms of Service</a>
        </p>
      </div>
    </div>
  `,
}
```

## Tips for Email Templates

1. **Use inline CSS** - Email clients don't support external stylesheets
2. **Keep it simple** - Test in Gmail, Outlook, etc.
3. **Use images carefully** - Some clients block images by default
4. **Add clear CTAs** - Make response/actions obvious
5. **Test before deploying** - Preview in multiple email clients
6. **Keep responsive** - Use max-width for mobile compatibility

## Preview Tools

Test your email templates:
- [Litmus](https://www.litmus.com/) - Professional preview
- [Email on Acid](https://www.emailonacid.com/) - Multiple client testing
- Gmail/Outlook - Send test emails to yourself

---

**Note**: To use these templates, replace the corresponding HTML in the contact API endpoint in `server/index.js`.
