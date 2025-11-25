import React from "react";

const stores = [
  { city: "Hà Nội", address: "123 Tràng Tiền, Hoàn Kiếm", phone: "024-123456" },
  { city: "Hồ Chí Minh", address: "456 Lê Lợi, Q1", phone: "028-654321" },
];

export default function StoreLocatorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Cửa hàng</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stores.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h4 className="font-medium">{s.city}</h4>
            <div className="text-sm text-gray-600">{s.address}</div>
            <div className="text-sm mt-2">Hotline: {s.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
