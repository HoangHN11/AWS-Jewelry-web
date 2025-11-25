import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 bg-white/60 backdrop-blur z-40 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif text-gray-900">Lumièee</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive}) => isActive? 'text-gold':'text-gray-700'}>Trang chủ</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive? 'text-gold':'text-gray-700'}>Sản phẩm</NavLink>
          <NavLink to="/auth" className={({isActive}) => isActive? 'text-gold':'text-gray-700'}>Đăng nhập</NavLink>
          <NavLink to="/admin" className={({isActive}) => isActive? 'text-gold':'text-gray-700'}>Quản lý</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4"/></svg>
            <span className="text-sm">Giỏ hàng</span>
          </button>
          <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <NavLink to="/">Trang chủ</NavLink>
            <NavLink to="/products">Sản phẩm</NavLink>
            <NavLink to="/auth">Đăng nhập</NavLink>
            <NavLink to="/admin">Quản lý</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
