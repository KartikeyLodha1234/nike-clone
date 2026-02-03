import React from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../utils/cart'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [qty, setQty] = React.useState(1)
  const [size, setSize] = React.useState('M')
  const [added, setAdded] = React.useState(false)

  React.useEffect(() => {
    async function load() {
      setLoading(true)
      const res = await fetch(`http://localhost:4000/api/products/${id}`)
      const data = await res.json()
      setProduct(data)
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <div className="container">Loading...</div>
  if (!product) return <div className="container">Product not found</div>

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) {
      addToCart(product)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="container product-detail-page">
      <div className="product-detail">
        <div className="detail-image">
          <img 
            src={product.image || 'https://via.placeholder.com/400x400?text=Nike'}
            alt={product.name}
            onError={(e) => e.target.src = 'https://via.placeholder.com/400x400?text=Nike'}
          />
        </div>
        <div className="detail-info">
          <h1>{product.name}</h1>
          <div className="detail-meta">
            <span className="category-badge">{product.category}</span>
            <span className="price">${product.price}</span>
          </div>
          <p className="description">{product.description}</p>

          {/* Size Selector */}
          <div className="size-selector">
            <label>Size</label>
            <div className="sizes">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                <button key={s} className={`size-btn ${size === s ? 'active' : ''}`} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="qty-selector">
            <label>Quantity</label>
            <div className="qty-controls">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <input type="number" value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} />
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button className="btn btn-large" onClick={handleAddToCart}>
            {added ? '✓ Added to Cart' : 'Add to Cart'}
          </button>

          {/* Info */}
          <div className="detail-extra">
            <div>Free Shipping on orders over $50</div>
            <div>Easy Returns within 30 days</div>
          </div>
        </div>
      </div>
    </div>
  )
}
