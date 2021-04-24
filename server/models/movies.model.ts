const mongo = require("mongoose");

const Movies = mongo.model(
  "movies",
  new mongo.Schema({
    backgroundImg: String,
  })
);

exports.Movies = Movies;
