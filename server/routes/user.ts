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

router.get("/", (req: Request, res: Response): void => {
  const name: object = { users: "krishna" };
  res.send(name);
});

module.exports = router;
