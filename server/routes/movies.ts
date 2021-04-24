import express, { Request, Response } from "express";
const router = express.Router();
const { Movies } = require("../models/movies.model");

router.get("/", async (req: Request, res: Response) => {
  const movie = await Movies.find({});
  res.send(movie);
});

router.get("/:type", async (req: Request, res: Response) => {
  const test = req.params.type;
  const filtered = await Movies.find({ type: test });
  res.send(filtered);
});

module.exports = router;
