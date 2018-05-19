module.exports = app => {
    const Users = app.db.models.Users;

    app.route("/users")
        .post(async (req, res) => {

            try {
                const existingUser = await Users.findOne({
                    "where": {
                        email: req.body.email
                    }
                });

                if (existingUser) {
                    return res.status(409).json({ "msg": "Email already in use" });
                }

                const result = await Users.create(req.body);

                res.json(result);

            } catch (error) {
                res.status(500).json({ "msg": error.message })
            }
        })
        .delete((req, res) => {
            // TODO: Delete method
        });
};