import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AuthPage from './pages/AuthPage'
import AdminDashboard from './pages/AdminDashboard'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
