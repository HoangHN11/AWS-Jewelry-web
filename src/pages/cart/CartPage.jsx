import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeItem, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
            Giỏ Hàng
          </h1>
          <p className="text-gray-700 mt-2">
            Bạn có{" "}
            <span className="font-bold text-amber-600">{cart.length}</span> sản
            phẩm trong giỏ
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Giỏ Hàng Trống
              </h2>
              <p className="text-gray-600 mb-8">
                Hãy thêm một số sản phẩm yêu thích vào giỏ hàng của bạn
              </p>
              <Link
                to="/products"
                className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Tiếp Tục Mua Sắm
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md p-6 flex gap-6 hover:shadow-lg transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          SKU: {item.sku}
                        </p>

                        {/* Quantity Control */}
                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-700">
                            Số lượng:
                          </span>
                          <div className="flex items-center border-2 border-gray-200 rounded-lg">
                            <button
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                              onClick={() => updateQty(item.id, item.qty - 1)}
                            >
                              −
                            </button>
                            <div className="px-4 py-1 font-bold text-gray-900 border-l border-r border-gray-200">
                              {item.qty}
                            </div>
                            <button
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                              onClick={() => updateQty(item.id, item.qty + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          className="mt-4 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          Xóa Khỏi Giỏ
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right flex flex-col justify-between">
                        <div>
                          <div className="text-sm text-gray-500 font-medium">
                            Đơn giá
                          </div>
                          <div className="text-xl font-bold text-amber-600">
                            {item.price.toLocaleString()} ₫
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 font-medium">
                            Tổng
                          </div>
                          <div className="text-2xl font-bold text-gray-900">
                            {(item.price * item.qty).toLocaleString()} ₫
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 bg-white rounded-lg shadow-md p-6 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Tóm Tắt Đơn Hàng
                  </h3>

                  {/* Summary Items */}
                  <div className="space-y-3 pb-6 border-b-2 border-gray-200">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-700">
                          {item.name} x{item.qty}
                        </span>
                        <span className="font-medium text-gray-900">
                          {(item.price * item.qty).toLocaleString()} ₫
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Subtotal */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Tạm tính:</span>
                      <span className="font-medium">
                        {totalPrice.toLocaleString()} ₫
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Vận chuyển:</span>
                      <span className="font-medium text-amber-600">
                        Tính khi thanh toán
                      </span>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mã Giảm Giá
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Nhập mã"
                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                      />
                      <button className="px-4 py-2 border-2 border-gray-300 rounded-lg font-bold text-gray-700 hover:border-amber-500 transition-colors">
                        Áp Dụng
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t-2 border-gray-200">
                    <div className="flex justify-between mb-6">
                      <span className="text-lg font-bold text-gray-900">
                        Tổng:
                      </span>
                      <span className="text-3xl font-bold text-amber-600">
                        {totalPrice.toLocaleString()} ₫
                      </span>
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={handleCheckout}
                      className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg transition-all mb-3"
                    >
                      Tiến Hành Thanh Toán
                    </button>

                    {/* Continue Shopping */}
                    <Link
                      to="/products"
                      className="block text-center px-4 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-amber-500 transition-colors"
                    >
                      Tiếp Tục Mua Sắm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
