import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ p, onAdd }) {
  return (
    <div className="card">
      <div className="card-image">
        <img 
          src={p.image || 'https://via.placeholder.com/300x300?text=Nike'} 
          alt={p.name}
          onError={(e) => e.target.src = 'https://via.placeholder.com/300x300?text=Nike'}
        />
      </div>
      <div className="card-content">
        <Link to={`/product/${p.id}`} className="card-title">{p.name}</Link>
        <div className="card-meta">
          <span className="card-category">{p.category}</span>
          <span className="card-price">${p.price}</span>
        </div>
        <button className="card-btn" onClick={() => onAdd && onAdd(p)}>Add to Cart</button>
      </div>
    </div>
  )
}
