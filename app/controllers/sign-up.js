const SignUpmodelData = require("../models/sign-up.js");

exports.signUp =  async (req, res) => {
  try {
    const signUpData = await new SignUpmodelData({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      country: req.body.country
    });
    res.json({ signUpData });
  } catch (error) {
      console.log(error);
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Note."
    });
  }
};


exports.getUsers = async (req,res) => {
  try {
    const userData = await SignUpmodelData.find();
    res.json(userData);
  } catch (error) {
    res.json({ message: error });
  }
}
