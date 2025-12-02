import React from "react";
import { useParams } from "react-router-dom";
import collections from "../../data/collections";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function CollectionDetailPage() {
  const { id } = useParams();
  const coll = collections.find((c) => c.id === id) || collections[0];
  const items = products.filter((p) => coll.productIds.includes(p.id));

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-2xl shadow mb-8">
        <h1 className="text-3xl font-serif mb-2">{coll.title}</h1>
        <p className="text-gray-600">{coll.excerpt}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
