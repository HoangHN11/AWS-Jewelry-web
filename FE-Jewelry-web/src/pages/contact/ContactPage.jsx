import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function submit(e) {
    e.preventDefault();
    console.log("Contact", form);
    alert("Đã gửi (mock)");
  }
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Liên hệ</h2>
      <div className="bg-white p-6 rounded shadow">
        <form onSubmit={submit} className="space-y-3">
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Họ tên"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Chủ đề"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <textarea
            className="w-full border px-3 py-2 rounded"
            placeholder="Nội dung"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            className="px-4 py-2 bg-gold text-black rounded"
            type="submit"
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
}
