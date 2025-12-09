// src/pages/WarrantyPolicy.js
import React from 'react';

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Chính Sách Bảo Hành</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Giới Thiệu</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chúng tôi cam kết cung cấp sản phẩm chất lượng cao và dịch vụ bảo hành tốt nhất cho khách hàng. Chính sách bảo hành này áp dụng cho tất cả các sản phẩm được bán bởi công ty chúng tôi. Bảo hành nhằm đảm bảo rằng sản phẩm của bạn hoạt động đúng cách và sửa chữa hoặc thay thế nếu có lỗi từ nhà sản xuất.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chính sách này được thiết kế để bảo vệ quyền lợi của khách hàng, đồng thời quy định rõ ràng các điều khoản và điều kiện liên quan đến bảo hành. Chúng tôi khuyến khích khách hàng đọc kỹ chính sách này trước khi mua hàng để hiểu rõ quyền lợi và nghĩa vụ của mình.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bảo hành không bao gồm các hư hỏng do sử dụng sai cách, tai nạn, hoặc can thiệp từ bên thứ ba. Chúng tôi sẽ kiểm tra kỹ lưỡng để xác định nguyên nhân hư hỏng trước khi áp dụng bảo hành.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Thời Gian Bảo Hành</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thời gian bảo hành phụ thuộc vào loại sản phẩm:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>Điện thoại di động và máy tính bảng: 12 tháng kể từ ngày mua.</li>
              <li>Máy tính xách tay và máy tính để bàn: 24 tháng kể từ ngày mua.</li>
              <li>Phụ kiện (tai nghe, sạc, pin): 6 tháng kể từ ngày mua.</li>
              <li>Sản phẩm gia dụng (máy giặt, tủ lạnh): 36 tháng kể từ ngày mua.</li>
              <li>Sản phẩm khác: Theo thông tin trên bao bì hoặc hóa đơn.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thời gian bảo hành bắt đầu từ ngày khách hàng nhận sản phẩm. Trong trường hợp sản phẩm được thay thế, thời gian bảo hành sẽ tiếp tục từ thời gian bảo hành còn lại của sản phẩm gốc, không phải bắt đầu lại từ đầu.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nếu sản phẩm hết hạn bảo hành, chúng tôi vẫn cung cấp dịch vụ sửa chữa có phí với giá cả hợp lý và linh kiện chính hãng.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Điều Kiện Bảo Hành</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sản phẩm được bảo hành nếu đáp ứng các điều kiện sau:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>Sản phẩm còn trong thời hạn bảo hành.</li>
              <li>Hư hỏng do lỗi kỹ thuật từ nhà sản xuất.</li>
              <li>Sản phẩm không bị can thiệp, sửa chữa bởi bên thứ ba không được ủy quyền.</li>
              <li>Có hóa đơn mua hàng hoặc phiếu bảo hành hợp lệ.</li>
              <li>Sản phẩm không bị hư hỏng do thiên tai, tai nạn, hoặc sử dụng không đúng hướng dẫn.</li>
              <li>Tem bảo hành còn nguyên vẹn và không bị xé rách hoặc chỉnh sửa.</li>
              <li>Sản phẩm được sử dụng đúng mục đích và trong điều kiện bình thường.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chúng tôi có quyền từ chối bảo hành nếu phát hiện sản phẩm bị lạm dụng, chẳng hạn như sử dụng trong môi trường ẩm ướt đối với sản phẩm điện tử không chống nước, hoặc sử dụng quá tải đối với thiết bị cơ khí.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trong một số trường hợp đặc biệt, chúng tôi có thể yêu cầu khách hàng cung cấp thêm thông tin hoặc bằng chứng để xác minh điều kiện bảo hành.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Quy Trình Bảo Hành</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Để thực hiện bảo hành, khách hàng vui lòng thực hiện theo các bước sau:
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-4">
              <li>Liên hệ với bộ phận hỗ trợ khách hàng qua hotline hoặc email để báo lỗi.</li>
              <li>Mang sản phẩm đến trung tâm bảo hành gần nhất kèm theo hóa đơn và phiếu bảo hành.</li>
              <li>Nhân viên sẽ kiểm tra sản phẩm và xác nhận lỗi.</li>
              <li>Thời gian sửa chữa thường từ 7-14 ngày làm việc, tùy thuộc vào lỗi và linh kiện sẵn có.</li>
              <li>Nhận lại sản phẩm sau khi sửa chữa hoặc thay thế.</li>
              <li>Trong trường hợp không thể sửa chữa, chúng tôi sẽ thay thế bằng sản phẩm tương đương hoặc hoàn tiền theo tỷ lệ thời gian sử dụng.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chúng tôi cam kết minh bạch trong quy trình bảo hành. Khách hàng sẽ được thông báo về tình trạng sản phẩm qua email hoặc SMS. Nếu cần thiết, chúng tôi sẽ cung cấp sản phẩm tạm thời để sử dụng trong thời gian chờ sửa chữa đối với một số sản phẩm thiết yếu.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lưu ý: Chi phí vận chuyển sản phẩm đến trung tâm bảo hành do khách hàng chịu trách nhiệm, trừ khi có thỏa thuận khác.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Các Trường Hợp Không Được Bảo Hành</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bảo hành không áp dụng cho các trường hợp sau:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>Hư hỏng do sử dụng sai cách hoặc không tuân thủ hướng dẫn sử dụng.</li>
              <li>Sản phẩm bị rơi rớt, va đập, hoặc tiếp xúc với chất lỏng.</li>
              <li>Sửa chữa hoặc thay thế linh kiện bởi bên thứ ba không được ủy quyền.</li>
              <li>Sản phẩm hết hạn bảo hành.</li>
              <li>Hư hỏng do thiên tai, hỏa hoạn, hoặc sự cố điện lưới.</li>
              <li>Sản phẩm bị mất mát hoặc hư hỏng trong quá trình vận chuyển do khách hàng tự sắp xếp.</li>
              <li>Các phụ kiện đi kèm như hộp đựng, tài liệu hướng dẫn không được bảo hành riêng.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Chúng tôi khuyến nghị khách hàng mua thêm bảo hiểm sản phẩm để bảo vệ trước các rủi ro không nằm trong phạm vi bảo hành tiêu chuẩn.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Liên Hệ Hỗ Trợ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo hành, vui lòng liên hệ:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Hotline: 1800-123-456 (miễn phí)</li>
              <li>Email: support@company.com</li>
              <li>Website: www.company.com/ho-tro</li>
              <li>Địa chỉ trung tâm bảo hành: 123 Đường ABC, Quận 1, TP. HCM</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Đội ngũ hỗ trợ của chúng tôi sẵn sàng phục vụ từ 8h sáng đến 8h tối, từ thứ 2 đến thứ 7. Chúng tôi cam kết phản hồi trong vòng 24 giờ làm việc.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;