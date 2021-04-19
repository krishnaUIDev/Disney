import express, { Request, Response } from "express";
const router = express.Router();

// type Params2 = {
//   a: number;
//   b: number;
// };

// interface Params {
//   a: number;
//   b: number;
// }

router.get("/", async (req: Request, res: Response) => {
  res.send({ users: "krishna" });
});

module.exports = router;
