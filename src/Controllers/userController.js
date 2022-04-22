const express = require("express");

const User = require("../Models/userModel");

const router = express.Router();

const { register, login } = require("./authController");

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    res.status(201).send({ error: false, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, token: "Server error" });
  }
});

router.post("/register", register);

router.post("/login", login);

module.exports = router;
