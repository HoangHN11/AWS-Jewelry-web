import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    console.log("Contact", form);
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 bg-amber-200 bg-opacity-50 rounded-full text-sm text-amber-900 font-medium">
              Liên Lạc Với Chúng Tôi
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Hỗ Trợ Khách Hàng
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn. Hãy liên hệ với
            chúng tôi qua bất kỳ kênh nào dưới đây hoặc gửi biểu mẫu trực tuyến.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-yellow-400 p-8 text-center text-white">
              <h2 className="text-3xl font-serif font-bold mb-2">
                Gửi Tin Nhắn Cho Chúng Tôi
              </h2>
              <p className="text-amber-50">
                Điền form dưới đây và chúng tôi sẽ liên hệ lại với bạn sớm nhất
              </p>
            </div>

            <form onSubmit={submit} className="p-8 space-y-6">
              {/* Success Message */}
              {submitted && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                  <p className="font-bold">Gửi thành công!</p>
                  <p className="text-sm">
                    Chúng tôi đã nhận được tin nhắn của bạn. Hãy chờ phản hồi từ
                    chúng tôi.
                  </p>
                </div>
              )}

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Họ Tên
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Nhập họ tên của bạn"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Nhập email của bạn"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Số Điện Thoại
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Nhập số điện thoại"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chủ Đề
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Chọn chủ đề liên hệ"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nội Dung Tin Nhắn
                </label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  rows="6"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  type="submit"
                >
                  Gửi Tin Nhắn
                </button>
                <button
                  className="flex-1 px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors"
                  type="reset"
                  onClick={() =>
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    })
                  }
                >
                  Xóa
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Trang sức của bạn có bảo hành bao lâu?",
                a: "Tất cả sản phẩm trang sức có bảo hành từ 12-36 tháng tùy loại sản phẩm. Chi tiết xem chính sách bảo hành.",
              },
              {
                q: "Giao hàng mất bao lâu?",
                a: "Giao hàng toàn quốc trong 1-2 ngày làm việc. Ngoài TP. HCM có thể mất thêm 1-2 ngày.",
              },
              {
                q: "Có thể đổi trả sản phẩm được không?",
                a: "Có, bạn có 30 ngày để đổi trả sản phẩm nếu không hài lòng. Xem chính sách đổi trả chi tiết.",
              },
              {
                q: "Làm thế nào để kiểm tra chứng chỉ xác thực?",
                a: "Mỗi sản phẩm đi kèm chứng chỉ xác thực. Bạn có thể kiểm tra qua website hoặc gọi hotline.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
            Giờ Làm Việc
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { day: "Thứ Hai", time: "9:00 - 21:00" },
              { day: "Thứ Ba", time: "9:00 - 21:00" },
              { day: "Thứ Tư", time: "9:00 - 21:00" },
              { day: "Thứ Năm", time: "9:00 - 21:00" },
              { day: "Thứ Sáu", time: "9:00 - 21:00" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <p className="font-bold text-gray-900 mb-2">{item.day}</p>
                <p className="text-amber-600 font-semibold">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Gọi Cho Chúng Tôi Ngay
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Đội hỗ trợ khách hàng của chúng tôi sẵn sàng giúp bạn 24/7
          </p>
          <a
            href="tel:1800789012"
            className="inline-block px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Gọi 0985770016
          </a>
        </div>
      </section>
    </div>
  );
}
