const jwt = require("jwt-simple");

module.exports = app => {
    const Users = app.db.models.Users;
    const config = app.libs.config;

    // TODO: Validar email e senha
    app.post("/token", async (req, res) => {

        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        if (user) {
            if (Users.isPassword(user.password, req.body.password)) {
                res.json({
                    "token": jwt.encode(payload, config.jwtSecret)
                });
            } else {
                res.sendStatus(401);
            }
        }
    });
};