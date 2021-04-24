import express from "express";
import cors from "cors";

const movies = require("../routes/movies");
const home = require("../routes/home");

module.exports = function (app: any) {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true })); // to loges the reqest into terminal
  // app.use(express.static("")); // to server static content
  // routes setup
  app.use("/api/movies", movies);
  app.use("/", home);
};
