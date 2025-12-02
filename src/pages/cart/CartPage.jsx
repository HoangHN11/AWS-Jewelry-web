import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeItem, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Giỏ hàng</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.length === 0 && (
            <div className="p-6 bg-white rounded shadow">
              Giỏ hàng trống.{" "}
              <Link to="/products" className="text-gold">
                Tiếp tục mua sắm
              </Link>
            </div>
          )}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">SKU: {item.sku}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="px-2 border rounded"
                    onClick={() => updateQty(item.id, item.qty - 1)}
                  >
                    -
                  </button>
                  <div className="px-3">{item.qty}</div>
                  <button
                    className="px-2 border rounded"
                    onClick={() => updateQty(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">
                  {(item.price / 1000000).toFixed(2)}M ₫
                </div>
                <div className="text-sm text-gray-500">
                  Tổng: {((item.price * item.qty) / 1000000).toFixed(2)}M ₫
                </div>
                <button
                  className="mt-2 text-sm text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="bg-white p-6 rounded shadow">
          <div className="text-sm text-gray-500">Tạm tính</div>
          <div className="text-2xl font-semibold mt-2">
            {(totalPrice / 1000000).toFixed(2)}M ₫
          </div>
          <div className="mt-4 text-sm">
            <label className="block mb-2">Mã giảm giá</label>
            <input
              className="w-full border px-3 py-2 rounded"
              placeholder="Nhập mã (UI)"
            />
          </div>
          <button
            className="w-full mt-4 px-4 py-2 bg-gold text-black rounded"
            onClick={() => navigate("/checkout")}
          >
            Thanh toán
          </button>
        </aside>
      </div>
    </div>
  );
}
