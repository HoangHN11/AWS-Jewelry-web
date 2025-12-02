import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-serif text-xl text-gold">Lumiere</h4>
          <p className="text-sm mt-2">
            Trang sức cao cấp — Tinh tế & Sang trọng.
          </p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Hỗ trợ 11</h5>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>Chính sách bảo hành</li>
            <li>Chính sách đổi trả</li>
            <li>Hướng dẫn mua hàng</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Liên hệ</h5>
          <div className="text-sm text-gray-600">Hotline: 1900-0000</div>
          <div className="text-sm text-gray-600">
            Email: support@lumiere.example
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 text-sm text-gray-500 text-center py-4">
        © {new Date().getFullYear()} Lumiere. All rights reserved.
      </div>
    </footer>
  );
}
