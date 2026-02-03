import React from 'react'
import '../styles/Company.css'

export default function Investors() {
  return (
    <div className="company-page">
      <div className="company-header">
        <h1>Investor Relations</h1>
        <p>Financial Information & Shareholder Resources</p>
      </div>

      <div className="company-container">
        <section className="company-section">
          <h2>About Nike, Inc.</h2>
          <p>
            Nike, Inc. is the world's leading designer, marketer, and distributor of athletic footwear, apparel, 
            equipment, and accessories. The Company is headquartered near Beaverton, Oregon and operates in more 
            than 190 countries.
          </p>
        </section>

        <section className="company-section">
          <h2>Financial Highlights</h2>
          <table className="financial-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>FY 2025</th>
                <th>FY 2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Revenue</td>
                <td>$46.7B</td>
                <td>$44.5B</td>
              </tr>
              <tr>
                <td>Gross Profit</td>
                <td>$18.2B</td>
                <td>$17.3B</td>
              </tr>
              <tr>
                <td>Net Income</td>
                <td>$4.3B</td>
                <td>$3.8B</td>
              </tr>
              <tr>
                <td>EPS (Diluted)</td>
                <td>$2.78</td>
                <td>$2.45</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="company-section">
          <h2>Key Business Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Market Segments</h3>
              <ul>
                <li>North America: 45%</li>
                <li>International: 38%</li>
                <li>Direct-to-Consumer: 17%</li>
              </ul>
            </div>
            <div className="metric-card">
              <h3>Product Categories</h3>
              <ul>
                <li>Footwear: 60%</li>
                <li>Apparel: 30%</li>
                <li>Equipment & Other: 10%</li>
              </ul>
            </div>
            <div className="metric-card">
              <h3>Employee Count</h3>
              <ul>
                <li>Total Employees: 76,000+</li>
                <li>Operating Locations: 190+</li>
                <li>Global Operations Centers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="company-section">
          <h2>Corporate Governance</h2>
          <p>
            Nike maintains the highest standards of corporate governance and ethical business practices. 
            Our Board of Directors and management team are committed to creating sustainable value for our shareholders.
          </p>
          <ul className="governance-list">
            <li>Board of Directors: 12 members</li>
            <li>Audit Committee: Oversees financial reporting and compliance</li>
            <li>Compensation Committee: Reviews executive compensation</li>
            <li>Governance Committee: Ensures corporate governance best practices</li>
          </ul>
        </section>

        <section className="company-section">
          <h2>Shareholder Information</h2>
          <ul className="shareholder-list">
            <li>
              <strong>Stock Symbol:</strong> NKE (NASDAQ)
            </li>
            <li>
              <strong>Transfer Agent:</strong> Computershare
            </li>
            <li>
              <strong>Dividend Policy:</strong> Nike pays quarterly dividends to shareholders
            </li>
            <li>
              <strong>Annual Shareholder Meeting:</strong> September (in-person and virtual)
            </li>
          </ul>
        </section>

        <section className="company-section">
          <h2>Sustainability & ESG</h2>
          <p>
            Nike is committed to environmental, social, and governance (ESG) excellence. 
            Our sustainability initiatives include:
          </p>
          <ul className="sustainability-list">
            <li>🌱 Carbon neutral operations by 2050</li>
            <li>♻️ Sustainable materials in 100% of products by 2025</li>
            <li>👥 Diversity and inclusion across all levels</li>
            <li>⚖️ Fair labor standards and worker welfare</li>
            <li>🌍 Community investment and social impact</li>
          </ul>
        </section>

        <section className="company-section contact-section">
          <h2>Investor Contact</h2>
          <p>
            For investor inquiries, please contact our Investor Relations team:
          </p>
          <ul className="contact-details">
            <li>📧 Email: investor.relations@nike.com</li>
            <li>📞 Phone: 1-800-344-NIKE</li>
            <li>🌐 Web: investors.nike.com</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
