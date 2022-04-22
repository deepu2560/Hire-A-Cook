require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT__KEY}`, (error, user) => {
      if (error) return reject(error);

      resolve(user);
    });
  });
};
module.exports = async (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(401)
      .send({ error: true, token: "Token not provided or Invalid" });

  const token = req.headers.authorization(split(" "))[1];

  let user;

  try {
    user = await verifyToken(token);
  } catch (error) {
    res.status(500).send({ error: true, token: "Server error" });
  }

  req.user = user.user;

  return next();
};
