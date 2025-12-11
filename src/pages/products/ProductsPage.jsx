import React, { useEffect, useMemo, useState } from "react";
import productsData from "../../data/products";
import ProductCard from "../../components/ProductCard";
import FilterSidebar from "../../components/FilterSidebar";
import api from "../../services/axios";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: new Set(),
    material: new Set(),
    priceRange: "",
    rating: null,
  });

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", image: "" },
    {
      id: "Diamond Ring",
      name: "Diamond Ring",
      image:
        "https://locphuc.com.vn/Content/Images/022023/DSR0918BRW.WG01A/nhan-kim-cuong-DSR0918BRW-WG01A-g1.jpg",
    },
    {
      id: "Wedding Ring",
      name: "Wedding Ring",
      image:
        "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nhan-cuoi-dep-sang-trong-cho-cap-doi.jpg",
    },
    {
      id: "Engagement Ring",
      name: "Engagement Ring",
      image:
        "https://cdn.pnj.io/images/detailed/182/sp-GNDDDDH000185-nhan-cau-hon-kim-cuong-vang-14k-pnj-1.png",
    },
    {
      id: "ECZ Earring",
      name: "ECZ Earring",
      image:
        "https://ngoctham.com/wp-content/uploads/2021/07/D5_3_Mobile.jpg.webp",
    },
    {
      id: "Gold Necklace",
      name: "Gold Necklace",
      image:
        "https://lili.vn/wp-content/uploads/2022/06/Mat-day-chuyen-bac-nu-dinh-kim-cuong-Moissanite-tron-cach-dieu-LILI_413898_6.jpg",
    },
    {
      id: "Diamond Watch",
      name: "Diamond Watch",
      image: "https://cdn.pnj.io/images/detailed/76/SF36QRD85R_Desktop_1.jpg",
    },
    {
      id: "New Jewelry",
      name: "New Jewelry",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.Phznn7Fd3q9PwqfbCvnOYQHaHa?cb=ucfimg2&ucfimg=1&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: "Wedding Jewelry",
      name: "Wedding Jewelry",
      image:
        "https://th.bing.com/th/id/R.de30d68e159ac75da8cb8c6ab696a9c9?rik=gTOHP3sqJrguoQ&pid=ImgRaw&r=0",
    },
    {
      id: "Men Jewelry",
      name: "Men Jewelry",
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.esLna3ItgCKqfDMwY-JNAwHaGN?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: "Lucky Jewelry",
      name: "Lucky Jewelry",
      image:
        "https://cdn.eva.vn/upload/4-2024/images/thomvt/default-filename-1729303672-28-width1200height1200.png",
    },
    {
      id: "Gold Jewelry",
      name: "Gold Jewelry",
      image:
        "https://ngoctham.com/wp-content/uploads/2023/01/bo-trang-suc-cuoi-vang-24k-wkb13-ntj-01-1-1-1-1800x2025.jpg",
    },
    {
      id: "Silver Jewelry",
      name: "Silver Jewelry",
      image:
        "https://hoangphucphoto.com/wp-content/uploads/2025/09/anh-kim-cuong-4.jpg",
    },
  ];

  useEffect(() => {
    try {
      api.get("/product").then((res) => {
        setProducts(res.data.data.items.filter((p) => p.sizes?.length > 0));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Clear other filters when selecting a new category
    setFilters({
      category: new Set(),
      material: new Set(),
      priceRange: "",
      rating: null,
    });
  };

  const productsFilters = useMemo(() => {
    return products.filter((p) => {
      // Category filter - check if product category matches selected category
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }

      // Additional filters from sidebar
      if (filters.category.size && !filters.category.has(p.category))
        return false;
      if (filters.material.size && !filters.material.has(p.material))
        return false;
      if (filters.priceRange) {
        const m = p.price;
        if (filters.priceRange === "<1000000" && !(m < 1000000)) return false;
        if (
          filters.priceRange === "1000000-5000000" &&
          !(m >= 1000000 && m <= 5000000)
        )
          return false;
        if (filters.priceRange === ">5000000" && !(m > 5000000)) return false;
      }
      return true;
    });
  }, [filters, products, selectedCategory]);

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

      {/* Category Selection */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group flex flex-col items-center p-4 rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg"
                    : "bg-gray-50 hover:bg-amber-50 shadow-md"
                }`}
              >
                {cat.image && (
                  <div className="w-20 h-20 mb-2 rounded-lg overflow-hidden bg-white">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                )}
                <span
                  className={`text-xs font-medium text-center ${
                    selectedCategory === cat.id
                      ? "text-amber-900"
                      : "text-gray-700"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "all"
                ? "Tất Cả Sản Phẩm"
                : selectedCategory}
            </h2>
            <p className="text-gray-600">
              Tìm thấy{" "}
              <span className="font-bold text-amber-600">
                {productsFilters.length}
              </span>{" "}
              sản phẩm
            </p>
          </div>

          {productsFilters.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Không Tìm Thấy Sản Phẩm
              </h3>
              <p className="text-gray-600 mb-6">
                Không có sản phẩm trong danh mục này
              </p>
              <button
                onClick={() => handleCategoryClick("all")}
                className="px-8 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Xem Tất Cả
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsFilters.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
