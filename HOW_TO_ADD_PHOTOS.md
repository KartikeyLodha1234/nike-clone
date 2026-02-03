# 📸 HOW TO ADD PRODUCT PHOTOS - Complete Guide

## 3 Methods to Add Product Images

---

## Method 1: Use Image URLs (Easiest - Recommended)

Use external image URLs from online sources. Perfect for getting started quickly!

### Step 1: Update products.json

Add an `image` field to each product:

```json
[
  {
    "id": 1,
    "name": "Casual",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    "id": 2,
    "name": "Sports Shoes",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  }
]
```

### Good Image Sources (Free):
- **Unsplash**: https://unsplash.com (Free photos)
- **Pexels**: https://pexels.com (Free photos)
- **Pixabay**: https://pixabay.com (Free photos)
- **Nike Official**: https://nike.com (Product images)

### How to Find Images:

**Option A: Search Nike Products**
1. Go to https://unsplash.com
2. Search "Nike shoes" or "running shoes"
3. Click image → "Download"
4. Copy the image URL
5. Paste URL in products.json

**Option B: Search Sports Shoes**
1. Go to https://pexels.com
2. Search "sports shoes" or "sneakers"
3. Right-click image → "Copy image link"
4. Paste in products.json

### Example with Real URLs:
```json
{
  "id": 1,
  "name": "Running Shoes",
  "price": 120,
  "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
}
```

---

## Method 2: Store Images Locally (Better for Production)

Store images in your project and serve them from the server.

### Step 1: Create Images Folder

```bash
# Create public folder for images
mkdir -p public/images/products
```

### Step 2: Add Images to Folder

```
nike-clone/
└── public/
    └── images/
        └── products/
            ├── shoe-1.jpg
            ├── shoe-2.jpg
            ├── shoe-3.jpg
            └── ...
```

### Step 3: Update products.json

```json
[
  {
    "id": 1,
    "name": "Casual",
    "price": 120,
    "image": "/images/products/shoe-1.jpg"
  }
]
```

### Step 4: Serve Static Files

Edit `server/index.js` - add this line after `app.use(cors())`:

```javascript
app.use(express.static(path.join(__dirname, '../public')))
```

### Step 5: Use in Components

```jsx
<img src={product.image} alt={product.name} />
```

---

## Method 3: Use Placeholder Service (Quick Testing)

Use services that generate placeholder images automatically.

### Option A: Picsum (Random Photos)
```json
{
  "image": "https://picsum.photos/500/500?random=1"
}
```

### Option B: Placeholder Service
```json
{
  "image": "https://via.placeholder.com/500x500/FF6B6B/FFFFFF?text=Nike+Shoe"
}
```

### Option C: DummyJSON
```json
{
  "image": "https://dummyjson.com/image/1/500x500"
}
```

---

## Quick Start: Add Images Right Now

### Step 1: Update products.json

Replace your current `products.json` with images:

```json
[
  {
    "id": 1,
    "name": "Casual",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    "id": 2,
    "name": "Sports Shoes",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1502058691657-72a16ca59b3b?w=500"
  },
  {
    "id": 3,
    "name": "Formal",
    "price": 140,
    "description": "Performance sprint shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500"
  },
  {
    "id": 4,
    "name": "Trainers Shoe",
    "price": 110,
    "description": "Daily trainer",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1517762231928-da4ca93ff479?w=500"
  },
  {
    "id": 5,
    "name": "Lofers",
    "price": 85,
    "description": "Casual court shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
  },
  {
    "id": 6,
    "name": "Flip-Flop",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1572099160349-d03e9c0a5a33?w=500"
  },
  {
    "id": 7,
    "name": "Running Shoes",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    "id": 8,
    "name": "Monk straps",
    "price": 140,
    "description": "Performance sprint shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500"
  },
  {
    "id": 9,
    "name": "Trainers Shoe",
    "price": 110,
    "description": "Daily trainer",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1517762231928-da4ca93ff479?w=500"
  },
  {
    "id": 10,
    "name": "Brogues",
    "price": 85,
    "description": "Casual court shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
  }
]
```

### Step 2: Update ProductCard Component

Edit `src/components/ProductCard.jsx`:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img 
          src={product.image || 'https://via.placeholder.com/200x200'} 
          alt={product.name}
          onError={(e) => e.target.src = 'https://via.placeholder.com/200x200'}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <span className="price">${product.price}</span>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </Link>
  )
}
```

### Step 3: Add CSS for Images

Add to `src/styles.css`:

```css
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  margin: 0 0 8px 0;
  font-size: 1.1em;
}

.product-info p {
  margin: 0 0 auto 0;
  color: #666;
  font-size: 0.9em;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
}

.price {
  font-weight: bold;
  font-size: 1.2em;
}

.add-btn {
  padding: 8px 15px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

.add-btn:hover {
  background: #333;
}
```

### Step 4: Update ProductDetail Component

Edit `src/pages/ProductDetail.jsx`:

```jsx
import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`http://localhost:4000/api/products/${id}`)
        const data = await res.json()
        setProduct(data)
      } catch (err) {
        console.error('Error loading product')
      }
    }
    load()
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div className="product-detail">
      <div className="detail-image">
        <img 
          src={product.image || 'https://via.placeholder.com/400x400'}
          alt={product.name}
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x400'}
        />
      </div>
      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="btn-cart">Add to Cart</button>
      </div>
    </div>
  )
}
```

---

## Complete Example: Full products.json with Images

Here's a complete example with all 30 products and images:

```json
[
  {
    "id": 1,
    "name": "Casual",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    "id": 2,
    "name": "Sports Shoes",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1502058691657-72a16ca59b3b?w=500"
  },
  {
    "id": 3,
    "name": "Formal",
    "price": 140,
    "description": "Performance sprint shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500"
  },
  {
    "id": 4,
    "name": "Trainers Shoe",
    "price": 110,
    "description": "Daily trainer",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1517762231928-da4ca93ff479?w=500"
  },
  {
    "id": 5,
    "name": "Lofers",
    "price": 85,
    "description": "Casual court shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
  },
  {
    "id": 6,
    "name": "Flip-Flop",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1572099160349-d03e9c0a5a33?w=500"
  },
  {
    "id": 7,
    "name": "Running Shoes",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    "id": 8,
    "name": "Monk straps",
    "price": 140,
    "description": "Performance sprint shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500"
  },
  {
    "id": 9,
    "name": "Trainers Shoe",
    "price": 110,
    "description": "Daily trainer",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1517762231928-da4ca93ff479?w=500"
  },
  {
    "id": 10,
    "name": "Brogues",
    "price": 85,
    "description": "Casual court shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
  },
  {
    "id": 11,
    "name": "Chelsea Boots",
    "price": 85,
    "description": "Casual court shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1608256246200-53a9c60402ca?w=500"
  },
  {
    "id": 12,
    "name": "Oxfords",
    "price": 85,
    "description": "Casual court shoe",
    "category": "men",
    "image": "https://images.unsplash.com/photo-1543163521-9efcc06b81b2?w=500"
  },
  {
    "id": 13,
    "name": "Sports",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1514612411223-a13edbc396b1?w=500"
  },
  {
    "id": 14,
    "name": "snkrs",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1555090534134-ecfc8962b133?w=500"
  },
  {
    "id": 15,
    "name": "School Shoes",
    "price": 140,
    "description": "Performance sprint shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1543163521-9efcc06b81b2?w=500"
  },
  {
    "id": 16,
    "name": "Casual",
    "price": 110,
    "description": "Daily trainer",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1525966222134-bcfc7ce888b3?w=500"
  },
  {
    "id": 17,
    "name": "Clogs",
    "price": 85,
    "description": "Casual court shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1608256246200-53a9c60402ca?w=500"
  },
  {
    "id": 18,
    "name": "Flats",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1514612411223-a13edbc396b1?w=500"
  },
  {
    "id": 19,
    "name": "Heels",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1555090534134-ecfc8962b133?w=500"
  },
  {
    "id": 20,
    "name": "Boots",
    "price": 140,
    "description": "Performance sprint shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1543163521-9efcc06b81b2?w=500"
  },
  {
    "id": 21,
    "name": "Wedges",
    "price": 110,
    "description": "Daily trainer",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1525966222134-bcfc7ce888b3?w=500"
  },
  {
    "id": 22,
    "name": "Sandals",
    "price": 85,
    "description": "Casual court shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1608256246200-53a9c60402ca?w=500"
  },
  {
    "id": 23,
    "name": "Pumps",
    "price": 85,
    "description": "Casual court shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1514612411223-a13edbc396b1?w=500"
  },
  {
    "id": 24,
    "name": "Mules",
    "price": 85,
    "description": "Casual court shoe",
    "category": "women",
    "image": "https://images.unsplash.com/photo-1555090534134-ecfc8962b133?w=500"
  },
  {
    "id": 25,
    "name": "Sports",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "kids",
    "image": "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=500"
  },
  {
    "id": 26,
    "name": "snkrs",
    "price": 95,
    "description": "Lightweight running shoe",
    "category": "kids",
    "image": "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=500"
  },
  {
    "id": 27,
    "name": "School Shoes",
    "price": 140,
    "description": "Performance sprint shoe",
    "category": "kids",
    "image": "https://images.unsplash.com/photo-1543163521-9efcc06b81b2?w=500"
  },
  {
    "id": 28,
    "name": "Trainers Shoe",
    "price": 110,
    "description": "Daily trainer",
    "category": "kids",
    "image": "https://images.unsplash.com/photo-1517762231928-da4ca93ff479?w=500"
  },
  {
    "id": 29,
    "name": "Casual",
    "price": 85,
    "description": "Casual court shoe",
    "category": "kids",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    "id": 30,
    "name": "Sandals",
    "price": 120,
    "description": "Comfortable everyday shoe",
    "category": "kids",
    "image": "https://images.unsplash.com/photo-1572099160349-d03e9c0a5a33?w=500"
  }
]
```

---

## How to Use These Images in Your App

### 1. Update products.json
Copy the example above with images

### 2. Check ProductCard Component
Make sure it displays the image:

```jsx
<img src={product.image} alt={product.name} />
```

### 3. Add Fallback Image
If image fails to load:

```jsx
onError={(e) => e.target.src = 'https://via.placeholder.com/200x200'}
```

### 4. Test Your App
1. Restart servers
2. Check if images appear on:
   - Home page
   - Men/Women/Kids pages
   - Product detail page
   - Cart

---

## Image Sources by Category

**For Nike/Sports Shoes:**
- Unsplash: https://unsplash.com/t/fashion
- Pexels: https://pexels.com/search/sneakers/
- Pixabay: https://pixabay.com/photos/sport/

**Direct Image URLs to Use:**
```
https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500
https://images.unsplash.com/photo-1502058691657-72a16ca59b3b?w=500
https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500
https://images.unsplash.com/photo-1517762231928-da4ca93ff479?w=500
https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500
https://images.unsplash.com/photo-1572099160349-d03e9c0a5a33?w=500
https://images.unsplash.com/photo-1514612411223-a13edbc396b1?w=500
```

---

## Summary

**Quick Start:**
1. Add `"image"` field to products.json
2. Use Unsplash URLs (Method 1 - Easiest)
3. Update ProductCard to show images
4. Test your app

That's it! Your Nike Clone now has product photos! 📸
