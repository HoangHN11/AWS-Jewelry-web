import React, { useEffect, useState } from "react";
import api from "../../services/axios";

export default function CreateProduct() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        image: null,
        isNew: false,
        isActive: true,
    });

    const [errors, setErrors] = useState({});

    const [imagePreview, setImagePreview] = useState(null);

    const [allSizes, setAllSizes] = useState([]);

    const [productSizes, setProductSizes] = useState([]);

    const [selectedSizeId, setSelectedSizeId] = useState("");

    useEffect(() => {
        api.get("/size").then((res) => {
            setAllSizes(res.data.data.items);
        });
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleCheck = (e) => {
        setForm({ ...form, [e.target.name]: e.target.checked });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setForm({
            ...form,
            image: file,
        });

        setImagePreview(URL.createObjectURL(file));
        setErrors({ ...errors, image: "" });
    };

    const updateProductSize = (index, field, value) => {
        const updated = [...productSizes];
        updated[index][field] = value;
        setProductSizes(updated);
    };

    const addProductSize = () => {
        if (!selectedSizeId) {
            alert("Vui lòng chọn kích thước");
            return;
        }
        setProductSizes([
            ...productSizes,
            { sizeId: selectedSizeId, price: "", quantity: "" },
        ]);
        setSelectedSizeId("");
    };

    const removeProductSize = (index) => {
        setProductSizes(productSizes.filter((_, i) => i !== index));
    };

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Tên sản phẩm là bắt buộc";
        if (!form.description.trim()) newErrors.description = "Mô tả sản phẩm là bắt buộc";
        if (!form.image) newErrors.image = "Vui lòng chọn hình ảnh";

        productSizes.forEach((s, idx) => {
            if (!s.price) newErrors[`price_${idx}`] = "Giá bắt buộc";
            if (!s.quantity) newErrors[`quantity_${idx}`] = "Số lượng bắt buộc";
        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const createProduct = async () => {
        if (!validate()) return;

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("image", form.image);
        formData.append(
            "sizes",
            JSON.stringify(
                productSizes.map((s) => ({
                    sizeId: s.sizeId,
                    price: Number(s.price),
                    quantity: Number(s.quantity),
                }))
            )
        );

        try {
            await api.post("/product", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Tạo sản phẩm thành công!");
        } catch (err) {
            console.error("Error creating product:", err);
            alert("Có lỗi xảy ra!");
        }
    };

    const availableSizes = allSizes.filter(
        (s) => !productSizes.some((ps) => ps.sizeId === s.id)
    );

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tạo sản phẩm mới</h2>

            <div className="grid grid-cols-2 gap-6">
                {/* NAME */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Tên sản phẩm <span className="text-red-600">*</span>
                    </label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="VD: Diamond Ring"
                    />
                    <div className="min-h-[20px]">
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                </div>

                {/* IMAGE UPLOAD */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Ảnh sản phẩm <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <div className="min-h-[20px]">
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                    </div>

                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="preview"
                            className="h-24 mt-2 rounded-md border border-gray-300"
                        />
                    )}
                </div>

                {/* DESCRIPTION */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Mô tả <span className="text-red-600">*</span>
                    </label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 h-24 resize-none focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Mô tả sản phẩm..."
                    />
                    <div className="min-h-[20px]">
                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* TOGGLES */}
            <div className="flex gap-6 mt-4">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isNew"
                        checked={form.isNew}
                        onChange={handleCheck}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">Sản phẩm mới</span>
                </label>
            </div>

            {/* PRODUCT SIZES */}
            <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-gray-800">Kích thước & Giá <span className="text-red-600">*</span></h3>

                {/* Add new size */}
                <div className="flex items-end gap-4 mb-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Chọn kích thước</label>
                        <select
                            value={selectedSizeId}
                            onChange={(e) => setSelectedSizeId(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Chọn kích thước</option>
                            {availableSizes.map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={addProductSize}
                        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition text-sm font-medium"
                    >
                        + Thêm
                    </button>
                </div>

                {/* List of product sizes */}
                {productSizes.map((ps, index) => {
                    const sizeLabel = allSizes.find((s) => s.id === ps.sizeId)?.label || "Unknown";
                    return (
                        <div key={index} className="border border-gray-200 p-4 rounded-md mb-4 bg-gray-50">
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Kích thước</label>
                                    <p className="mt-1 text-sm text-gray-900">{sizeLabel}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Giá <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Giá (₫)"
                                        value={ps.price}
                                        onChange={(e) => updateProductSize(index, "price", e.target.value)}
                                    />
                                    <div className="min-h-[20px]">
                                        {errors[`price_${index}`] && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors[`price_${index}`]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Số lượng <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Số lượng"
                                        value={ps.quantity}
                                        onChange={(e) => updateProductSize(index, "quantity", e.target.value)}
                                    />
                                    <div className="min-h-[20px]">
                                        {errors[`quantity_${index}`] && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors[`quantity_${index}`]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => removeProductSize(index)}
                                className="mt-2 text-sm text-red-600 hover:text-red-800"
                            >
                                Xóa
                            </button>
                        </div>
                    );
                })}

                {productSizes.length === 0 && (
                    <p className="text-sm text-gray-500">Chưa có kích thước nào được thêm.</p>
                )}
            </div>

            {/* CREATE BUTTON */}
            <button
                onClick={createProduct}
                className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
                Tạo sản phẩm
            </button>
        </div>
    );
}