import React from 'react'

const ratings = [5, 4, 3]

export default function FilterSidebar({ filters, setFilters }) {
  function setPrice(value) {
    setFilters(prev => ({ ...prev, priceRange: value }));
  }

  function setRating(value) {
    setFilters(prev => ({ ...prev, rating: value }));
  }

  return (
    <aside className="space-y-6">

      {/* FILTER GIÁ */}
      <div>
        <h4 className="font-semibold mb-2">Giá</h4>
        <div className="space-y-1 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange === "<1000000"}
              onChange={() => setPrice("<1000000")}
            />
            &lt; 1 triệu
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange === "1000000-5000000"}
              onChange={() => setPrice("1000000-5000000")}
            />
            1–5 triệu
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange === ">5000000"}
              onChange={() => setPrice(">5000000")}
            />
            &gt; 5 triệu
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange === ""}
              onChange={() => setPrice("")}
            />
            Tất cả
          </label>
        </div>
      </div>

      {/* FILTER RATING */}
      <div>
        <h4 className="font-semibold mb-2">Đánh giá</h4>
        <div className="space-y-1 text-sm">
          {ratings.map(r => (
            <label key={r} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === r}
                onChange={() => setRating(r)}
              />
              {r}★ trở lên
            </label>
          ))}

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="rating"
              checked={!filters.rating}
              onChange={() => setRating(null)}
            />
            Tất cả
          </label>
        </div>
      </div>

      {/* RESET */}
      <div>
        <button
          className="px-4 py-2 bg-gold text-white rounded"
          onClick={() =>
            setFilters({
              category: new Set(),
              material: new Set(),
              priceRange: "",
              rating: null,
            })
          }
        >
          Reset
        </button>
      </div>
    </aside>
  );
}
