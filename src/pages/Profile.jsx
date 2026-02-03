import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Profile.css'

export default function Profile() {
  const [profile, setProfile] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [activeModal, setActiveModal] = React.useState(null)
  const [editData, setEditData] = React.useState({})

  React.useEffect(() => {
    async function load() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      
      if (!token || !user) {
        setError('Please log in to view your account')
        return
      }
      
      try {
        const res = await fetch('http://localhost:4000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        if (!res.ok) {
          // If token is invalid, use stored user data
          const userData = JSON.parse(user)
          setProfile(userData)
          setError(null)
          return
        }
        setProfile(data)
        setError(null)
      } catch (err) {
        // If fetch fails, use stored user data
        try {
          const userData = JSON.parse(user)
          setProfile(userData)
          setError(null)
        } catch {
          setError('Network error')
        }
      }
    }
    load()
  }, [])

  const handleCardClick = (cardType) => {
    setActiveModal(cardType)
    setEditData(profile || {})
  }

  const handleSaveEdit = () => {
    setProfile({ ...profile, ...editData })
    localStorage.setItem('user', JSON.stringify({ ...profile, ...editData }))
    setActiveModal(null)
  }

  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: value })
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Your Account</h1>
        <p>Manage your Nike account and preferences</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      {profile ? (
        <>
        <div className="profile-content">
          {/* User Info Card */}
          <div className="account-card user-info-card" onClick={() => handleCardClick('account')}>
            <div className="card-icon">👤</div>
            <div className="card-content">
              <h3>Account Information</h3>
              <p className="user-name">{profile.name}</p>
              <p className="user-email">{profile.email}</p>
              <a href="#edit" className="card-link">Edit profile</a>
            </div>
          </div>

          {/* Your Orders */}
          <div className="account-card" onClick={() => handleCardClick('orders')}>
            <div className="card-icon">📦</div>
            <div className="card-content">
              <h3>Your Orders</h3>
              <p>Track, return, or buy things again</p>
              <a href="#orders" className="card-link">View Orders →</a>
            </div>
          </div>

          {/* Login & Security */}
          <div className="account-card" onClick={() => handleCardClick('security')}>
            <div className="card-icon">🔒</div>
            <div className="card-content">
              <h3>Login & Security</h3>
              <p>Edit login, name, and password</p>
              <a href="#security" className="card-link">Manage Security →</a>
            </div>
          </div>

          {/* Your Addresses */}
          <div className="account-card" onClick={() => handleCardClick('addresses')}>
            <div className="card-icon">📍</div>
            <div className="card-content">
              <h3>Your Addresses</h3>
              <p>Edit addresses for orders and deliveries</p>
              <a href="#addresses" className="card-link">Manage Addresses →</a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="account-card" onClick={() => handleCardClick('payment')}>
            <div className="card-icon">💳</div>
            <div className="card-content">
              <h3>Payment Options</h3>
              <p>Edit or add payment methods</p>
              <a href="#payments" className="card-link">Manage Payments →</a>
            </div>
          </div>

          {/* Wishlist & Favorites */}
          <div className="account-card" onClick={() => handleCardClick('wishlist')}>
            <div className="card-icon">❤️</div>
            <div className="card-content">
              <h3>Wishlist</h3>
              <p>View and manage your saved items</p>
              <a href="#wishlist" className="card-link">View Wishlist →</a>
            </div>
          </div>

          {/* Preferences */}
          <div className="account-card" onClick={() => handleCardClick('preferences')}>
            <div className="card-icon">⚙️</div>
            <div className="card-content">
              <h3>Preferences</h3>
              <p>Manage notifications and email settings</p>
              <a href="#preferences" className="card-link">Edit Preferences →</a>
            </div>
          </div>

          {/* Membership */}
          <div className="account-card" onClick={() => handleCardClick('membership')}>
            <div className="card-icon">⭐</div>
            <div className="card-content">
              <h3>Nike Plus Membership</h3>
              <p>View benefits and exclusive offers</p>
              <a href="#membership" className="card-link">View Membership →</a>
            </div>
          </div>

          {/* Contact Support */}
          <div className="account-card" onClick={() => handleCardClick('contact')}>
            <div className="card-icon">💬</div>
            <div className="card-content">
              <h3>Help & Contact</h3>
              <p>Get support via phone or chat</p>
              <a href="/contact" className="card-link">Contact Us →</a>
            </div>
          </div>
        </div>

        {/* MODAL - Account Information */}
        {activeModal === 'account' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Account Information</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={editData.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={editData.email || ''}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="btn-save" onClick={handleSaveEdit}>Save Changes</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Orders */}
        {activeModal === 'orders' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Your Orders</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <p className="empty-message">You haven't placed any orders yet.</p>
                <p className="empty-subtext">Start shopping to see your orders here!</p>
              </div>
              <div className="modal-footer">
                <Link to="/" className="btn-shop">Continue Shopping</Link>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Security */}
        {activeModal === 'security' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Login & Security</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={profile.email} disabled />
                </div>
                <div className="form-group">
                  <label>Current Password</label>
                  <input type="password" placeholder="Enter current password" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm new password" />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="btn-save">Update Password</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Addresses */}
        {activeModal === 'addresses' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Your Addresses</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Street Address</label>
                  <input type="text" placeholder="Enter street address" />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="Enter city" />
                </div>
                <div className="form-group">
                  <label>State/Province</label>
                  <input type="text" placeholder="Enter state" />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" placeholder="Enter postal code" />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" placeholder="Enter country" />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="btn-save">Save Address</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Payment */}
        {activeModal === 'payment' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Payment Options</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiration Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="Enter name on card" />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="btn-save">Add Payment Method</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Wishlist */}
        {activeModal === 'wishlist' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Your Wishlist</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <p className="empty-message">Your wishlist is empty</p>
                <p className="empty-subtext">Add items from our collection to your wishlist!</p>
              </div>
              <div className="modal-footer">
                <Link to="/products" className="btn-shop">Explore Products</Link>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Preferences */}
        {activeModal === 'preferences' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Preferences</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Receive marketing emails
                  </label>
                </div>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Receive order updates
                  </label>
                </div>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Receive promotions and special offers
                  </label>
                </div>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" /> Receive SMS notifications
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                <button className="btn-save">Save Preferences</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Membership */}
        {activeModal === 'membership' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Nike Plus Membership</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <h3>Status: Premium Member ⭐</h3>
                <ul className="benefits-list">
                  <li>✓ Free shipping on all orders</li>
                  <li>✓ Early access to new products</li>
                  <li>✓ Exclusive member-only sales</li>
                  <li>✓ Points on every purchase</li>
                  <li>✓ Birthday bonus rewards</li>
                  <li>✓ 24/7 member support</li>
                </ul>
                <p className="membership-info">You have <strong>1,250 points</strong> available!</p>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setActiveModal(null)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL - Contact */}
        {activeModal === 'contact' && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Help & Contact</h2>
                <button className="close-btn" onClick={() => setActiveModal(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="contact-option">
                  <h3>📞 Phone Support</h3>
                  <p>1-800-NIKE-USA (1-800-645-3872)</p>
                  <p className="text-small">Mon-Sun, 6am - 11pm ET</p>
                </div>
                <div className="contact-option">
                  <h3>💬 Live Chat</h3>
                  <p>Available 24/7 on our website</p>
                </div>
                <div className="contact-option">
                  <h3>📧 Email</h3>
                  <p>support@nike-clone.com</p>
                </div>
              </div>
              <div className="modal-footer">
                <Link to="/contact" className="btn-shop">Contact Us</Link>
              </div>
            </div>
          </div>
        )}
        </>
      ) : (
        <div className="loading">
          {error ? (
            <>
              <p>{error}</p>
              <Link to="/signin" className="btn-signin">Sign In Now</Link>
            </>
          ) : (
            <p>Loading your account...</p>
          )}
        </div>
      )}
    </div>
  )
}
