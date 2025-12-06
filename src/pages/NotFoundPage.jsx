import React from "react";
import { useLocation } from "react-router-dom";

export default function NotFoundPage() {
    const location = useLocation();
    const isAdminPath = location.pathname.startsWith("/admin");

    return (
        <div className="max-w-3xl mx-auto text-center py-24">
            <h1 className="text-4xl font-bold mb-4">Trang không tìm thấy</h1>
            <p className="text-lg text-gray-600 mb-8">
                {isAdminPath
                    ? "Đường dẫn quản trị không tồn tại hoặc bạn không có quyền truy cập."
                    : "Trang bạn yêu cầu không tồn tại hoặc bạn không có quyền truy cập."}
            </p>
            <div>
                <a
                    href={isAdminPath ? "/admin" : "/"}
                    className="inline-block px-4 py-2 bg-gray-900 text-white rounded"
                >
                    Quay về {isAdminPath ? "trang Admin" : "trang chủ"}
                </a>
            </div>
        </div>
    );
}
