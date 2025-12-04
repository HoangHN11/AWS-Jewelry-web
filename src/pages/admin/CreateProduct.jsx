import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateProduct() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
        isNew: false,
        isActive: true,
    });

    const [errors, setErrors] = useState({});

    const [sizes, setSizes] = useState([
        { id: uuidv4(), sizeId: uuidv4(), price: "", quantity: "", isActive: true },
    ]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleCheck = (e) => {
        setForm({ ...form, [e.target.name]: e.target.checked });
    };

    const updateSize = (index, field, value) => {
        const updated = [...sizes];
        updated[index][field] = value;
        setSizes(updated);
    };

    const addSize = () => {
        setSizes([
            ...sizes,
            { id: uuidv4(), sizeId: uuidv4(), price: "", quantity: "", isActive: true },
        ]);
    };

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Tên sản phẩm là bắt buộc";
        if (!form.description.trim())
            newErrors.description = "Mô tả sản phẩm là bắt buộc";
        if (!form.image.trim()) newErrors.image = "Vui lòng nhập URL hình ảnh";

        sizes.forEach((s, idx) => {
            if (!s.price) newErrors[`price_${idx}`] = "Giá bắt buộc";
            if (!s.quantity) newErrors[`quantity_${idx}`] = "Số lượng bắt buộc";
        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const createProduct = () => {
        if (!validate()) return;

        const newProduct = {
            id: uuidv4(),
            ...form,
            createAt: new Date().toISOString(),
            updateAt: null,
            deleteAt: null,
            productSizes: sizes.map((s) => ({
                ...s,
                price: Number(s.price),
                quantity: Number(s.quantity),
            })),
            reviews: [],
        };

        console.log("PRODUCT CREATED:", newProduct);
        alert("Tạo sản phẩm thành công! Xem console.");
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-6">Tạo sản phẩm mới</h2>

            {/* --- FORM 2 COLUMN --- */}
            <div className="grid grid-cols-2 gap-6">
                {/* NAME */}
                <div>
                    <label className="block font-medium">Tên sản phẩm *</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="VD: Diamond Ring"
                    />
                    <div className="min-h-[20px]">
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                    </div>
                </div>

                {/* IMAGE */}
                <div>
                    <label className="block font-medium">Ảnh sản phẩm (URL) *</label>
                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="https://image.jpg"
                    />
                    <div className="min-h-[20px]">
                        {errors.image && (
                            <p className="text-red-500 text-sm">{errors.image}</p>
                        )}
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="col-span-2">
                    <label className="block font-medium">Mô tả *</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border p-2 h-24 rounded mt-1 resize-none"
                        placeholder="Mô tả sản phẩm..."
                    />
                    <div className="min-h-[20px]">
                        {errors.description && (
                            <p className="text-red-500 text-sm">{errors.description}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* TOGGLES */}
            <div className="flex gap-6 mt-3">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isNew"
                        checked={form.isNew}
                        onChange={handleCheck}
                    />
                    Sản phẩm mới
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={form.isActive}
                        onChange={handleCheck}
                    />
                    Đang hoạt động
                </label>
            </div>

            {/* SIZES */}
            <div className="mt-8">
                <h3 className="font-medium mb-3">Kích thước & Giá *</h3>

                {sizes.map((s, index) => (
                    <div key={s.id} className="border p-4 rounded mb-4 bg-gray-50">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Price */}
                            <div>
                                <label className="font-medium block">Giá *</label>
                                <input
                                    type="number"
                                    className="w-full border p-2 rounded mt-1"
                                    placeholder="Giá (₫)"
                                    value={s.price}
                                    onChange={(e) =>
                                        updateSize(index, "price", e.target.value)
                                    }
                                />
                                <div className="min-h-[20px]">
                                    {errors[`price_${index}`] && (
                                        <p className="text-red-500 text-sm">
                                            {errors[`price_${index}`]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="font-medium block">Số lượng *</label>
                                <input
                                    type="number"
                                    className="w-full border p-2 rounded mt-1"
                                    placeholder="Số lượng"
                                    value={s.quantity}
                                    onChange={(e) =>
                                        updateSize(index, "quantity", e.target.value)
                                    }
                                />
                                <div className="min-h-[20px]">
                                    {errors[`quantity_${index}`] && (
                                        <p className="text-red-500 text-sm">
                                            {errors[`quantity_${index}`]}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={addSize}
                    className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                >
                    + Thêm size
                </button>
            </div>

            {/* CREATE BUTTON */}
            <button
                onClick={createProduct}
                className="mt-6 w-full py-2 bg-gold text-white rounded font-medium"
            >
                Tạo sản phẩm
            </button>
        </div>
    );
}
