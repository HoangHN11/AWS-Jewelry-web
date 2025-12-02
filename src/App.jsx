import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutPage from './pages/about/AboutPage';

import CollectionsPage from "./pages/collections/CollectionsPage";
import CollectionDetailPage from "./pages/collections/CollectionDetailPage";
import ServicesPage from "./pages/services/ServicesPage";
import NewsListPage from "./pages/news/NewsListPage";
import NewsDetailPage from "./pages/news/NewsDetailPage";
import FAQPage from "./pages/faq/FAQPage";
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import WarrantyPolicyPage from "./pages/policies/WarrantyPolicyPage";
import ShippingReturnPolicyPage from "./pages/policies/ShippingReturnPolicyPage";
import StoreLocatorPage from "./pages/stores/StoreLocatorPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}

          <Route path="/about" element={<AboutPage />} />

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


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
