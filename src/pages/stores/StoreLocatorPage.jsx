import React, { useState } from "react";

const stores = [
  {
    id: 1,
    city: "Hà Nội",
    region: "Miền Bắc",
    address: "123 Tràng Tiền, Hoàn Kiếm, Hà Nội",
    phone: "024-3123-4567",
    email: "hanoi@jewelry-company.com",
    hours: "9:00 - 21:00",
    daysOpen: "Mở cửa hàng ngày",
    distance: "Trung tâm thành phố",
  },
  {
    id: 2,
    city: "Hồ Chí Minh",
    region: "Miền Nam",
    address: "456 Lê Lợi, Quận 1, TP. HCM",
    phone: "028-3654-3210",
    email: "hcm@jewelry-company.com",
    hours: "9:00 - 22:00",
    daysOpen: "Mở cửa hàng ngày",
    distance: "Khu vực Bến Nghé",
  },
  {
    id: 3,
    city: "Đà Nẵng",
    region: "Miền Trung",
    address: "789 Nguyễn Huệ, Hải Châu, Đà Nẵng",
    phone: "0236-3840-4500",
    email: "danang@jewelry-company.com",
    hours: "9:00 - 20:00",
    daysOpen: "Mở cửa hàng ngày",
    distance: "Khu vực trung tâm",
  },
  {
    id: 4,
    city: "Hải Phòng",
    region: "Miền Bắc",
    address: "321 Điện Biên Phủ, Lê Chân, Hải Phòng",
    phone: "0225-3846-2020",
    email: "haiphong@jewelry-company.com",
    hours: "9:00 - 21:00",
    daysOpen: "Mở cửa hàng ngày",
    distance: "Khu vực kinh tế",
  },
];

export default function StoreLocatorPage() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [filterRegion, setFilterRegion] = useState("all");

  const filteredStores =
    filterRegion === "all"
      ? stores
      : stores.filter((store) => store.region === filterRegion);

  const regions = ["all", ...new Set(stores.map((s) => s.region))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 bg-amber-200 bg-opacity-50 rounded-full text-sm text-amber-900 font-medium">
              Tìm Cửa Hàng
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
            Cửa Hàng Lumiere
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Khám phá những cửa hàng Lumiere tại các thành phố lớn trên khắp Việt
            Nam. Hãy ghé thăm chúng tôi để trải nghiệm những trang sức độc đáo
            và nhận tư vấn từ các chuyên gia trang sức.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Lọc theo khu vực
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setFilterRegion(region)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filterRegion === region
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {region === "all" ? "Tất Cả" : region}
              </button>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4">
            Hiển thị {filteredStores.length} cửa hàng
          </p>
        </div>
      </section>

      {/* Stores Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                onClick={() =>
                  setSelectedStore(
                    selectedStore?.id === store.id ? null : store
                  )
                }
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-transparent hover:border-amber-400"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-amber-400 to-yellow-400 p-6">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-1">
                      {store.city}
                    </h3>
                    <p className="text-amber-50 font-medium text-sm">
                      {store.region}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Address */}
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Địa chỉ
                      </p>
                      <p className="text-gray-900 font-medium">
                        {store.address}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {store.distance}
                      </p>
                    </div>

                    {/* Phone */}
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Hotline
                      </p>
                      <a
                        href={`tel:${store.phone}`}
                        className="text-amber-600 font-bold hover:text-amber-700 transition-colors"
                      >
                        {store.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Giờ mở cửa
                      </p>
                      <p className="text-gray-900 font-medium">{store.hours}</p>
                      <p className="text-xs text-green-600 mt-1">
                        {store.daysOpen}
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <a
                        href={`mailto:${store.email}`}
                        className="text-amber-600 hover:text-amber-700 transition-colors break-all"
                      >
                        {store.email}
                      </a>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedStore?.id === store.id && (
                    <div className="mt-6 pt-6 border-t-2 border-gray-200 bg-gradient-to-br from-amber-50 to-yellow-50 -mx-6 -mb-6 px-6 py-6 rounded-b-xl">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Dịch vụ tại cửa hàng
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>Tư vấn miễn phí từ chuyên gia</li>
                        <li>Thử đo size và vừa vặn</li>
                        <li>Dịch vụ đánh bóng & làm sạch</li>
                        <li>Hộp quà đẹp mắt miễn phí</li>
                        <li>Ghi khắc tên miễn phí</li>
                        <li>Hỗ trợ thanh toán linh hoạt</li>
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="w-full px-4 py-2 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors">
                      Gọi Ngay
                    </button>
                    <button className="w-full px-4 py-2 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                      Chỉ Đường
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Tại Sao Ghé Thăm Cửa Hàng Lumiere?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tư Vấn Chuyên Gia",
                desc: "Nhân viên trang sức giàu kinh nghiệm sẽ giúp bạn chọn sản phẩm phù hợp",
              },
              {
                title: "Xem Trực Tiếp",
                desc: "Trực tiếp xem, cảm nhận, thử đo trang sức trước khi mua",
              },
              {
                title: "Dịch Vụ Đặc Biệt",
                desc: "Ghi khắc, làm hộp quà, bao bọc quà độc đáo miễn phí",
              },
              {
                title: "Bảo Dưỡng Miễn Phí",
                desc: "Dịch vụ đánh bóng, làm sạch, bảo hành tại cửa hàng",
              },
              {
                title: "Chương Trình Khuyến Mãi",
                desc: "Ưu đãi độc quyền, giảm giá đặc biệt cho khách hàng mua trực tiếp",
              },
              {
                title: "Trải Nghiệm Vip",
                desc: "Phòng kín riêng tư, nước uống, tư vấn 1-1 cho khách hàng VIP",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
