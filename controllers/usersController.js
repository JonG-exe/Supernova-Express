const User = require("../models/users");

// Create User

module.exports = {
    createUser: (req, res, next) => {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone
        })
        .then(user => {
            console.log("New User created: " + user);
            next();
        })
        .catch(error => {
            console.log("Error encountered: ", error);
        })
    },
    redirectUser: (req, res) => {
        res.render("thanks", {name: req.body.firstName});
    }
}