import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const mainSize = product.productSizes?.[0] || {};
  const price = mainSize.price || 0;
  const quantity = mainSize.quantity || 0;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transform hover:scale-105 transition p-3">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{product.name}</h3>
          <div className="flex gap-1">
            {product.isNew && <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">New</span>}
            {product.tags?.[0] && <span className="text-xs bg-gold text-white px-2 py-1 rounded">{product.tags[0]}</span>}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">Quantity: {quantity}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold">{(price / 1000000).toFixed(2)}M ₫</div>
          <Link to={`/products/${product.id}`} className="text-sm text-gold">Xem chi tiết</Link>
        </div>
      </div>
    </div>
  )
}
