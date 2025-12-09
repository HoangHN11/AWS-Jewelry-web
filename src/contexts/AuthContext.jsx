import React, { createContext, useEffect, useState } from "react";
import api from "../services/axios";
import { getUserFromLocalStorage } from "../utils";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return getUserFromLocalStorage();
    });

    const loadUser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const res = await api.get("/auth/userinfo");
            const userInfo = res.data.data;

            localStorage.setItem("user", JSON.stringify(userInfo));

            setUser(userInfo);
        } catch (e) {
            console.error("Load user failed:", e);
            localStorage.removeItem("user");
            setUser(null);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loadUser }}>
            {children}
        </AuthContext.Provider>
    );
}
