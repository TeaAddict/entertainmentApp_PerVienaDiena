import express from "express";
import { getUser, getUsers, postUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);

export default router;
