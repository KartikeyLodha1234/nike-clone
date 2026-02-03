import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Promo Banner */}
      <div className="promo-banner">
        <div className="promo-content">
          <h3>Free Shipping & Returns</h3>
          <p>On orders over $50. Shop now →</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Just Do It</h1>
          <p className="hero-subtitle">Premium footwear and apparel for athletes and lifestyle enthusiasts.</p>
          <div className="hero-actions">
            <Link to="/men" className="btn btn-primary">Shop Men</Link>
            <Link to="/women" className="btn btn-secondary">Shop Women</Link>
            <Link to="/kids" className="btn btn-secondary">Shop Kids</Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="container">
        <div className="category-grid">
          <Link to="/men" className="category-card">
            <div className="category-bg men-bg">👟</div>
            <h3>Men's Gear</h3>
            <p>Shop Latest</p>
          </Link>
          <Link to="/women" className="category-card">
            <div className="category-bg women-bg">👟</div>
            <h3>Women's Gear</h3>
            <p>Shop Latest</p>
          </Link>
          <Link to="/kids" className="category-card">
            <div className="category-bg kids-bg">👟</div>
            <h3>Kids' Gear</h3>
            <p>Shop Latest</p>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <h2 className="section-title">New Arrivals</h2>
        <Products />
      </section>
    </div>
  )
}
