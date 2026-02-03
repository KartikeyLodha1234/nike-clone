import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { addToCart, getCart } from '../utils/cart'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function SearchResults() {
  const q = useQuery().get('q') || ''
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function search() {
      setLoading(true)
      const res = await fetch(`http://localhost:4000/api/products?q=${encodeURIComponent(q)}`)
      const data = await res.json()
      setResults(data)
      setLoading(false)
    }
    if (q) search()
  }, [q])

  if (!q) return <div>Enter a search query.</div>
  if (loading) return <div>Searching...</div>

  return (
    <div>
      <h2 className="section-title">Search results for "{q}"</h2>
      <div className="grid">
        {results.map((p) => (
          <ProductCard key={p.id} p={p} onAdd={() => addToCart(p)} />
        ))}
      </div>
    </div>
  )
}
