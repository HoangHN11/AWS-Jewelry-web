import React, { useState } from "react";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        name: "Nguyễn Văn A",
        email: "example@gmail.com",
        newEmail: "",
        password: "",
        newPassword: "",
        notifications: true,
    });

    function handleChange(key, value) {
        setSettings(prev => ({ ...prev, [key]: value }));
    }

    function handleSave() {
        console.log("Dữ liệu đã lưu:", settings);
        alert("Lưu cài đặt thành công!");
    }

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6 mt-10 space-y-6">
            <h2 className="text-xl font-semibold">Cài đặt tài khoản</h2>

            {/* PERSONAL INFO */}
            <div className="space-y-3">
                <h3 className="font-medium">Thông tin cá nhân</h3>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">Họ tên</label>
                    <input
                        type="text"
                        className="border rounded px-3 py-2"
                        value={settings.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>
            </div>

            {/* EMAIL */}
            <div className="space-y-3">
                <h3 className="font-medium">Email</h3>

                <div>
                    <label className="text-sm text-gray-600">Email hiện tại</label>
                    <input
                        type="text"
                        className="border rounded px-3 py-2 w-full bg-gray-100"
                        value={settings.email}
                        disabled
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Email mới</label>
                    <input
                        type="text"
                        className="border rounded px-3 py-2 w-full"
                        value={settings.newEmail}
                        onChange={(e) => handleChange("newEmail", e.target.value)}
                    />
                </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-3">
                <h3 className="font-medium">Đổi mật khẩu</h3>

                <div>
                    <label className="text-sm text-gray-600">Mật khẩu hiện tại</label>
                    <input
                        type="password"
                        className="border rounded px-3 py-2 w-full"
                        value={settings.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Mật khẩu mới</label>
                    <input
                        type="password"
                        className="border rounded px-3 py-2 w-full"
                        value={settings.newPassword}
                        onChange={(e) => handleChange("newPassword", e.target.value)}
                    />
                </div>
            </div>

            {/* NOTIFICATIONS */}
            <div className="flex items-center justify-between">
                <span className="font-medium">Thông báo</span>

                <label className="flex items-center cursor-pointer">
                    <span className="mr-2 text-gray-600">Bật</span>
                    <input
                        type="checkbox"
                        checked={settings.notifications}
                        onChange={(e) => handleChange("notifications", e.target.checked)}
                        className="w-5 h-5"
                    />
                </label>
            </div>

            <button
                className="w-full bg-gold text-white py-2 rounded hover:opacity-90"
                onClick={handleSave}
            >
                Lưu thay đổi
            </button>
        </div>
    );
}
