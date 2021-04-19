const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send({ users: "krishna" });
});

module.exports = router;
