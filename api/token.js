export default async function handler(req, res) {
    try {
        const backend = await fetch("http://160.191.244.210/api/v1/auth/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body),
        });

        const data = await backend.json();
        res.status(backend.status).json(data);
    } catch (err) {
        res.status(500).json({ message: "Proxy error", error: err.toString() });
    }
}
