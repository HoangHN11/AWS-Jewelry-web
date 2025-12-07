import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://autobrew.funnydev.id.vn/api/v1",
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});

// ----- REQUEST INTERCEPTOR -----
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ----- RESPONSE INTERCEPTOR -----
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const message =
            error.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại.";

        console.error("API ERROR:", message);

        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;
