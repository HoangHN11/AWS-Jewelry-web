import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/axios"; // dùng axios bạn đã setup

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);

  // LOAD USER INFO FROM API
  useEffect(() => {
    api
      .get("/auth/userinfo")
      .then((res) => {
        const data = res.data.data;

        setUser(data);

        setForm({
          fullName: data.fullName || "",
          address: data.address || "",
        });
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const handleUpdate = async () => {
    try {
      const res = await api.put("/account", {
        fullName: form.fullName,
        address: form.address,
      });

      alert("Cập nhật tài khoản thành công!");

      setUser(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Lỗi khi cập nhật tài khoản!");
    }
  };

  if (loading) return <p className="p-6">Đang tải...</p>;
  if (!user) return <p className="p-6">Không thể tải dữ liệu tài khoản.</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Tài khoản của tôi</h2>

      <div className="bg-white p-6 rounded shadow">
        {/* EMAIL: FIXED */}
        <div className="mb-4">
          <strong>Email:</strong> {user.email}
        </div>

        {/* FULL NAME */}
        <div className="mb-4">
          <label className="font-medium">Họ tên</label>
          <input
            type="text"
            className="border rounded p-2 w-full mt-1"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        </div>

        {/* ADDRESS */}
        <div className="mb-4">
          <label className="font-medium">Địa chỉ</label>
          <input
            type="text"
            className="border rounded p-2 w-full mt-1"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </div>



        {/* UPDATE BUTTON */}
        <button
          onClick={handleUpdate}
          className="mt-4 px-4 py-2 bg-gold text-white rounded hover:bg-yellow-700"
        >
          Lưu thay đổi
        </button>

        <div className="mt-6">
          <Link to="/account/orders" className="text-gold">
            Xem lịch sử đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
