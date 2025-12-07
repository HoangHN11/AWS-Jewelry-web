import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import api from "../../services/axios";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/auth/userinfo");
        setUser(response.data.data); // Assuming data.data has user info like { email, fullName, etc }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    };

    if (localStorage.getItem("token")) {
      fetchUser();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    // Optionally call BE logout if needed
  };

  return (
    <header className="fixed top-0 inset-x-0 bg-white/60 backdrop-blur z-40 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif text-gray-900">
          Lumiere
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Sản phẩm
          </NavLink>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Bộ sưu tập
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Tin tức
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Về Lumiere
          </NavLink>
          <NavLink
            to="/stores"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Cửa hàng
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Liên hệ
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? "text-gold" : "text-gray-700"
            }
          >
            Tài khoản
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <NavLink to="/cart" className="flex items-center gap-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
            </svg>
            <span className="text-sm">Giỏ hàng</span>
          </NavLink>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {user ? (
            <div className="flex items-center gap-2">
              <span>Xin chào, {user.fullName || user.email}</span>
              <button onClick={handleLogout}>Đăng xuất</button>
            </div>
          ) : (
            <Link to="https://ap-southeast-1ucrmlooxh.auth.ap-southeast-1.amazoncognito.com/login?client_id=2du254ol9r1fl044tsuchsi20m&redirect_uri=https%3A%2F%2Faws-jewelry-web.vercel.app%2F&response_type=code&scope=email+openid+phone">
              <button>Đăng nhập</button>
            </Link>
          )}
        </div>
      </div>
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
            {user ? (
              <>
                <span>Xin chào, {user.fullName || user.email}</span>
                <button onClick={handleLogout}>Đăng xuất</button>
              </>
            ) : (
              <Link to="https://ap-southeast-1ucrmlooxh.auth.ap-southeast-1.amazoncognito.com/login?client_id=2du254ol9r1fl044tsuchsi20m&redirect_uri=https%3A%2F%2Faws-jewelry-web.vercel.app%2F&response_type=code&scope=email+openid+phone">
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}