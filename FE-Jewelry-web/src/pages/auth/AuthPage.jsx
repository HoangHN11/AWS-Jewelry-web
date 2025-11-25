import React, { useState } from "react";

export default function AuthPage() {
  const [authMode, setAuthMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log("Auth submit", authMode, form);
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-serif">
            {authMode === "login" ? "Đăng nhập" : "Đăng ký"}
          </h3>
          <div className="text-sm text-gray-500">Lumiere</div>
        </div>
        <form onSubmit={submit} className="space-y-4">
          {authMode === "signup" && (
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Tên"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          )}
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {authMode === "signup" && (
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Xác nhận mật khẩu"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
          )}
          <button className="w-full bg-gold text-black py-2 rounded font-medium">
            {authMode === "login" ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          {authMode === "login" ? (
            <p>
              Bạn chưa có tài khoản?{" "}
              <button
                className="text-gold"
                onClick={() => setAuthMode("signup")}
              >
                Đăng ký
              </button>
            </p>
          ) : (
            <p>
              Bạn đã có tài khoản?{" "}
              <button
                className="text-gold"
                onClick={() => setAuthMode("login")}
              >
                Đăng nhập
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
