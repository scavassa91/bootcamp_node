module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
        .get((req, res) => {
            Tasks.findAll()
            .then(result => {
                res.json(result);
            })
            .catch(error => {
                res.status(500).json({ msg: error.message });
            });
        })
        .post((req, res) => {
            Tasks.create(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(result => {
                res.status(500).json({ msg: error.message });
            });
        });

    app.route("/tasks/:id")
        .get((req, res) => {
            Tasks.findById(req.params.id)
            .then(result => {
                res.json(result);
            })
            .catch(result => {
                res.status(500).json({ msg: error.message });
            });
        })
        .put((req, res) => {
            Tasks.update(req.body, {
                "where": {
                    "id": req.params.id
                }
            })
            .then(() => {
                res.sendStatus(204);
            })
            .catch(result => {
                res.status(500).json({ msg: error.message });
            });
        })
        .delete((req, res) => {
            Tasks.destroy({
                "where": {
                    "id": req.params.id
                }
            })
            .then(() => {
                res.sendStatus(204);
            })
            .catch(result => {
                res.status(500).json({ msg: error.message });
            });
        });
};
