# Lumiere Jewelry - E-Commerce Web Application

A modern, responsive e-commerce web application for a jewelry store built with React, Vite, and Tailwind CSS. This frontend application provides a complete shopping experience with product browsing, cart management, user authentication, and an admin dashboard.

## 🚀 Features

### Customer Features
- **Product Browsing**: Browse and search jewelry products with filtering capabilities
- **Product Details**: View detailed product information, sizes, and reviews
- **Shopping Cart**: Add products to cart and manage quantities
- **Checkout Process**: Complete purchase flow
- **User Authentication**: Register, login, and manage account
- **Order History**: View past orders and order details
- **Collections**: Browse jewelry collections
- **News & Blog**: Read jewelry-related news and articles
- **Store Locator**: Find physical store locations
- **Contact & Booking**: Contact support and book appointments
- **FAQ & Policies**: Access privacy, warranty, and shipping policies

### Admin Features
- **Admin Dashboard**: Overview of store management
- **Product Management**: Create, update, and manage products
- **Size Management**: Manage product sizes
- **Account Management**: Manage user accounts
- **Admin Authentication**: Secure admin access with role-based authorization

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.4.14
- **Routing**: React Router DOM 6.14.1
- **HTTP Client**: Axios 1.13.2
- **Icons**: React Icons 5.5.0
- **Utilities**: UUID 13.0.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HoangHN11/AWS-Jewelry-web.git
   cd AWS-Jewelry-web/AWS_Jewelry_Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://aws.funnydev.id.vn/api/v1
   ```
   
   If not set, the application will use the default API URL.

## 🚀 Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

Create a production build:

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
AWS_Jewelry_Web/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Layout components (Navbar, Footer)
│   │   ├── FilterSidebar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── AdminRedirectGuard.jsx
│   ├── contexts/            # React Context providers
│   │   ├── AuthContext.jsx  # Authentication state
│   │   └── CartContext.jsx  # Shopping cart state
│   ├── data/               # Static data files
│   │   ├── collections.js
│   │   ├── news.js
│   │   ├── orders.js
│   │   └── products.js
│   ├── layouts/            # Page layouts
│   │   └── MainLayout.jsx
│   ├── pages/              # Page components
│   │   ├── admin/          # Admin pages
│   │   ├── auth/           # Authentication pages
│   │   ├── products/       # Product pages
│   │   ├── cart/           # Cart pages
│   │   ├── checkout/       # Checkout pages
│   │   └── ...             # Other pages
│   ├── services/           # API services
│   │   └── axios.js        # Axios configuration
│   ├── utils/              # Utility functions
│   │   └── index.js
│   ├── App.jsx             # Main app component with routes
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.cjs     # Tailwind CSS configuration
├── postcss.config.cjs      # PostCSS configuration
└── vercel.json             # Vercel deployment configuration
```

## 🔌 API Integration

The application connects to a backend API. The API base URL is configured in `src/services/axios.js`:

- **Default API URL**: `https://aws.funnydev.id.vn/api/v1`
- **Custom API URL**: Set via `VITE_API_URL` environment variable

The axios instance includes:
- Automatic JWT token injection from localStorage
- Request/response interceptors
- Error handling for 401 unauthorized responses

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom configuration:
- Custom gold color: `#D4AF37`
- Custom font families: Georgia (serif), Inter (sans-serif)

## 🔐 Authentication

The application uses JWT-based authentication:
- Tokens are stored in `localStorage`
- Protected routes require authentication
- Admin routes require admin role authorization

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🚢 Deployment

The project is configured for deployment on **Vercel**:
- Configuration file: `vercel.json`
- Supports client-side routing with rewrites

To deploy:
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect and deploy

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Authors

- **HoangHN11** - [GitHub](https://github.com/HoangHN11)

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons from React Icons

---

For questions or support, please contact the development team.
