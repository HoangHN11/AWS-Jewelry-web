import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [openUserMenu, setOpenUserMenu] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
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
            <div className="relative">
              <button
                onClick={() => setOpenUserMenu(prev => !prev)}
                className="flex items-center gap-2"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Lumiere&background=ddd&size=32"
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown menu */}
              {openUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border py-2 animate-fadeIn z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <p className="font-medium truncate">{user.fullName || user.email}</p>
                  </div>

                  <Link
                    to="/account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Tài khoản
                  </Link>

                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Đơn hàng
                  </Link>

                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cài đặt
                  </Link>

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
                <span>Xin chào, {user.email}</span>
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