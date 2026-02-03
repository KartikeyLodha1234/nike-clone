import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Featured</h3>
          <ul>
            <li>
              <Link to="/men">New & Featured</Link>
            </li>
            <li>
              <Link to="/women">SNKRS Launch Calendar</Link>
            </li>
            <li>
              <Link to="/kids">Sustainability</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>
              <Link to="/men">Men's Shoes</Link>
            </li>
            <li>
              <Link to="/women">Women's Shoes</Link>
            </li>
            <li>
              <Link to="/kids">Kids' Shoes</Link>
            </li>
            <li>
              <Link to="/">All Shoes</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="#returns">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#shipping">Shipping Info</a>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About Nike</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/investors">Investors</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#terms">Terms of Use</a>
          <span>|</span>
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#cookies">Cookie Preferences</a>
        </div>
        <div className="footer-credit">
          <p>&copy; 2026 Nike Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
