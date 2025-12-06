export function getUserFromLocalStorage() {
    try {
        const raw = localStorage.getItem("user") || localStorage.getItem("token");
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch (e) {
            const parts = raw.split(".");
            if (parts.length === 3) {
                try {
                    return JSON.parse(atob(parts[1]));
                } catch (err) {
                    return null;
                }
            }
            return null;
        }
    } catch (err) {
        return null;
    }
}