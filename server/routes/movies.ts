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

router.post("/", async (req: Request, res: Response) => {
  const movie = new Movies({
    backgroundImg: req.body.backgroundImg,
    cardImg: req.body.backgroundImg,
    description: req.body.description,
    type: req.body.type,
    subTitle: req.body.subTitle,
    titleImg: req.body.backgroundImg,
    title: req.body.title,
  });
  await movie.save();
  res.send(movie);
});

module.exports = router;
