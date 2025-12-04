import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../contexts/CartContext";
import ReviewSection from "./ReviewSection";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const related = products
    .filter(
      (p) =>
        (p.category === product.category || p.material === product.material) &&
        p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded"
          />
        </div>
        <div>
          <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
          <div className="text-gold text-2xl font-semibold mb-3">
            {(product.price / 1000000).toFixed(2)}M ₫
          </div>
          <p className="text-sm text-gray-500">
            SKU: {product.sku} • Category: {product.category}
          </p>
          <p className="mt-4 text-gray-700">
            Material: {product.material} • Stock: {product.stock}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center bg-gray-100 rounded-lg p-1 w-fit">
              <button
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <div className="px-4 min-w-12 text-center font-medium">{qty}</div>
              <button
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              className="px-6 py-2 bg-gold text-black rounded font-medium hover:bg-yellow-500 transition"
              onClick={() => {
                addItem(product, qty)
              }}
            >
              Thêm vào giỏ
            </button>
            <Link
              to="/checkout"
              className="px-6 py-2 border-2 border-gray-300 rounded font-medium hover:border-gold hover:text-gold transition"
            >
              Mua ngay
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-2">Mô tả</h3>
            <p className="text-gray-600">
              Đây là mô tả chi tiết cho sản phẩm. Chất liệu cao cấp, chế tác
              tinh xảo, phù hợp cho những dịp đặc biệt.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Sản phẩm liên quan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((r) => (
            <ProductCard key={r.id} product={r} />
          ))}
        </div>
      </section>

      <ReviewSection />
    </div>
  );
}
