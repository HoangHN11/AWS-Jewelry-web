import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function ManageProductsPage() {
    const [products, setProducts] = useState([]);
    const [expanded, setExpanded] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [loadingSizes, setLoadingSizes] = useState(false);

    const [sizesMaster, setSizesMaster] = useState([]);

    const [newSize, setNewSize] = useState({
        sizeId: "",
        price: "",
        quantity: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        api.get("/product").then((res) => {
            setProducts(res.data.data.items);
        });

        // Fetch master size để tạo size
        api.get("/size").then((res) => {
            setSizesMaster(res.data.data.items || []);
        });
    }, []);

    const fetchSizes = async (productId) => {
        setLoadingSizes(true);
        try {
            const res = await api.get(`/product/${productId}/sizes`);
            setSizes(res.data.data || []);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
        setLoadingSizes(false);
    };

    const toggleExpand = async (productId) => {
        if (expanded === productId) {
            setExpanded(null);
        } else {
            setExpanded(productId);
            fetchSizes(productId);
        }
    };

    const createProductSize = async (productId) => {
        if (!newSize.sizeId || !newSize.price || !newSize.quantity) {
            alert("Vui lòng nhập đầy đủ thông tin size!");
            return;
        }

        try {
            await api.post(`/product/${productId}/sizes`, {
                sizeId: newSize.sizeId,
                price: Number(newSize.price),
                quantity: Number(newSize.quantity),
            });

            alert("Tạo size thành công!");
            setNewSize({ sizeId: "", price: "", quantity: "" });

            fetchSizes(productId);
        } catch (error) {
            console.error(error);
            alert("Lỗi tạo size!");
        }
    };

    const activeProducts = products.filter((p) => !p.deleteAt);

    return (
        <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Quản lý Sản phẩm</h2>
                <button
                    onClick={() => navigate("/admin/create-product")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    + Tạo sản phẩm mới
                </button>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                Tên sản phẩm
                            </th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {activeProducts.map((product) => (
                            <React.Fragment key={product.id}>
                                <tr
                                    className="hover:bg-gray-50 cursor-pointer"
                                    onClick={() => toggleExpand(product.id)}
                                >
                                    <td className="px-6 py-4 text-sm font-medium">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm text-blue-600">
                                        Xem size ▼
                                    </td>
                                </tr>

                                {expanded === product.id && (
                                    <tr className="bg-gray-50">
                                        <td colSpan="2" className="p-4">
                                            <h3 className="font-semibold mb-3">Danh sách Size</h3>

                                            {loadingSizes ? (
                                                <p>Đang tải...</p>
                                            ) : sizes.length === 0 ? (
                                                <p>Chưa có size</p>
                                            ) : (
                                                <table className="min-w-full border mb-4">
                                                    <thead>
                                                        <tr className="bg-gray-200">
                                                            <th className="px-4 py-2">Size</th>
                                                            <th className="px-4 py-2">Giá</th>
                                                            <th className="px-4 py-2">Số lượng</th>
                                                            <th className="px-4 py-2 text-center">Hành động</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {sizes
                                                            .map((s) => {
                                                                const sizeName =
                                                                    sizesMaster.filter((s) => s.isActive).find((x) => x.id === s.id)?.label ||
                                                                    s.label;

                                                                return (
                                                                    <tr key={s.id}>
                                                                        <td className="border px-4 py-2">{sizeName}</td>

                                                                        <td className="border px-4 py-2">
                                                                            <input
                                                                                type="number"
                                                                                defaultValue={s.price}
                                                                                className="border p-1 rounded w-24"
                                                                                onChange={(e) => {
                                                                                    s._editPrice = e.target.value;
                                                                                }}
                                                                            />
                                                                        </td>

                                                                        <td className="border px-4 py-2">
                                                                            <input
                                                                                type="number"
                                                                                defaultValue={s.quantity}
                                                                                className="border p-1 rounded w-24"
                                                                                onChange={(e) => {
                                                                                    s._editQty = e.target.value;
                                                                                }}
                                                                            />
                                                                        </td>

                                                                        <td className="border px-4 py-2 flex gap-2 justify-center">

                                                                            {/* BUTTON UPDATE */}
                                                                            <button
                                                                                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                                                                onClick={async () => {
                                                                                    try {
                                                                                        await api.put(`/product/${product.id}/sizes/${s.id}`, {
                                                                                            price: Number(s._editPrice ?? s.price),
                                                                                            quantity: Number(s._editQty ?? s.quantity)
                                                                                        });

                                                                                        alert("Cập nhật thành công!");
                                                                                        fetchSizes(s.productId);
                                                                                    } catch (e) {
                                                                                        console.error(e);
                                                                                        alert("Lỗi cập nhật size");
                                                                                    }
                                                                                }}
                                                                            >
                                                                                Sửa
                                                                            </button>

                                                                            {/* BUTTON DELETE */}
                                                                            <button
                                                                                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                                                                onClick={async () => {
                                                                                    if (!window.confirm("Xóa size này?")) return;

                                                                                    try {
                                                                                        await api.delete(`/product/${product.id}/sizes/${s.id}`);
                                                                                        alert("Đã xóa size!");
                                                                                        fetchSizes(s.productId);
                                                                                    } catch (e) {
                                                                                        console.error(e);
                                                                                        alert("Lỗi xóa size");
                                                                                    }
                                                                                }}
                                                                            >
                                                                                Xóa
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                    </tbody>
                                                </table>

                                            )}

                                            {/* FORM TẠO SIZE */}
                                            <div className="border p-4 bg-white rounded shadow">
                                                <h4 className="font-medium mb-3">+ Thêm Size mới</h4>

                                                <div className="grid grid-cols-3 gap-4">
                                                    {/* SELECT SIZE */}
                                                    <select
                                                        className="border p-2 rounded"
                                                        value={newSize.sizeId}
                                                        onChange={(e) =>
                                                            setNewSize({
                                                                ...newSize,
                                                                sizeId: e.target.value,
                                                            })
                                                        }
                                                    >
                                                        <option value="">-- Chọn size --</option>
                                                        {sizesMaster.map((s) => (
                                                            <option key={s.id} value={s.id}>
                                                                {s.label}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <input
                                                        className="border p-2 rounded"
                                                        type="number"
                                                        placeholder="Giá"
                                                        value={newSize.price}
                                                        onChange={(e) =>
                                                            setNewSize({
                                                                ...newSize,
                                                                price: e.target.value,
                                                            })
                                                        }
                                                    />

                                                    <input
                                                        className="border p-2 rounded"
                                                        type="number"
                                                        placeholder="Số lượng"
                                                        value={newSize.quantity}
                                                        onChange={(e) =>
                                                            setNewSize({
                                                                ...newSize,
                                                                quantity: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>

                                                <button
                                                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                                    onClick={() => createProductSize(product.id)}
                                                >
                                                    + Thêm Size
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
