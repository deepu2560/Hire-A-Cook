const mongoose = require("mongoose");
require("dotenv").config();

// connect scope for connecting with database
const connect = () => {
  return mongoose.connect(
    `${process.env.DB}`,
  );
};

// exporting connect scople
module.exports = connect;
