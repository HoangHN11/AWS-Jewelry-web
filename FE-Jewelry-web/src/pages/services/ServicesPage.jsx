import React from "react";

const services = [
  { title: "Khắc tên theo yêu cầu", desc: "Cá nhân hóa sản phẩm của bạn." },
  { title: "Làm mới/đánh bóng", desc: "Phục hồi độ sáng bóng như mới." },
  { title: "Thu đổi, nâng cấp", desc: "Đổi mẫu hoặc nâng cấp đá quý." },
  { title: "Thiết kế theo yêu cầu", desc: "Thiết kế riêng theo ý khách hàng." },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-6">Dịch vụ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h4 className="font-medium mb-2">{s.title}</h4>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
