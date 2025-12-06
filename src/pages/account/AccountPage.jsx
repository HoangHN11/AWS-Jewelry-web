import React from "react";
import { Link } from "react-router-dom";

const mockUser = {
  name: "Nguyễn Ánh",
  email: "anh@example.com",
  phone: "0909123456",
};

export default function AccountPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Tài khoản của tôi</h2>
      <div className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <strong>Họ tên:</strong> {mockUser.name}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {mockUser.email}
        </div>
        <div className="mb-4">
          <strong>Điện thoại:</strong> {mockUser.phone}
        </div>
        <div className="mt-4">
          <Link to="/account/orders" className="text-gold">
            Xem lịch sử đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
