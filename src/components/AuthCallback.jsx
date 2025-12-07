import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/axios";

export default function AuthCallback() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get("code");

        if (code) {
            const exchangeCode = async () => {
                try {
                    const clientId = '2du254ol9r1fl044tsuchsi20m';
                    const response = await api.post("/auth/token", {
                        client_id: clientId,
                        code,
                    });

                    const { id_token, access_token, refresh_token } = response.data.data;

                    localStorage.setItem("token", access_token);
                    // Optionally store id_token and refresh_token if needed

                    // Fetch user info
                    const userResponse = await api.get("/auth/userinfo");
                    console.log("User info:", userResponse.data);
                    // Store user info in localStorage or context if needed

                    // Redirect to home and remove query params
                    navigate("/", { replace: true });
                } catch (error) {
                    console.error("Error exchanging code:", error);
                    alert("Đăng nhập thất bại!");
                    navigate("/", { replace: true });
                }
            };

            exchangeCode();
        } else {
            // If no code, just redirect to home
            navigate("/", { replace: true });
        }
    }, [location, navigate]);

    return <div>Đang xử lý đăng nhập...</div>;
}