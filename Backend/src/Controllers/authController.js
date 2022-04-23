require("dotenv").config();

const jwt = require("jsonwebtoken");

const Usermodel = require("../Models/userModel");

const newToken = (user) => {
  return jwt.sign({ user }, `${process.env.JWT__KEY}`);
};

const register = async (req, res) => {
  try {
    let user = await Usermodel.findOne({ username: req.body.username })
      .lean()
      .exec();

    if (user)
      return res
        .status(401)
        .send({ error: true, token: "Username already exist" });

    user = await Usermodel.create(req.body);

    const token = newToken(user);

    console.log(`${req.body.name} is registered successfully.`);

    res.status(201).send({ error: false, token });
  } catch (error) {
    res.status(500).send({ error: true, token: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const user = await Usermodel.findOne({ username: req.body.username });

    if (!user)
      return res
        .status(401)
        .send({ error: true, token: "Username doesn't exist" });

    let match = user.checkPassword(req.body.password);

    if (!match)
      return res.status(401).send({ error: true, token: "Password wrong" });

    const token = newToken(user);

    console.log(`${user.name} is Logged in.`);

    res.status(202).send({ error: false, token });
  } catch (error) {
    res.status(500).send({ error: true, token: "Server error" });
  }
};

module.exports = { register, login };
