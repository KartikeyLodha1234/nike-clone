I understand! You have **2 servers**:
1. **Frontend server** (Vite + React) - Run with `npm install` then `npm run dev`
2. **Backend server** - Run with `cd server` then `npm start`

Here's how to properly document this in your README:

# Nike Clone (Vite + React) — Demo

This is a full-stack demo of a Nike-like e-commerce website built with Vite + React frontend and Node.js/Express backend.

## Features

- **Frontend**: Modern React application with Vite
- **Backend**: REST API server for authentication and product data
- **Authentication**: JWT-based authentication (demo purposes)
- **Responsive Design**: Mobile-friendly interface

## Project Structure

```
nike-clone/
├── client/                 # Frontend (Vite + React)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Backend (Node.js/Express)
│   ├── index.js
│   ├── routes/
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

### 1. Install Dependencies

#### Frontend (Main Directory)
```bash
npm install
```

#### Backend
```bash
cd server
npm install
cd ..
```

### 2. Start Both Servers

You need to run both servers in separate terminals:

#### Terminal 1 - Frontend Server
```bash
npm run dev
```
Frontend will run at: `http://localhost:5173`

#### Terminal 2 - Backend Server
```bash
cd server
npm start
```
Backend will run at: `http://localhost:3001` (or the port configured in your server)

### Alternative: Using Concurrently (Single Command)

Install concurrently globally:
```bash
npm install -g concurrently
```

Then run both servers with:
```bash
concurrently "npm run dev" "cd server && npm start"
```

## App Pages

- `/` — Home page with featured products
- `/products` — Browse all products
- `/signup` — Create a new account
- `/signin` — Sign in to existing account
- `/profile` — User profile (protected route)
- `/cart` — Shopping cart

## API Endpoints (Backend)

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category

## Environment Variables

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:3001/api
```

### Backend (.env in server folder)
```
PORT=3001
JWT_SECRET=your_jwt_secret_key
```

## Technology Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Tailwind CSS** - Styling (if used)
- **Axios/Fetch API** - HTTP requests

### Backend
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## Development Notes

1. The authentication uses JWT tokens stored in `localStorage` for demo purposes
2. In production, use secure HTTP-only cookies for storing tokens
3. Product data is currently mocked - connect to a real database for production
4. The backend server must be running for authentication to work

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Change port in server/index.js
   const PORT = process.env.PORT || 3002;
   ```

2. **CORS errors**
   - Ensure backend has CORS middleware enabled
   - Check that frontend proxy is configured in `vite.config.js`

3. **API requests failing**
   - Verify backend server is running
   - Check network tab in browser devtools

### Checking Server Status

- **Frontend**: Open `http://localhost:5173`
- **Backend**: Test `http://localhost:3001/api/products` in browser or Postman

## Future Enhancements

- [ ] Add real database (MongoDB/PostgreSQL)
- [ ] Implement payment integration
- [ ] Add product search and filtering
- [ ] Implement product reviews and ratings
- [ ] Add admin dashboard
- [ ] Deploy to hosting platform

## License

This project is for demonstration purposes only.

---
