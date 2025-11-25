import React from "react";
import products from "../../data/products";

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}

export default function AdminDashboard() {
  const revenue = products.reduce(
    (s, p) => s + p.price * (p.stock > 0 ? 1 : 0),
    0
  );
  const stock = products.reduce((s, p) => s + p.stock, 0);
  const orders = 24;
  const customers = 120;

  return (
    <div className="min-h-[80vh] bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-serif mb-6">Quản lý</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <SummaryCard
            title="Doanh thu"
            value={`${(revenue / 1000000).toFixed(2)}M ₫`}
          />
          <SummaryCard title="Tồn kho" value={stock} />
          <SummaryCard title="Đơn hàng" value={orders} />
          <SummaryCard title="Khách hàng" value={customers} />
        </div>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-medium mb-3">Analytics</h3>
          <div className="h-36 flex items-end gap-2">
            {[40, 70, 30, 80, 55].map((v, i) => (
              <div
                key={i}
                className="w-8 bg-gold rounded-t"
                style={{ height: `${v}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-3">Inventory</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-500">
                  <th className="py-2">ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="py-3">{p.sku}</td>
                    <td>{p.name}</td>
                    <td>{(p.price / 1000000).toFixed(2)}M ₫</td>
                    <td>{p.stock}</td>
                    <td>{p.stock > 0 ? "Available" : "Out of stock"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
