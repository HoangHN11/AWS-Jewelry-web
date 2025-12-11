import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import api from "../../services/axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function HomePage() {
  const [featured, setFeatured] = useState([]);

  const { loadUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await api.get("/product");
        const data = res.data.data.items || [];

        setFeatured(data.filter((x) => x.sizes.length > 0).slice(0, 8));
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };

    fetchFeatured();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (!code) return;

    const exchangeCode = async () => {
      try {
        const clientId = "2du254ol9r1fl044tsuchsi20m";

        const response = await api.post("/auth/token", {
          client_id: clientId,
          code,
        });

        const { access_token } = response.data.data;

        localStorage.setItem("token", access_token);

        await loadUser();

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
      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.europeanbusinessreview.com/wp-content/uploads/2023/05/luxury-jewelry.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

        <div className="relative max-w-5xl mx-auto text-center p-6">
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
            Khám phá sản phẩm
          </Link>
        </div>
      </section>


      {/* FEATURED COLLECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Collection</h2>

        {featured.length === 0 ? (
          <p>Đang tải sản phẩm...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
