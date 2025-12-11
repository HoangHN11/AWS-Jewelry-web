import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 bg-amber-200 bg-opacity-50 rounded-full text-sm text-amber-900 font-medium">
              Thương Hiệu Trang Sức Hàng Đầu
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Về Lumiere
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Lumiere là thương hiệu trang sức cao cấp, lấy cảm hứng từ vẻ đẹp
            tinh tế, sự lộng lẫy và sự hoàn hảo trong chế tác. Chúng tôi tin
            rằng mỗi trang sức là một câu chuyện, một khoảnh khắc quý báu được
            ghi lại.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                  Câu Chuyện Của Chúng Tôi
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lumiere được thành lập với một tầm nhìn đơn giản nhưng mạnh
                  mẽ: tạo những trang sức không chỉ đẹp về mặt thẩm mỹ mà còn
                  mang đến niềm vui, tự tin và sự kết nối cảm xúc cho mỗi người
                  đeo.
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong ngành trang sức, chúng tôi đã
                phục vụ hàng chục nghìn khách hàng yêu quý trên khắp cả nước.
                Mỗi sản phẩm được tạo ra với sự chăm sóc, tâm huyết và những kỹ
                năng chế tác tốt nhất.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Chúng tôi không chỉ bán trang sức - chúng tôi bán những khoảnh
                khắc quý báu, những cảm xúc đẹp, và những kỷ niệm không phai.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://cdnmedia.baotintuc.vn/Upload/XmrgEWAN1PzjhSWqVO54A/files/2019/02/0602/diamonds.jpg"
                  alt="Lumiere Jewelry"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-14">
            Giá Trị Cốt Lõi Của Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Chất Lượng Hàng Đầu
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mỗi sản phẩm được chọn lọc, kiểm tra kỹ lưỡng để đảm bảo chất
                lượng vàng, bạc, đá quý tốt nhất.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Thiết Kế Tinh Xảo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Các thiết kế độc đáo được tạo ra bởi các nhà thiết kế trang sức
                hàng đầu với phong cách hiện đại và cổ điển.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tận Tâm & Chân Thành
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dịch vụ khách hàng 24/7, tư vấn chi tiết, và sự chăm sóc sau bán
                hàng là ưu tiên hàng đầu của chúng tôi.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bền Vững & Đạo Đức
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cam kết sử dụng nguồn vàng, bạc và đá quý đạo đức, bảo vệ môi
                trường và cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-b from-amber-100 to-yellow-100 p-10 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ Mệnh</h3>
              <p className="text-gray-700 leading-relaxed">
                Tôn vinh và làm nổi bật vẻ đẹp cá nhân của mỗi người thông qua
                những trang sức tinh xảo, độc đáo và có ý nghĩa.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-b from-rose-100 to-pink-100 p-10 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tầm Nhìn
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Trở thành thương hiệu trang sức hàng đầu được tin tưởng, yêu
                thích và nâng niu bởi các khách hàng trên khắp thế giới.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-b from-purple-100 to-indigo-100 p-10 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Giá Trị</h3>
              <p className="text-gray-700 leading-relaxed">
                Chất lượng hàng đầu, dịch vụ tận tâm, tính chính trực, sáng tạo
                liên tục và trách nhiệm xã hội.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-14">
            Tại Sao Chọn Lumiere?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
                  <span className="font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sản Phẩm Chính Hãng 100%
                </h3>
                <p className="text-gray-600">
                  Tất cả trang sức đều được nhập khẩu chính hãng hoặc chế tác
                  bởi các thợ lành nghề của chúng tôi với chứng chỉ xác thực.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
                  <span className="font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Bảo Hành & Bảo Dưỡng Miễn Phí
                </h3>
                <p className="text-gray-600">
                  Bảo hành lên tới 36 tháng, dịch vụ đánh bóng, làm sạch miễn
                  phí suốt đời cho khách hàng.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
                  <span className="font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Giá Cạnh Tranh & Linh Hoạt
                </h3>
                <p className="text-gray-600">
                  Các mức giá hợp lý cho mọi ngân sách, chương trình khuyến mãi
                  hấp dẫn, hỗ trợ thanh toán linh hoạt.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
                  <span className="font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Đội Ngũ Chuyên Gia Tận Tâm
                </h3>
                <p className="text-gray-600">
                  Tư vấn miễn phí từ các chuyên gia trang sức, hỗ trợ chọn size,
                  kiểu dáng phù hợp với bạn.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
                  <span className="font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Giao Hàng Nhanh & An Toàn
                </h3>
                <p className="text-gray-600">
                  Giao hàng toàn quốc trong 1-2 ngày, bảo hiểm sản phẩm, đóng
                  gói an toàn, cập nhật đơn hàng real-time.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
                  <span className="font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Đổi Trả Dễ Dàng
                </h3>
                <p className="text-gray-600">
                  Chính sách đổi trả lên tới 30 ngày, không cần lý do, hoàn tiền
                  100% nếu không hài lòng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
