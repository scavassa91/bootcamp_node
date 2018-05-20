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

                console.log(req.body);

                let result = await Users.create(req.body);

                result = await Users.findById(result.id, {
                    attributes: ["id", "name", "email"]
                });

                res.json(result);

            } catch (error) {
                res.status(500).json({ "msg": error.message })
            }
        })
        .delete((req, res) => {
            // TODO: Delete method
        });
};