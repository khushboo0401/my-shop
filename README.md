# 🛍 My Shop – E-commerce Web App

A responsive and modern e-commerce web app built with Next.js.  
Users can browse products, add or remove them from the cart, and view their cart items with quantity and total price updates.  
All cart data is stored in localStorage for persistence.

🔗 **Live Demo:** [https://my-shop-3z6k.vercel.app/](https://my-shop-3z6k.vercel.app/)

---

## 🚀 Features
- Product listing with images and price  
- Add / remove items from cart  
- Quantity update support  
- Persistent cart using localStorage  
- Responsive layout for all screen sizes  
- Smooth and fast navigation with Next.js  

---

## 📂 Project Structure
my-shop/
├── public/ # Static images and assets
├── src/
│ ├── app/
│ │ ├── cart/ # Cart page
│ │ ├── api/products/ # Product data
│ │ └── page.js # Product listing page
│ ├── store/ # Redux store setup
│ └── components/ # Navbar and reusable components
├── next.config.mjs
├── package.json
└── tailwind.config.js

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/my-shop.git
cd my-shop
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start Development Server
bash
Copy code
npm run dev
Then open http://localhost:3000 in your browser.

🛒 Deployment
This project is deployed on Vercel.
Live URL: https://my-shop-3z6k.vercel.app/

Push your changes to GitHub — Vercel will automatically rebuild and deploy the latest version.

🧩 How to Add Products
Edit the file:

swift
Copy code
src/app/api/products/route.js
Add your product like:

js
Copy code
{
  id: 1,
  title: "New Product",
  price: 99.99,
  image: "/images/new-product.jpg"
}
✅ Summary
My Shop is a simple, fast, and responsive e-commerce web app
built with Next.js and Redux for state management,
using localStorage to keep cart data persistent across sessions.