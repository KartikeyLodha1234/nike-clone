import React from 'react'
import '../styles/Company.css'

export default function Careers() {
  return (
    <div className="company-page">
      <div className="company-header">
        <h1>Careers at Nike</h1>
        <p>Join Our Mission to Serve Athletes</p>
      </div>

      <div className="company-container">
        <section className="company-section">
          <h2>Why Work at Nike?</h2>
          <p>
            At Nike, we believe in the power of human potential. We're looking for talented, passionate individuals 
            who want to make a difference in the world of sport and beyond. When you join Nike, you're not just joining 
            a company—you're joining a movement dedicated to serving athletes.
          </p>
        </section>

        <section className="company-section">
          <h2>Our Culture</h2>
          <ul className="culture-list">
            <li>
              <strong>Athlete-Centric:</strong> Everything we do is designed with the athlete in mind.
            </li>
            <li>
              <strong>Innovation-Driven:</strong> We encourage creative thinking and breakthrough ideas.
            </li>
            <li>
              <strong>Collaborative:</strong> We work together as a global team to achieve our goals.
            </li>
            <li>
              <strong>Inclusive:</strong> We celebrate diversity and create opportunities for everyone.
            </li>
            <li>
              <strong>Performance-Oriented:</strong> We set ambitious goals and pursue excellence.
            </li>
          </ul>
        </section>

        <section className="company-section">
          <h2>Career Opportunities</h2>
          <p>We're always looking for talented people to join our team in various roles:</p>
          <ul className="opportunities-list">
            <li>🎨 Design & Innovation</li>
            <li>💼 Business & Strategy</li>
            <li>💻 Technology & Engineering</li>
            <li>📊 Data & Analytics</li>
            <li>🌍 Operations & Supply Chain</li>
            <li>🤝 Human Resources</li>
            <li>📱 Digital & E-commerce</li>
            <li>💬 Marketing & Communications</li>
          </ul>
        </section>

        <section className="company-section">
          <h2>Benefits & Perks</h2>
          <ul className="benefits-list">
            <li>Competitive salary and bonus</li>
            <li>Health, dental, and vision coverage</li>
            <li>401(k) retirement plan matching</li>
            <li>Employee discount on Nike products (up to 40%)</li>
            <li>Flexible work arrangements</li>
            <li>Professional development and training</li>
            <li>Wellness programs and fitness centers</li>
            <li>Paid time off and holidays</li>
            <li>Mentorship and career growth opportunities</li>
          </ul>
        </section>

        <section className="company-section">
          <h2>Our Commitment</h2>
          <p>
            We're committed to creating an inclusive workplace where all employees can thrive. We believe in 
            equal opportunity for all and actively work to build a diverse team that reflects the athletes and 
            communities we serve.
          </p>
        </section>

        <section className="company-section cta-section">
          <h2>Ready to Join Us?</h2>
          <p>Visit Nike Careers at careers.nike.com to explore open positions and apply today!</p>
        </section>
      </div>
    </div>
  )
}
