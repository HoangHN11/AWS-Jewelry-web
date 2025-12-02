import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}){
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transform hover:scale-105 transition p-3">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{product.name}</h3>
          {product.tags?.[0] && <span className="text-xs bg-gold text-white px-2 py-1 rounded">{product.tags[0]}</span>}
        </div>
        <p className="text-sm text-gray-500 mt-1">SKU: {product.sku}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold">{(product.price/1000000).toFixed(2)}M ₫</div>
          <Link to="/products" className="text-sm text-gold">Xem chi tiết</Link>
        </div>
      </div>
    </div>
  )
}
