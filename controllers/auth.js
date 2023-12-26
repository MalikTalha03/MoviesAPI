const user = require('../models/userdata');

exports.login = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const email = req.body.email;
    user.login(email, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while login."
            });
        } else {
            res.send(data);
        }
    }
    );
}

exports.register = (req, res) => {
    
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };
        user.register(user, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while register."
                });
            } else {
                res.send(data);
            }
        }
        );
    }