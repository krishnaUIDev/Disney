require("dotenv").config();
const express = require("express");
const app = express();
const config = require("config");

require("./server/startup/routes")(app);
require("./server/startup/prod")(app);

app.set("view engine", "pug");
app.set("views", "./server/views"); // to set default template

const port = process.env.PORT || config.get("PORT");
app.listen(port, () => console.log(`Listening on port ${port}...`));
