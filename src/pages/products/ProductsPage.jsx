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

  useEffect(() => {
    try {
      api.get("/product").then((res) => {
        setProducts(res.data.data.items.filter(p => p.sizes?.length > 0));
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

  const productsFilters = useMemo(() => {
    return products.filter((p) => {
      if (filters.category.size && !filters.category.has(p.category))
        return false;
      if (filters.material.size && !filters.material.has(p.material))
        return false;
      if (filters.priceRange) {
        const m = p.price;
        console.log(p)
        if (filters.priceRange === "<1000000" && !(m < 1000000)) return false;
        if (filters.priceRange === "1000000-5000000" && !(m >= 1000000 && m <= 5000000)) return false;
        if (filters.priceRange === ">5000000" && !(m > 5000000)) return false;
      }
      return true;
    });
  }, [filters, products]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsFilters.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
