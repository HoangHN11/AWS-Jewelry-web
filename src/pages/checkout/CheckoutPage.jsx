import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
    paymentMethod: "cod",
  });

  function submit() {
    if (!form.name || !form.phone || !form.email || !form.address) {
      alert("Vui lòng điền đầy đủ thông tin giao hàng!");
      return;
    }
    console.log("Checkout", { form, cart, total: totalPrice });
    alert("Đơn hàng đã được xác nhận. Cảm ơn bạn đã mua hàng!");
    clearCart();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
            Thanh Toán
          </h1>
          <p className="text-gray-700 mt-2">
            Bước {step} của 3 - Hoàn tất đơn hàng của bạn
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12 flex items-center justify-between">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step === num
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                      : step > num
                      ? "bg-amber-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all ${
                      step > num ? "bg-amber-500" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                {/* Step 1: Shipping Info */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Thông Tin Giao Hàng
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Họ Tên *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                          placeholder="Nguyễn Văn A"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Số Điện Thoại *
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                            placeholder="0912 345 678"
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                            placeholder="email@example.com"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Địa Chỉ Giao Hàng *
                        </label>
                        <textarea
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                          placeholder="Số nhà, Đường, Phường, Quận, TP..."
                          rows="3"
                          value={form.address}
                          onChange={(e) =>
                            setForm({ ...form, address: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ghi Chú (Không bắt buộc)
                        </label>
                        <textarea
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                          placeholder="Ghi chú thêm cho đơn hàng..."
                          rows="2"
                          value={form.note}
                          onChange={(e) =>
                            setForm({ ...form, note: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex gap-4 pt-6">
                        <button
                          onClick={() => setStep(2)}
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                        >
                          Tiếp Tục
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Payment Method */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Phương Thức Thanh Toán
                    </h2>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-amber-500 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={form.paymentMethod === "cod"}
                          onChange={(e) =>
                            setForm({ ...form, paymentMethod: e.target.value })
                          }
                          className="w-5 h-5"
                        />
                        <div className="ml-4">
                          <div className="font-bold text-gray-900">
                            Thanh Toán Khi Nhận (COD)
                          </div>
                          <div className="text-sm text-gray-600">
                            Thanh toán khi nhận hàng
                          </div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-amber-500 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="bank"
                          checked={form.paymentMethod === "bank"}
                          onChange={(e) =>
                            setForm({ ...form, paymentMethod: e.target.value })
                          }
                          className="w-5 h-5"
                        />
                        <div className="ml-4">
                          <div className="font-bold text-gray-900">
                            Chuyển Khoản Ngân Hàng
                          </div>
                          <div className="text-sm text-gray-600">
                            Chuyển tiền trước khi giao hàng
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="flex gap-4 pt-6">
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                      >
                        Tiếp Tục
                      </button>
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-amber-500 transition-colors"
                      >
                        Quay Lại
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Xác Nhận Đơn Hàng
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
                        <h3 className="font-bold text-amber-900 mb-3">
                          Thông Tin Giao Hàng
                        </h3>
                        <div className="space-y-2 text-sm text-amber-900">
                          <p>
                            <span className="font-bold">Người nhận:</span>{" "}
                            {form.name}
                          </p>
                          <p>
                            <span className="font-bold">Điện thoại:</span>{" "}
                            {form.phone}
                          </p>
                          <p>
                            <span className="font-bold">Email:</span>{" "}
                            {form.email}
                          </p>
                          <p>
                            <span className="font-bold">Địa chỉ:</span>{" "}
                            {form.address}
                          </p>
                          {form.note && (
                            <p>
                              <span className="font-bold">Ghi chú:</span>{" "}
                              {form.note}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                        <h3 className="font-bold text-orange-900 mb-2">
                          Phương Thức Thanh Toán
                        </h3>
                        <p className="text-sm text-orange-900">
                          {form.paymentMethod === "cod"
                            ? "Thanh Toán Khi Nhận (COD)"
                            : "Chuyển Khoản Ngân Hàng"}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-6">
                      <button
                        onClick={submit}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                      >
                        Xác Nhận & Đặt Hàng
                      </button>
                      <button
                        onClick={() => setStep(2)}
                        className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-amber-500 transition-colors"
                      >
                        Quay Lại
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Tóm Tắt Đơn Hàng
                </h3>

                {/* Items */}
                <div className="space-y-3 pb-6 border-b-2 border-gray-200 max-h-96 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <div className="font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500">x{item.qty}</div>
                      </div>
                      <div className="text-right font-medium text-gray-900">
                        {(item.price * item.qty).toLocaleString()} ₫
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="space-y-3 py-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Tạm tính:</span>
                    <span className="font-medium">
                      {totalPrice.toLocaleString()} ₫
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Vận chuyển:</span>
                    <span className="font-medium text-amber-600">0 ₫</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Khuyến mãi:</span>
                    <span className="font-medium text-green-600">0 ₫</span>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-6 border-t-2 border-gray-200">
                  <div className="flex justify-between mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      Tổng:
                    </span>
                    <span className="text-3xl font-bold text-amber-600">
                      {totalPrice.toLocaleString()} ₫
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    Đã bao gồm tất cả các loại phí
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
