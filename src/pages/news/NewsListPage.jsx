import React from "react";
import { Link } from "react-router-dom";
import news from "../../data/news";

export default function NewsListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 inline-block">
            <span className="inline-block px-4 py-1 bg-amber-200 bg-opacity-50 rounded-full text-sm text-amber-900 font-medium">
              Tạp Chí & Bài Viết
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Tin Tức & Góc Sáng Tạo
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Khám phá những bài viết về xu hướng trang sức, mẹo chọn lựa, chăm
            sóc và những câu chuyện đằng sau những chiếc nhẫn yêu thích của bạn
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((n) => (
              <Link
                key={n.slug}
                to={`/news/${n.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                {n.image && (
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                      {n.category}
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-sm text-gray-500 font-medium">{n.date}</p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {n.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {n.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-amber-600 font-bold group-hover:text-amber-700">
                    Xem chi tiết
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
