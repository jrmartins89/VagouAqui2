const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require("./db/dbConnect"); // require database connection
const User = require("./db/userModel");

// body parser configuration
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});
// execute database connection
dbConnect();

app.post("/register", (request, response) => {

});

module.exports = app;
