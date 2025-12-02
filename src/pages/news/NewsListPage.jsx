import React from "react";
import { Link } from "react-router-dom";
import news from "../../data/news";

export default function NewsListPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Tin tức</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((n) => (
          <div key={n.slug} className="bg-white p-4 rounded shadow">

            {n.image && (
              <img
                src={n.image}
                alt={n.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}

            <div className="text-sm text-gray-500">
              {n.date} • {n.category}
            </div>

            <h3 className="font-medium mt-2">{n.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{n.excerpt}</p>

            <Link
              to={`/news/${n.slug}`}
              className="text-gold mt-3 inline-block"
            >
              Xem chi tiết →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
