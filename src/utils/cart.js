export function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(product, qty = 1) {
  const cart = getCart()
  const existing = cart.find((i) => i.id === product.id)
  if (existing) existing.qty += qty
  else cart.push({ id: product.id, name: product.name, price: product.price, qty })
  saveCart(cart)
  return cart
}

export function removeFromCart(productId) {
  const cart = getCart().filter((i) => i.id !== productId)
  saveCart(cart)
  return cart
}

export function clearCart() {
  saveCart([])
}
