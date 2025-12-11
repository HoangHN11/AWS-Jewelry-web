import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 text-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Brand Section */}
          <div>
            <h4 className="font-serif text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
              Lumiere
            </h4>
            <p className="text-xs text-gray-700 leading-tight mb-2">
              Trang sức cao cấp — Tinh tế & Sang trọng.
            </p>
            <p className="text-xs text-gray-600">
              Sản phẩm trang sức độc đáo chất lượng tốt nhất.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-gray-900 mb-2 text-sm">Sản Phẩm</h5>
            <ul className="text-xs space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Tất Cả Sản Phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Bộ Sưu Tập
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Tin Tức & Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Về Chúng Tôi
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div>
            <h5 className="font-bold text-gray-900 mb-2 text-sm">Hỗ Trợ</h5>
            <ul className="text-xs space-y-3">
              <li>
                <Link
                  to="/policies/warranty"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Chính Sách Bảo Hành
                </Link>
              </li>
              <li>
                <Link
                  to="/policies/shipping"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Chính Sách Đổi Trả
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="font-bold text-gray-900 mb-2 text-sm">Liên Hệ</h5>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 font-medium">Hotline</div>
                <a
                  href="tel:0399578511"
                  className="text-gray-900 font-bold hover:text-amber-600 transition-colors text-xs"
                >
                  0399578511
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Email</div>
                <a
                  href="mailto:support@lumiere.com"
                  className="text-gray-900 font-bold hover:text-amber-600 transition-colors text-xs"
                >
                  support@lumiere.com
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">
                  Giờ Làm Việc
                </div>
                <p className="text-xs text-gray-700">
                  Thứ 2 - Thứ Sáu: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-yellow-100 bg-opacity-40 text-xs text-gray-600 text-center py-2">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-gray-900">Lumiere</span>. Tất cả quyền
        được bảo lưu.
      </div>
    </footer>
  );
}
