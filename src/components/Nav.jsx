import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCart } from '../utils/cart'

export default function Nav() {
  const navigate = useNavigate()
  const auth = JSON.parse(localStorage.getItem('user') || 'null')
  const [cartCount, setCartCount] = React.useState(getCart().length)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onStorage = () => setCartCount(getCart().length)
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  function signOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  function doSearch(e) {
    e.preventDefault()
    const q = e.target.elements.search.value.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container header-container">
            <div className="header-left">
              <Link to="/" className="brand">NIKE</Link>
              <nav className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kids">Kids</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
            <div className="header-right">
              <form onSubmit={doSearch} className="search-form">
                <input type="text" name="search" placeholder="Search" />
              </form>
              <Link to="/cart" className="cart-link">🛒 <span className="badge">{cartCount}</span></Link>
              {auth ? (
                <div className="account-links">
                  <Link to="/profile">{auth.name}</Link>
                  <button className="btn-link" onClick={signOut}>Logout</button>
                </div>
              ) : (
                <div className="account-links">
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup" className="btn-join">Join</Link>
                </div>
              )}
              <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/men" onClick={() => setMobileMenuOpen(false)}>Men</Link>
          <Link to="/women" onClick={() => setMobileMenuOpen(false)}>Women</Link>
          <Link to="/kids" onClick={() => setMobileMenuOpen(false)}>Kids</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart ({cartCount})</Link>
        </div>
      )}
    </>
  )
}
