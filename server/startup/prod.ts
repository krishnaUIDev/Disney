import helmet from "helmet";
import compression from "compression";
import express from "express";

module.exports = function (app: any) {
  // @ts-ignore
  app.use(express.json({ extended: false }));
  app.use(helmet());
  app.use(compression());
};
