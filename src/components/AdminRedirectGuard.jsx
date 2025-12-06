import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils";



export default function AdminRedirectGuard() {
    // const location = useLocation();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const user = getUserFromLocalStorage();
    //     const path = location.pathname;

    //     const role = user?.role || user?.roles || user?.roleName;
    //     const isAdmin = role === "admin" || (Array.isArray(role) && role.includes("admin"));

    //     if (isAdmin) {
    //         if (!path.startsWith("/admin")) {
    //             navigate("/admin/not-found", { replace: true });
    //         }
    //     } else {
    //         if (path.startsWith("/admin")) {
    //             navigate("/not-found", { replace: true });
    //         }
    //     }
    // }, [location.pathname, navigate]);

    return null;
}
