import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../../services/axios";

export default function ManageSizes() {
    const [sizes, setSizes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({ id: null, label: "", isActive: true });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const getSize = async () => {
            const size = await api.get("/size");
            console.log(size)
            setSizes(size.data.data.items)
        }
        getSize();
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleCheck = (e) => {
        setForm({ ...form, [e.target.name]: e.target.checked });
    };

    const validate = () => {
        let newErrors = {};
        if (!form.label.trim()) newErrors.label = "Tên kích thước là bắt buộc";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const upsertSize = async () => {
        if (!validate()) return;
        const now = new Date().toISOString();
        if (form.id) {
            // Update
            const updatedSizes = sizes.map((s) =>
                s.id === form.id ? { ...s, ...form, updateAt: now } : s
            );
            setSizes(updatedSizes);
            console.log("SIZE UPDATED:", form);
            alert("Cập nhật kích thước thành công! Xem console.");
        } else {
            // Create
            const newSize = {
                id: uuidv4(),
                ...form,
                isActive: true,
                createAt: now,
                updateAt: null,
                deleteAt: null,
            };
            const response = await api.post('/size', newSize);
            console.log(response);
            setSizes([newSize, ...sizes]);
            console.log("SIZE CREATED:", newSize);
            alert("Tạo kích thước thành công! Xem console.");
        }
        closeModal();
    };

    const deleteSize = (id) => {
        if (!window.confirm("Bạn chắc chắn muốn xóa kích thước này?")) return;
        const now = new Date().toISOString();
        const updatedSizes = sizes.map((s) =>
            s.id === id ? { ...s, deleteAt: now, isActive: false } : s
        );
        setSizes(updatedSizes);
        console.log("SIZE DELETED (soft):", id);
        alert("Xóa kích thước thành công (soft delete)! Xem console.");
    };

    const openModalForCreate = () => {
        setForm({ id: null, label: "", isActive: true });
        setErrors({});
        setIsModalOpen(true);
    };

    const openModalForEdit = (size) => {
        setForm({ id: size.id, label: size.label, isActive: size.isActive });
        setErrors({});
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const activeSizes = sizes.filter((s) => !s.deleteAt);

    return (
        <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Quản lý Kích thước</h2>
                <button
                    onClick={openModalForCreate}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                >
                    + Tạo kích thước mới
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên kích thước</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {activeSizes.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">Chưa có kích thước nào</td>
                            </tr>
                        ) : (
                            activeSizes.map((size) => (
                                <tr key={size.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{size.label}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {size.isActive ? (
                                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Hoạt động</span>
                                        ) : (
                                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Không hoạt động</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => openModalForEdit(size)}
                                            className="text-blue-600 hover:text-blue-800 mr-4"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            onClick={() => deleteSize(size.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal for Upsert */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">{form.id ? "Cập nhật kích thước" : "Tạo kích thước mới"}</h3>
                        <div className="space-y-4">
                            {/* Label */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tên kích thước <span className="text-red-600">*</span></label>
                                <input
                                    name="label"
                                    value={form.label}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="VD: S, M, L"
                                />
                                <div className="min-h-[20px]">
                                    {errors.label && <p className="text-red-500 text-sm mt-1">{errors.label}</p>}
                                </div>
                            </div>
                            {/* IsActive */}
                            {form.id && (
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="isActive"
                                        checked={form.isActive}
                                        onChange={handleCheck}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Hoạt động</label>
                                </div>
                            )}
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={upsertSize}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                            >
                                {form.id ? "Cập nhật" : "Tạo"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}