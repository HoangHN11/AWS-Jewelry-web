import React, { createContext, useEffect, useState } from "react";
import api from "../services/axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const loadUser = async () => {
        try {
            if (!localStorage.getItem("token")) return;

            const res = await api.get("/auth/userinfo");
            setUser(res.data.data);
        } catch (e) {
            setUser(null);
        }
    };

    // Chạy 1 lần khi app load
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loadUser }}>
            {children}
        </AuthContext.Provider>
    );
}
