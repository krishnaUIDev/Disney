import express from "express";
const router = express.Router();

// type Params2 = {
//   a: number;
//   b: number;
// };

// interface Params {
//   a: number;
//   b: number;
// }

router.get("/", async (req, res) => {
  res.send({ users: "krishna" });
});

module.exports = router;
