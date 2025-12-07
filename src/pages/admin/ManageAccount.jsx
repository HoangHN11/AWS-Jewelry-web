import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function ManageAccounts() {
    const [accounts, setAccounts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const fetchAccounts = async () => {
        try {
            const res = await api.get(`/account?page=${page}&size=${pageSize}`);
            setAccounts(res.data.data.items);
            setTotal(res.data.data.total);
            setTotalPages(res.data.data.totalPages);
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    };

    useEffect(() => {
        fetchAccounts();
    }, [page]);

    const deleteAccount = async (id) => {
        if (!window.confirm("Bạn chắc chắn muốn xóa tài khoản này?")) return;
        try {
            await api.delete(`/account/${id}`);
            alert("Xóa tài khoản thành công!");
            fetchAccounts();
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("Có lỗi xảy ra!");
        }
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Quản lý Tài khoản</h2>
                <button
                    onClick={() => navigate('/admin/create-account')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                >
                    + Tạo tài khoản mới
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vai trò</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Họ tên</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Địa chỉ</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số điện thoại</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {accounts.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">Chưa có tài khoản nào</td>
                            </tr>
                        ) : (
                            accounts.map((account) => (
                                <tr key={account.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{account.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.fullName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => navigate(`/admin/update-account/${account.id}`)}
                                            className="text-blue-600 hover:text-blue-800 mr-4"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            onClick={() => deleteAccount(account.id)}
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