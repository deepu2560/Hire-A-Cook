const mongoose = require("mongoose");

// connect scope for connecting with database
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://cookAuth:deepanshu@cluster0.2sw65.mongodb.net/chef?retryWrites=true&w=majority",
  );
};

// exporting connect scople
module.exports = connect;
