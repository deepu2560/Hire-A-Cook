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
  // check authorization header been set
  if (!req.headers.authorization)
    return res.status(400).send({ message: "Token not provided or Invalid" });

  // split the bearer token
  const token = req.headers.authorization;

  // call jwt to verify
  let user;

  // checking error
  try {
    user = await verifyToken(token);
  } catch (error) {
    console.log("Error:", error);
    res.send(400).send({ message: "Token not provided or Invalid" });
  }

  // token is valid. user retrieved from the token in the request object
  req.user = user.user;

  // next for end of middleware
  return next();
};
