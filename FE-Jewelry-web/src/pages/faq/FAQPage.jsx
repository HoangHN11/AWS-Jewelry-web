import React from "react";

const faqs = [
  {
    q: "Làm sao biết size nhẫn?",
    a: "Bạn có thể đo ngón tay bằng thước hoặc đến cửa hàng để được đo chính xác.",
  },
  {
    q: "Chính sách đổi trả?",
    a: "Đổi trả trong 7 ngày với điều kiện còn nguyên trạng.",
  },
  { q: "Bảo hành bao lâu?", a: "Bảo hành 12 tháng cho lỗi sản xuất." },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Câu hỏi thường gặp</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white p-4 rounded shadow">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
