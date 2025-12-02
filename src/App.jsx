import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import CollectionsPage from "./pages/collections/CollectionsPage";
import CollectionDetailPage from "./pages/collections/CollectionDetailPage";
import NewsListPage from './pages/news/NewsListPage'
import NewsDetailPage from './pages/news/NewsDetailPage'
import PrivacyPolicyPage from "./pages/policies/PrivacyPolicyPage";
import WarrantyPolicyPage from "./pages/policies/WarrantyPolicyPage";
import ShippingReturnPolicyPage from "./pages/policies/ShippingReturnPolicyPage";
import ServicesPage from './pages/services/ServicesPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}


          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:id" element={<CollectionDetailPage />} />

          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />

          <Route path="/policies/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/policies/warranty" element={<WarrantyPolicyPage />} />
          <Route
            path="/policies/shipping"
            element={<ShippingReturnPolicyPage />}
          />

          <Route path="/services" element={<ServicesPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App