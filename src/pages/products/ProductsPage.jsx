import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import api from "../../services/axios";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      api.get("/product").then((res) => {
        setProducts(res.data.data.items.filter((p) => p.sizes?.length > 0));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Danh Mục Sản Phẩm
          </h1>
          <p className="text-lg text-gray-700">
            Khám phá bộ sưu tập trang sức đa dạng của chúng tôi
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Tất Cả Sản Phẩm
          </h2>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Không Tìm Thấy Sản Phẩm
              </h3>
              <p className="text-gray-600">Chưa có sản phẩm nào</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
