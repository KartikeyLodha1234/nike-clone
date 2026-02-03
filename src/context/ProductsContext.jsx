import React from 'react'

const ProductsContext = React.createContext({ products: [], loading: true })

export function ProductsProvider({ children }) {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const res = await fetch('http://localhost:4000/api/products')
        const data = await res.json()
        if (!mounted) return
        setProducts(data)
      } catch (err) {
        if (!mounted) return
        setProducts([])
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  return React.useContext(ProductsContext)
}

export default ProductsContext
