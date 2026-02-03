import React from 'react'
import ProductCard from '../components/ProductCard'
import { addToCart, getCart } from '../utils/cart'

export default function Products({ category }) {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [count, setCount] = React.useState(getCart().length)

  React.useEffect(() => {
    async function load() {
      setLoading(true)
      const q = category ? `?category=${category}` : ''
      const res = await fetch(`http://localhost:4000/api/products${q}`)
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    }
    load()
  }, [category])

  function handleAdd(p) {
    addToCart(p)
    setCount(getCart().length)
  }

  if (loading) return <div className="container">Loading products...</div>

  return (
    <div>
      <h2 className="section-title">{category ? category.toUpperCase() : 'Products'}</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} onAdd={handleAdd} />
        ))}
      </div>
    </div>
  )
}
