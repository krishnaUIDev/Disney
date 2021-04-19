const express = require("express");
const cors = require("cors");

const users = require("../routes/user");
const home = require("../routes/home");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true })); // to loges the reqest into terminal
  // app.use(express.static("")); // to server static content
  // routes setup
  app.use("/api/users", users);
  app.use("/", home);
};
