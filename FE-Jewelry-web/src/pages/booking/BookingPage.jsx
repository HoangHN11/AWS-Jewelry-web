import React, { useState } from "react";

const branches = ["Hà Nội", "Hồ Chí Minh"];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    branch: branches[0],
    service: "",
    datetime: "",
  });
  function submit(e) {
    e.preventDefault();
    console.log("Booking", form);
    alert("Yêu cầu đặt lịch đã gửi (mock)");
  }
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Đặt lịch tư vấn</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-3">
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Họ tên"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Số điện thoại"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <select
          className="w-full border px-3 py-2 rounded"
          value={form.branch}
          onChange={(e) => setForm({ ...form, branch: e.target.value })}
        >
          {branches.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Loại tư vấn"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        />
        <input
          type="datetime-local"
          className="w-full border px-3 py-2 rounded"
          value={form.datetime}
          onChange={(e) => setForm({ ...form, datetime: e.target.value })}
        />
        <button className="px-4 py-2 bg-gold text-black rounded" type="submit">
          Gửi yêu cầu
        </button>
      </form>
    </div>
  );
}
