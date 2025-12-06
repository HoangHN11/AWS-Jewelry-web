import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../contexts/CartContext";
import ReviewSection from "./ReviewSection";
import api from "../../services/axios";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [qty, setQty] = useState(1);

  // Load product detail
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get(`/product/${id}`);
        setProduct(response.data.data);
      } catch (err) {
        console.error("Lỗi load product:", err);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    try {
      api.get("/product").then((res) => {
        console.log(res)
        setAllProducts(res.data.data.items);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!product) {
    return <div className="text-center py-20">Đang tải sản phẩm...</div>;
  }

  const firstSize = product.productSizes?.[0] || {};
  const price = firstSize.price || 0;
  const stock = firstSize.quantity || 0;

  // Related products
  const related = allProducts
    .filter((p) => p.id !== product.id && p.name?.slice(0, 3) === product.name?.slice(0, 3))
    .slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT IMAGE */}
        <div className="bg-white rounded-2xl overflow-hidden shadow p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <h1 className="text-3xl font-serif mb-2">{product.name}</h1>

          <div className="text-gold text-2xl font-semibold mb-3">
            {(price / 1_000_000).toFixed(2)}M ₫
          </div>

          <p className="mt-4 text-gray-700">
            Tình trạng:{" "}
            <span className={stock > 0 ? "text-green-600" : "text-red-500"}>
              {stock > 0 ? `Còn ${stock} sản phẩm` : "Hết hàng"}
            </span>
          </p>

          {/* Quantity + Add to cart */}
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
              onClick={() => addItem(product, qty)}
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

          {/* DESCRIPTION */}
          <div className="mt-8">
            <h3 className="font-medium mb-2">Mô tả</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Sản phẩm liên quan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.length > 0 ? related.map((r) => (
            <ProductCard key={r.id} product={r} />
          )) : (
            <div>Chưa có sản phẩm liên quan</div>
          )}
        </div>
      </section>

      <ReviewSection productId={id} />
    </div>
  );
}
