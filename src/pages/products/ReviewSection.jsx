import React, { useState } from "react";

export default function ReviewSection({ productId }) {
    const [reviews, setReviews] = useState([
        {
            id: "a1b2c3",
            productId: "1111-2222-3333",
            accountId: "9999-8888",
            rating: 5,
            content: "Sản phẩm rất đẹp và chất lượng tốt. Đóng gói kỹ và giao hàng nhanh.",
            isActive: true,
            createAt: "2024-11-10T10:00:00",
            account: {
                fullName: "Nguyễn Văn A",
            },
        },
        {
            id: "d4e5f6",
            productId: "1111-2222-3333",
            accountId: "7777-6666",
            rating: 4,
            content: "Hàng giống mô tả, nhưng màu hơi khác 1 chút.",
            isActive: true,
            createAt: "2024-11-01T09:00:00",
            account: {
                fullName: "Trần Thị B",
            },
        },
        {
            id: "x7y8z9",
            productId: "1111-2222-3333",
            accountId: "5555-4444",
            rating: 5,
            content: "Rất ưng ý với chất liệu và thiết kế. Giá hợp lý.",
            isActive: true,
            createAt: "2024-10-25T11:30:00",
            account: {
                fullName: "Lê Minh C",
            },
        },
    ]);

    const [newReview, setNewReview] = useState({
        accountId: "current-user-id",
        rating: 5,
        content: "",
    });

    const [hoverRating, setHoverRating] = useState(0); // ⭐ Hover preview

    const handleSubmitReview = (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now().toString(),
            productId,
            accountId: newReview.accountId,
            rating: newReview.rating,
            content: newReview.content,
            isActive: true,
            createAt: new Date().toISOString(),
            account: { fullName: "Bạn" },
        };

        setReviews([newItem, ...reviews]);
        setNewReview({ accountId: "current-user-id", rating: 5, content: "" });
        setHoverRating(0);
    };

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString("vi-VN");
    };

    const avgRating =
        reviews.length > 0
            ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
            : 0;

    const renderStars = (rating) => (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={s <= rating ? "text-yellow-400" : "text-gray-300"}>
                    ★
                </span>
            ))}
        </div>
    );

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Đánh giá sản phẩm</h2>

            {/* Summary */}
            <div className="flex items-center mb-8">
                <div className="text-4xl font-bold">{avgRating}</div>
                <div className="ml-4">{renderStars(Math.round(avgRating))}</div>
                <span className="text-gray-500 ml-2">({reviews.length} đánh giá)</span>
            </div>

            {/* Add review */}
            <form onSubmit={handleSubmitReview} className="mb-10 bg-gray-50 p-4 rounded">
                <label className="block mb-2 font-medium">Chọn số sao</label>

                {/* ⭐⭐⭐⭐⭐ Rating with hover preview */}
                <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const active = hoverRating
                            ? star <= hoverRating
                            : star <= newReview.rating;

                        return (
                            <span
                                key={star}
                                className={`text-3xl cursor-pointer transition 
                                    ${active ? "text-yellow-400" : "text-gray-300 hover:text-yellow-200"}`}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setNewReview({ ...newReview, rating: star })}
                            >
                                ★
                            </span>
                        );
                    })}
                </div>

                <label className="block mb-2 font-medium">Nội dung đánh giá</label>
                <textarea
                    className="w-full border rounded p-2 mb-4"
                    value={newReview.content}
                    onChange={(e) =>
                        setNewReview({ ...newReview, content: e.target.value })
                    }
                />

                <button className="bg-gold text-black font-semibold px-4 py-2 rounded">Gửi đánh giá</button>
            </form>

            {/* List */}
            {reviews.map((r) => (
                <div key={r.id} className="border-b py-4">
                    <div className="font-semibold">{r.account.fullName}</div>
                    <div className="text-xs text-gray-400">{formatDate(r.createAt)}</div>
                    <div className="my-1">{renderStars(r.rating)}</div>
                    <p className="text-gray-700">{r.content}</p>
                </div>
            ))}
        </section>
    );
}
