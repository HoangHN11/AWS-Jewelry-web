import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";
import api from "../../services/axios";

export default function HomePage() {
  const featured = products.slice(0, 4);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (!code) return; // Không có code → không làm gì

    const exchangeCode = async () => {
      try {
        const clientId = "2du254ol9r1fl044tsuchsi20m";

        // Gọi BE để đổi code lấy token
        const response = await api.post("/api/token", {
          client_id: clientId,
          code,
        });

        const { id_token, access_token, refresh_token } = response.data.data;

        // Lưu token
        localStorage.setItem("token", access_token);

        // Lấy user info từ BE
        const userRes = await api.get("/api/userinfo");
        console.log("User info:", userRes.data);

        // ➜ Có thể lưu user info vào localStorage hoặc Redux tại đây
        // localStorage.setItem("user", JSON.stringify(userRes.data))

        // Xóa param ?code= khỏi URL
        navigate("/", { replace: true });

      } catch (err) {
        console.error("Error exchanging code:", err);
        alert("Đăng nhập thất bại!");
        navigate("/", { replace: true });
      }
    };

    exchangeCode();
  }, [location, navigate]);

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
