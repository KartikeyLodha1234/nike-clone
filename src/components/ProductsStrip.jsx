import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { addToCart, getCart } from '../utils/cart'

export default function ProductsStrip() {
  const { products, loading } = useProducts()
  const [count, setCount] = React.useState(getCart().length)

  function handleAdd(p) {
    addToCart(p)
    setCount(getCart().length)
  }

  if (loading) return null

  return (
    <div className="product-strip">
      <div className="container">
        <div className="strip-scroll">
          {products.map((p) => (
            <div key={p.id} className="strip-item">
              <Link to={`/product/${p.id}`}>{p.name}</Link>
              <div className="strip-meta">
                <span className="price">${p.price}</span>
                <button onClick={() => handleAdd(p)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
