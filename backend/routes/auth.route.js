import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register); // Register route
router.post("/login", login);
router.post("/logout", logout);

export default router;
