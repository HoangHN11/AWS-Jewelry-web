import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpsertProduct() {
    const { id } = useParams();
    const [form, setForm] = useState({
        name: "",
        description: "",
        image: null,
        isActive: true,
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [imagePreview, setImagePreview] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const res = await api.get(`/product/${id}`);
                    const product = res.data.data;
                    setForm({
                        name: product.name,
                        description: product.description,
                        image: null,
                        isActive: true,
                    });
                    setImagePreview(product.image);
                } catch (err) {
                    console.error("Error fetching product:", err);
                    alert("Có lỗi xảy ra khi tải sản phẩm!");
                }
            };
            fetchProduct();
        }
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
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

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Tên sản phẩm là bắt buộc";
        if (!form.description.trim()) newErrors.description = "Mô tả sản phẩm là bắt buộc";
        if (!id && !form.image) newErrors.image = "Vui lòng chọn hình ảnh";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const upsertProduct = async () => {
        if (!validate()) return;

        if (loading) return;

        setLoading(true);

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("description", form.description);
        if (form.image instanceof File) {
            formData.append("image", form.image);
        }
        formData.append("isActive", form.isActive);

        try {
            if (id) {
                await api.put(`/product/${id}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Cập nhật sản phẩm thành công!");
                navigate('/admin/manage-products')
            } else {
                await api.post("/product", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Tạo sản phẩm thành công!");
                navigate('/admin/manage-products')
            }
        } catch (err) {
            console.error("Error upserting product:", err);
            alert("Có lỗi xảy ra!");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">{id ? "Cập nhật sản phẩm" : "Tạo sản phẩm mới"}</h2>

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
                        Ảnh sản phẩm {id ? "" : <span className="text-red-600">*</span>}
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


            {/* UPSERT BUTTON */}
            <button
                disabled={loading}
                onClick={upsertProduct}
                className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
                {loading
                    ? "Đang xử lý..."
                    : id ? "Cập nhật sản phẩm" : "Tạo sản phẩm"}
            </button>
        </div>
    );
}