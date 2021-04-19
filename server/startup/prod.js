const helmet = require("helmet");
const compression = require("compression");
const express = require("express");

module.exports = function (app) {
  app.use(express.json({ extended: false }));
  app.use(helmet());
  app.use(compression());
};
