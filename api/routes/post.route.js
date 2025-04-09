import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  //   console.log("Test route");
  res.status(200).json({ message: "Test route" });
});

export default router;
