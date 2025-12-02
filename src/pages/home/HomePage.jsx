import React from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 4);
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-transparent text-gray-900">
        <div className="max-w-5xl mx-auto text-center p-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Lumiere – Shine in Your Own Way
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Trang sức cao cấp, tinh tế, tôn vinh vẻ đẹp cá nhân. Bộ sưu tập được
            tuyển chọn kỹ lưỡng với chất liệu và chế tác hoàn hảo.
          </p>
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-gold text-black rounded-md font-medium"
          >
            Khám phá bộ sưu tập
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
