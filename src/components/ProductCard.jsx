import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const firstSize = product.sizes?.[0] || null;

  const price = firstSize?.price ?? product.price ?? 0;
  const quantity = firstSize?.quantity ?? 0;

  const rating = product.rating ?? firstSize?.rating ?? 0;

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transform hover:scale-105 transition p-3">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
      </div>

      <div className="p-4">

        <div className="flex items-center justify-between">
          <h3 className="font-medium">{product.name}</h3>


        </div>

        {/* QUANTITY */}
        <p className="text-sm text-gray-500 mt-1">
          Quantity: {quantity}
        </p>

        {/* ⭐⭐ RATING ⭐⭐ */}
        {rating === 0 || !rating ? (
          <span className="text-gray-400 text-sm italic">Chưa có đánh giá</span>
        ) : (
          <div className="flex items-center gap-1">
            {stars.map((full, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-sm ${!full ? "text-gray-300" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
        )}


        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold">
            {price.toLocaleString()}₫
          </div>

          <Link to={`/products/${product.id}`} className="text-sm text-gold">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  )
}
