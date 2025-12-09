import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openAdminMenu, setOpenAdminMenu] = useState(false);
  const navigate = useNavigate();

  const role =
    user?.role || user?.roles || user?.roleName || null;

  const isAdmin =
    role === "Admin" ||
    (Array.isArray(role) && role.includes("Admin"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="fixed top-0 inset-x-0 bg-white/60 backdrop-blur z-40 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-serif text-gray-900">
          Lumiere
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>Trang chủ</NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>Sản phẩm</NavLink>
          <NavLink to="/collections" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>Bộ sưu tập</NavLink>
          <NavLink to="/news" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>Tin tức</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>Về Lumiere</NavLink>
          <NavLink to="/stores" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>Cửa hàng</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>Liên hệ</NavLink>

          {user && (
            <NavLink to="/account" className={({ isActive }) => (isActive ? "text-gold" : "text-gray-700")}>
              Tài khoản
            </NavLink>
          )}

          {/* --- ADMIN BUTTON (DESKTOP) --- */}
          {isAdmin && (
            <div className="relative">
              <button
                onClick={() => setOpenAdminMenu(!openAdminMenu)}
                className="px-3 py-1 bg-black text-white rounded hover:bg-gray-900 transition"
              >
                Quản trị
              </button>

              {openAdminMenu && (
                <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-lg border py-2 z-50">
                  <Link to="/admin" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/admin/manage-products" className="block px-4 py-2 hover:bg-gray-100">Quản lý sản phẩm</Link>
                  <Link to="/admin/create-product" className="block px-4 py-2 hover:bg-gray-100">Tạo sản phẩm</Link>
                  <Link to="/admin/manage-sizes" className="block px-4 py-2 hover:bg-gray-100">Quản lý size</Link>
                  <Link to="/admin/manage-accounts" className="block px-4 py-2 hover:bg-gray-100">Quản lý tài khoản</Link>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <NavLink to="/cart" className="flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            <span className="text-sm">Giỏ hàng</span>
          </NavLink>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* USER MENU */}
          {user ? (
            <div className="relative">
              <button onClick={() => setOpenUserMenu(!openUserMenu)} className="flex items-center gap-2">
                <img
                  src="https://ui-avatars.com/api/?name=Lumiere&background=ddd&size=32"
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border py-2 animate-fadeIn z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <p className="font-medium truncate">{user.email}</p>
                    <p className="font-medium truncate">{user.fullname}</p>
                  </div>

                  <Link to="/account" className="block px-4 py-2 text-sm hover:bg-gray-100">Tài khoản</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm hover:bg-gray-100">Đơn hàng</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">Cài đặt</Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="https://ap-southeast-1ucrmlooxh.auth.ap-southeast-1.amazoncognito.com/login?client_id=2du254ol9r1fl044tsuchsi20m&redirect_uri=https%3A%2F%2Faws-jewelry-web.vercel.app%2F&response_type=code&scope=email+openid+phone">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
                Đăng nhập
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-3">

            <NavLink to="/">Trang chủ</NavLink>
            <NavLink to="/products">Sản phẩm</NavLink>
            <NavLink to="/collections">Bộ sưu tập</NavLink>
            <NavLink to="/news">Tin tức</NavLink>
            <NavLink to="/about">Về Lumiere</NavLink>
            <NavLink to="/stores">Cửa hàng</NavLink>
            <NavLink to="/contact">Liên hệ</NavLink>
            <NavLink to="/account">Tài khoản</NavLink>
            <NavLink to="/cart">Giỏ hàng</NavLink>

            {/* ADMIN MENU MOBILE */}
            {isAdmin && (
              <div className="bg-gray-50 border rounded-lg p-3 mt-3">
                <p className="font-semibold mb-2">Quản trị</p>
                <Link to="/admin">Dashboard</Link>
                <Link to="/admin/manage-products">Quản lý sản phẩm</Link>
                <Link to="/admin/create-product">Tạo sản phẩm</Link>
                <Link to="/admin/manage-sizes">Quản lý size</Link>
                <Link to="/admin/manage-accounts">Quản lý tài khoản</Link>
              </div>
            )}

            {user ? (
              <>
                <span>Xin chào, {user.email}</span>
                <button onClick={handleLogout}>Đăng xuất</button>
              </>
            ) : (
              <Link to="https://ap-southeast-1ucrmlooxh.auth.ap-southeast-1.amazoncognito.com/login?client_id=2du254ol9r1fl044tsuchsi20m&redirect_uri=https%3A%2F%2Faws-jewelry-web.vercel.app%2F&response_type=code&scope=email+openid+phone">Đăng nhập</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
