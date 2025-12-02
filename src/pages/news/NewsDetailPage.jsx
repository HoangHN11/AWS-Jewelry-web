import React from "react";
import { useParams } from "react-router-dom";
import news from "../../data/news";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = news.find((n) => n.slug === slug) || news[0];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">



      <h1 className="text-3xl font-serif mb-2">{article.title}</h1>

      <div className="text-sm text-gray-500 mb-6">
        {article.date} • {article.category}
      </div>

      {article.banner && (
        <img
          src={article.banner}
          alt={article.title}
          className="w-full max-h-[380px] object-cover rounded mb-8"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
