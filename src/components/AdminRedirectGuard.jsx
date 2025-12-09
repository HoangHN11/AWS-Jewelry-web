import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils";
import { AuthContext } from "../contexts/AuthContext";



export default function AdminRedirectGuard() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { user } = useContext(AuthContext);
        const path = location.pathname;

        const role = user?.role || user?.roles || user?.roleName;
        const isAdmin = role === "Admin" || (Array.isArray(role) && role.includes("Admin"));

        if (isAdmin) {
            if (!path.startsWith("/admin")) {
                navigate("/admin/not-found", { replace: true });
            }
        } else {
            if (path.startsWith("/admin")) {
                navigate("/not-found", { replace: true });
            }
        }
    }, [location.pathname, navigate]);

    return null;
}
