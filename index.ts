require("dotenv").config();
import express, { Application, NextFunction, Request, Response } from "express";
import config from "config";

const app: Application = express();
app.set("etag", false);
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
// Rules of API
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-with, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "GET PATCH DELETE POST PUT PATCH"
    );
    return res.status(200).json({});
  }
  next();
});

require("./server/startup/db")();
require("./server/startup/routes")(app);
require("./server/startup/prod")(app);

// ErrorHandling
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error("not Found");
  return res.status(404).json({ message: error.message });
});

app.set("view engine", "pug");
app.set("views", "./server/views"); // to set default template

const port = process.env.PORT || config.get("PORT");
app.listen(port, (): void => console.log(`Listening on port ${port}...`));
