import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif mb-4">Về Lumiere</h1>
      <p className="text-gray-600 mb-6">
        Lumiere là thương hiệu trang sức cao cấp, lấy cảm hứng từ vẻ đẹp tinh tế
        và sự hoàn hảo trong chế tác.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-medium mb-2">Sứ mệnh</h4>
          <p className="text-sm text-gray-600">
            Tôn vinh vẻ đẹp cá nhân qua từng thiết kế.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-medium mb-2">Giá trị</h4>
          <p className="text-sm text-gray-600">
            Chất lượng, uy tín, dịch vụ tận tâm.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-medium mb-2">Bảo hành</h4>
          <p className="text-sm text-gray-600">
            Bảo hành 12 tháng cho sản phẩm chính hãng.
          </p>
        </div>
      </div>
    </div>
  );
}
