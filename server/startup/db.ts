const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");
const dbConnection = config.get("MONGO_URL");

module.exports = function (): void {
  mongoose
    .connect(dbConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((): void => winston.info("conneted to mogodb.."))
    .catch((): void => winston.info("Failed to connect mongodb"));
  mongoose.set("useCreateIndex", true);
};
