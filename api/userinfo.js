export default async function handler(req, res) {
    try {
        const backend = await fetch("http://160.191.244.210/api/v1/auth/userinfo", {
            headers: {
                Authorization: req.headers.authorization
            }
        });

        const data = await backend.json();
        res.status(backend.status).json(data);
    } catch (e) {
        res.status(500).json({ message: "Proxy error", error: e.toString() });
    }
}
