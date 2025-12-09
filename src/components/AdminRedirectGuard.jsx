import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function AdminRedirectGuard({ children }) {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname;

        const role =
            user?.role || user?.roles || user?.roleName;
        const isAdmin =
            role === "Admin" ||
            (Array.isArray(role) && role.includes("Admin"));

        if (!user) return;

        if (isAdmin) {
            // if (!path.startsWith("/admin")) {
            //     navigate("/admin/not-found", { replace: true });
            // }
        } else {
            if (path.startsWith("/admin")) {
                navigate("/not-found", { replace: true });
            }
        }
    }, [user, location.pathname]);

    return children;
}
