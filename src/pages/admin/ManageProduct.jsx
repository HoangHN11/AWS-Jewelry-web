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

    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const res = await api.get(`/product?page=${page}&size=${pageSize}`);
            setProducts(res.data.data.items);
            setTotal(res.data.data.total);
            setTotalPages(res.data.data.totalPages);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();

        // Load Master Size
        api.get("/size").then((res) => {
            setSizesMaster(res.data.data.items || []);
        });
    }, [page]);

    const fetchSizes = async (productId) => {
        setLoadingSizes(true);
        try {
            const res = await api.get(`/product/${productId}/sizes`);
            setSizes(res.data.data || []);
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

    const deleteProduct = async (id) => {
        if (!window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) return;

        try {
            await api.delete(`/product/${id}`);
            alert("Đã xóa sản phẩm");

            fetchProducts();
        } catch (err) {
            console.error(err);
            alert("Xóa thất bại");
        }
    };

    const activeProducts = products.filter((p) => !p.deleteAt);

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

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
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Ảnh</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Tên</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 w-96">Mô tả</th>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 text-center">Actions</th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {activeProducts.map((product) => (
                            <React.Fragment key={product.id}>

                                {/* ROW PRODUCT */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-4">
                                        <img
                                            src={product.image}
                                            alt="product"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>

                                    <td className="px-4 py-4 text-sm font-medium">
                                        {product.name}
                                    </td>

                                    <td className="px-4 py-4 text-sm text-gray-600 line-clamp-2">
                                        {product.description}
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-4 py-4 text-center">
                                        <button
                                            onClick={() => navigate(`/admin/update-product/${product.id}`)}
                                            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                        >
                                            Sửa
                                        </button>

                                        <button
                                            onClick={() => deleteProduct(product.id)}
                                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                        >
                                            Xóa
                                        </button>
                                    </td>

                                    {/* BUTTON EXPAND */}
                                    <td
                                        className="px-4 py-4 text-blue-600 cursor-pointer text-right"
                                        onClick={() => toggleExpand(product.id)}
                                    >
                                        Xem size ▼
                                    </td>
                                </tr>

                                {/* ROW EXPAND SIZE */}
                                {expanded === product.id && (
                                    <tr className="bg-gray-50">
                                        <td colSpan="5" className="p-4">

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
                                                        {sizes.map((s) => {
                                                            const sizeName = s.size ?? "N/A";

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
                                                                        <button
                                                                            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                                                            onClick={async () => {
                                                                                try {
                                                                                    await api.put(
                                                                                        `/product/${product.id}/sizes/${s.id}`,
                                                                                        {
                                                                                            price: Number(s._editPrice ?? s.price),
                                                                                            quantity: Number(s._editQty ?? s.quantity),
                                                                                            isActive: true
                                                                                        }
                                                                                    );

                                                                                    alert("Cập nhật thành công!");
                                                                                    fetchSizes(product.id);
                                                                                } catch (e) {
                                                                                    console.error(e);
                                                                                    alert("Lỗi cập nhật size");
                                                                                }
                                                                            }}
                                                                        >
                                                                            Sửa
                                                                        </button>

                                                                        <button
                                                                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                                                            onClick={async () => {
                                                                                if (!window.confirm("Xóa size này?")) return;

                                                                                try {
                                                                                    await api.delete(`/product/${product.id}/sizes/${s.id}`);
                                                                                    alert("Đã xóa size!");
                                                                                    fetchSizes(product.id);
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

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50 hover:bg-gray-300 transition"
                >
                    Trước
                </button>
                <span className="text-sm text-gray-700">
                    Trang {page} / {totalPages} (Tổng: {total})
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50 hover:bg-gray-300 transition"
                >
                    Sau
                </button>
            </div>
        </div>
    );
}