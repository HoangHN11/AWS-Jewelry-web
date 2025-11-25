import React from "react";
import collections from "../../data/collections";
import { Link } from "react-router-dom";

export default function CollectionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Bộ sưu tập</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl overflow-hidden shadow"
          >
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.excerpt}</p>
              <Link
                to={`/collections/${c.id}`}
                className="mt-3 inline-block text-gold"
              >
                Xem bộ sưu tập
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
