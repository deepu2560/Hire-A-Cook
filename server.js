const express = require("express");

const cors = require("cors");

const connect = require("./src/Configs/db");

const app = express();

app.use(express.json());
app.use(cors());

const userConroller = require("./src/Controllers/userController");
const cookController = require("./src/Controllers/cookController")

app.use("/auth", userConroller);

app.use("/cook", cookController)

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect();

    console.log("Server started");
  } catch (error) {
    console.log("Unable to start server");
  }
});
