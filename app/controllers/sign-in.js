const Users = require("../models/sign-up.js");
const bcrypt = require("bcryptjs");
exports.signIn = async (req, res) => {
  try {
    Users.findOne({ email: req.body.email }).then(user => {
      console.log("User from login", user);
      if (!user) res.sendStatus(204);
      else {
        req.body.password === user.password
          ?  res.status(200).send({
            userId: user._id
          })
          : res.sendStatus(403);   
        //   bcrypt.compare(req.body.password, user.password)
        //       .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(403))
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Note."
    });
  }
};
