import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/HomePage";
import AccountPage from "./pages/account/AccountPage";
import OrderHistoryPage from "./pages/account/OrderHistoryPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import CollectionsPage from "./pages/collections/CollectionsPage";
import CollectionDetailPage from "./pages/collections/CollectionDetailPage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import NewsListPage from "./pages/news/NewsListPage";
import NewsDetailPage from "./pages/news/NewsDetailPage";
import FAQPage from "./pages/faq/FAQPage";
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import WarrantyPolicyPage from "./pages/policies/WarrantyPolicyPage";
import ShippingReturnPolicyPage from "./pages/policies/ShippingReturnPolicyPage";
import StoreLocatorPage from "./pages/stores/StoreLocatorPage";
import ContactPage from "./pages/contact/ContactPage";
import BookingPage from "./pages/booking/BookingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateProduct from "./pages/admin/CreateProduct";
import AuthPage from "./pages/auth/AuthPage";
import { CartProvider } from "./contexts/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import AdminRedirectGuard from "./components/AdminRedirectGuard";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AdminRedirectGuard />
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/account" element={<AccountPage />} />
            <Route path="/account/orders" element={<OrderHistoryPage />} />

            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:id" element={<CollectionDetailPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/news" element={<NewsListPage />} />
            <Route path="/news/:slug" element={<NewsDetailPage />} />

            <Route path="/faq" element={<FAQPage />} />

            <Route path="/policies/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/policies/warranty" element={<WarrantyPolicyPage />} />
            <Route
              path="/policies/shipping"
              element={<ShippingReturnPolicyPage />}
            />

            <Route path="/stores" element={<StoreLocatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />

            <Route path="/auth" element={<AuthPage />} />
            {/* Admin-only routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/create-product" element={<CreateProduct />} />
            <Route path="/admin/not-found" element={<NotFoundPage />} />
            <Route path="/admin/*" element={<NotFoundPage />} />

            {/* Shared not-found routes */}
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
