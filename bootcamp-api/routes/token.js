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

        if (user) {
            if (Users.isPassword(user.password, req.body.password)) {
                const payload = {
                    "email": req.body.email
                };
                
                res.json({
                    "token": jwt.encode(payload.email, config.jwtSecret)
                });
            }
        }
    });
};