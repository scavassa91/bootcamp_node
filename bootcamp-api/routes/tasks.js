module.exports = app => {
    app.get("/tasks", (req, res) => {
        res.json({
            "tasks": [
                { "title": "Fazer compras" },
                { "title": "Fazer report de horas" },
                { "title": "Pagar a academia" }
            ]
        });
    });
};
