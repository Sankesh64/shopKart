<div align="center">

# 🛍️ shopKart

**A modern, full-featured e-commerce storefront built with React 19 + Vite**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

</div>

---

## 📸 Screenshots

### Hero — Summer Essence Collection
![ShopKart Hero](./screenshot1.png)

### Trending Now
![ShopKart Trending](./screenshot2.png)

### New Arrivals & Gift Wrapping
![ShopKart New Arrivals](./screenshot3.png)

---

## ✨ Features

- 🏠 **Dynamic Homepage** — Hero banner, trending products, new arrivals, category grid
- 🔍 **Search & Filter** — Real-time search with category and price filters
- 🛒 **Cart System** — Add, remove, update quantities via Redux Toolkit
- ❤️ **Wishlist** — Save favourites with persistent state
- 🔐 **Auth** — Firebase-powered login & register with protected routes
- 📦 **Order Management** — Track orders from checkout to delivery
- 🎁 **Gift Wrapping** — Festive banner with optional gift wrapping at checkout
- 💳 **Checkout Flow** — Multi-step checkout with React Hook Form validation
- 🌀 **Animations** — Page transitions and micro-interactions via Framer Motion
- 📱 **Fully Responsive** — Mobile-first design with Tailwind CSS
- 🔔 **Toast Notifications** — React Hot Toast for action feedback

---

## 🧰 Tech Stack

### Core
| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite** | Build tool & dev server |
| **React Router DOM** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |

### State & Data
| Technology | Purpose |
|---|---|
| **Redux Toolkit** | Global state management |
| **React Redux** | React bindings for Redux |
| **Axios** | HTTP client for API calls |

### UI & UX
| Technology | Purpose |
|---|---|
| **Framer Motion** | Animations & page transitions |
| **React Hook Form** | Performant form handling |
| **React Hot Toast** | Toast notifications |
| **React Icons** | Icon library |
| **Swiper JS** | Touch-friendly product sliders |
| **clsx** | Conditional className utility |

### Infrastructure
| Technology | Purpose |
|---|---|
| **Firebase** | Authentication |
| **React Helmet Async** | Dynamic `<head>` / SEO |
| **dotenv** | Environment variable management |

---

## 📁 Project Structure

```
shopKart/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── banners/
│   ├── logos/
│   └── favicon.ico
│
└── src/
    │
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   ├── fonts/
    │   └── animations/
    │
    ├── components/
    │   └── common/
    │       ├── Navbar/
    │       ├── Footer/
    │       ├── Hero/
    │       ├── CategoryCard/
    │       ├── ProductCard/
    │       ├── ProductSlider/
    │       ├── SearchBar/
    │       ├── CartDrawer/
    │       ├── WishlistButton/
    │       ├── Rating/
    │       ├── Breadcrumb/
    │       ├── Filters/
    │       ├── Pagination/
    │       ├── Loader/
    │       ├── Modal/
    │       ├── Button/
    │       ├── Input/
    │       └── EmptyState/
    │
    ├── layouts/
    │   ├── MainLayout.jsx
    │   ├── DashboardLayout.jsx
    │   └── AuthLayout.jsx
    │
    ├── pages/
    │   ├── Home/           → Home.jsx
    │   ├── Shop/           → Shop.jsx
    │   ├── Product/        → ProductDetails.jsx
    │   ├── Cart/           → Cart.jsx
    │   ├── Checkout/       → Checkout.jsx
    │   ├── Wishlist/
    │   ├── Login/
    │   ├── Register/
    │   ├── Profile/
    │   ├── Orders/
    │   └── NotFound/
    │
    ├── routes/
    │   ├── AppRoutes.jsx
    │   └── ProtectedRoute.jsx
    │
    ├── redux/
    │   ├── store.js
    │   ├── slices/
    │   │   ├── cartSlice.js
    │   │   ├── authSlice.js
    │   │   ├── wishlistSlice.js
    │   │   └── productSlice.js
    │   └── api/
    │
    ├── context/
    ├── services/
    │   ├── api.js
    │   ├── authService.js
    │   ├── productService.js
    │   └── orderService.js
    │
    ├── hooks/
    │   ├── useCart.js
    │   ├── useWishlist.js
    │   ├── useProducts.js
    │   └── useAuth.js
    │
    ├── utils/
    │   ├── constants.js
    │   ├── helpers.js
    │   ├── formatCurrency.js
    │   └── validation.js
    │
    ├── styles/
    │   ├── globals.css
    │   └── tailwind.css
    │
    ├── data/
    │   ├── products.js
    │   ├── categories.js
    │   └── banners.js
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn
- Firebase project (for authentication)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sankesh64/shopKart.git
cd shopKart

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your Firebase config values in .env

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root with the following:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_BASE_URL=https://your-api-url.com
```

---

## 📜 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## 🗺️ Roadmap

- [x] Homepage with hero, trending & new arrivals
- [x] Category browsing grid
- [x] Product cards with add-to-cart
- [ ] Product detail page with image gallery
- [ ] Cart drawer with quantity controls
- [ ] Firebase authentication (login / register)
- [ ] Wishlist with persistent state
- [ ] Multi-step checkout with form validation
- [ ] Order history page
- [ ] Search with filters & pagination
- [ ] Admin dashboard
- [ ] PWA support

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch — `git checkout -b feature/AmazingFeature`
3. Commit your changes — `git commit -m 'Add AmazingFeature'`
4. Push to the branch — `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 👨💻 Author

**Sankesh**
- GitHub: [@Sankesh64](https://github.com/Sankesh64)
- Project: [YourNomad](https://github.com/Sankesh64/YourNomad)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ and ☕ by Sankesh

⭐ Star this repo if you find it helpful!

</div>

https://github.com/Sankesh64/shopKart
