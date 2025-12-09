import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpsertAccount() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        fullName: "",
        address: "",
        phone: "",
        role: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (id) {
            const fetchAccount = async () => {
                try {
                    const res = await api.get(`/account/${id}`);
                    setForm({
                        email: res.data.data.email,
                        fullName: res.data.data.fullName,
                        address: res.data.data.address,
                        phone: res.data.data.phone,
                        role: res.data.data.role,
                        password: ""
                    });
                } catch (error) {
                    console.error("Error fetching account:", error);
                }
            };
            fetchAccount();
        }
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.email.trim()) newErrors.email = "Email là bắt buộc";
        if (!form.fullName.trim()) newErrors.fullName = "Họ tên là bắt buộc";

        if (!id) {
            // CREATE MODE → cần password
            if (!form.password.trim()) newErrors.password = "Mật khẩu là bắt buộc";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const upsertAccount = async () => {
        if (!validate()) return;

        try {
            if (id) {
                // UPDATE MODE: không gửi password
                const updateData = {
                    email: form.email,
                    fullName: form.fullName,
                    address: form.address,
                    phone: form.phone,
                    role: form.role
                };

                await api.put(`/account/${id}`, updateData);
                alert("Cập nhật tài khoản thành công!");
            } else {
                // CREATE MODE: gửi password
                const createData = {
                    email: form.email,
                    password: form.password,
                    fullName: form.fullName,
                    address: form.address,
                    phone: form.phone
                };

                await api.post('/account', createData);
                alert("Tạo tài khoản thành công!");
            }

            navigate('/admin/manage-accounts');
        } catch (error) {
            console.error("Error upserting account:", error);
            alert("Có lỗi xảy ra!");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                {id ? "Cập nhật tài khoản" : "Tạo tài khoản mới"}
            </h2>

            <div className="grid grid-cols-2 gap-6">
                {/* EMAIL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email <span className="text-red-600">*</span>
                    </label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border p-2 rounded-md"
                        placeholder="example@email.com"
                    />
                    <div className="min-h-[20px]">
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                </div>

                {/* ONLY SHOW ROLE WHEN UPDATE */}
                {id && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Vai trò</label>
                        <input
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="mt-1 block w-full border p-2 rounded-md"
                            placeholder="admin / user"
                        />
                    </div>
                )}

                {/* ONLY SHOW PASSWORD WHEN CREATE */}
                {!id && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mật khẩu <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-1 block w-full border p-2 rounded-md"
                            placeholder="********"
                        />
                        <div className="min-h-[20px]">
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                    </div>
                )}

                {/* FULLNAME */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Họ tên <span className="text-red-600">*</span>
                    </label>
                    <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className="mt-1 block w-full border p-2 rounded-md"
                    />
                    <div className="min-h-[20px]">
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName}</p>
                        )}
                    </div>
                </div>


                {/* ADDRESS */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                    <textarea
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="mt-1 block w-full border p-2 rounded-md h-24 resize-none"
                    />
                </div>
            </div>

            {/* BUTTON */}
            <button
                onClick={upsertAccount}
                className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
            >
                {id ? "Cập nhật" : "Tạo"}
            </button>
        </div>
    );
}
