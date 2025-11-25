import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  function submit() {
    console.log("Checkout", { form, cart, total: totalPrice });
    alert("Đơn hàng đã gửi (mock). Kiểm tra console.");
    clearCart();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Thanh toán</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded shadow">
          {step === 1 && (
            <div>
              <h3 className="font-medium mb-3">Thông tin giao hàng</h3>
              <div className="space-y-3">
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Họ tên"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Số điện thoại"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Địa chỉ"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
                <textarea
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Ghi chú"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                />
                <div className="flex gap-3 mt-3">
                  <button
                    className="px-4 py-2 bg-gold text-black rounded"
                    onClick={() => setStep(2)}
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-medium mb-3">Phương thức thanh toán</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="pay" defaultChecked /> Thanh toán
                  khi nhận (COD)
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="pay" /> Chuyển khoản ngân hàng
                </label>
                <div className="mt-4">
                  <button
                    className="px-4 py-2 bg-gold text-black rounded"
                    onClick={() => setStep(3)}
                  >
                    Tiếp
                  </button>
                  <button
                    className="ml-3 px-4 py-2 border rounded"
                    onClick={() => setStep(1)}
                  >
                    Quay lại
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-medium mb-3">Xác nhận đơn hàng</h3>
              <div className="text-sm text-gray-600 mb-4">
                Kiểm tra thông tin và nhấn xác nhận.
              </div>
              <button
                className="px-4 py-2 bg-gold text-black rounded"
                onClick={submit}
              >
                Xác nhận và đặt hàng
              </button>
              <button
                className="ml-3 px-4 py-2 border rounded"
                onClick={() => setStep(2)}
              >
                Quay lại
              </button>
            </div>
          )}
        </div>

        <aside className="bg-white p-6 rounded shadow">
          <h4 className="font-medium mb-3">Tóm tắt đơn hàng</h4>
          <div className="space-y-3">
            {cart.map((i) => (
              <div
                key={i.id}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  {i.name} x{i.qty}
                </div>
                <div>{((i.price * i.qty) / 1000000).toFixed(2)}M ₫</div>
              </div>
            ))}
            <div className="border-t pt-3 text-right font-semibold">
              Tổng: {(totalPrice / 1000000).toFixed(2)}M ₫
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
