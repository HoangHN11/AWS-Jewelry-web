import React from "react";
import orders from "../../data/orders";

export default function OrderHistoryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Lịch sử đơn hàng</h2>
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="py-2">Mã đơn</th>
              <th>Ngày</th>
              <th>Tổng</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="py-3">{o.id}</td>
                <td>{o.date}</td>
                <td>{(o.total / 1000000).toFixed(2)}M ₫</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
