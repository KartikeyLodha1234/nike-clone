import React from 'react'
import { getCart, removeFromCart, clearCart } from '../utils/cart'

export default function Cart() {
  const [cart, setCart] = React.useState(getCart())

  function handleRemove(id) {
    setCart(removeFromCart(id))
  }

  function handleCheckout() {
    // demo checkout: clear cart
    clearCart()
    setCart([])
    alert('Checkout complete (demo)')
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div>
      <h2 className="section-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>Your cart is empty</div>
      ) : (
        <div className="cart-list">
          {cart.map((i) => (
            <div key={i.id} className="cart-item">
              <div>
                <div style={{ fontWeight: 600 }}>{i.name}</div>
                <div style={{ fontSize: 13, color: '#666' }}>Qty: {i.qty}</div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <span style={{ fontWeight: 700 }}>${(i.price * i.qty).toFixed(2)}</span>
                <button onClick={() => handleRemove(i.id)} className="btn" style={{ padding: '6px 12px', fontSize: 13 }}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            Total: ${total.toFixed(2)}
          </div>
          <div style={{ marginTop: 20 }}>
            <button onClick={handleCheckout} className="btn btn-large">Checkout (Demo)</button>
          </div>
        </div>
      )}
    </div>
  )
}
