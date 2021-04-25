import express, { Request, Response } from "express";
const router = express.Router();
const { Movies } = require("../models/movies.model");

router.get("/", async (req: Request, res: Response) => {
  const type = req.query.type;
  if (type) {
    const movies = await Movies.find({ type: type });
    res.send(movies);
  } else {
    const movie = await Movies.find({});
    res.send(movie);
  }
});

module.exports = router;
