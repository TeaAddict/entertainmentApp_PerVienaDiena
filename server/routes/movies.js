import { getMovie, updateMovie } from "../controllers/movieController.js";
import express from "express";

const router = express.Router();

router.get("/", getMovie);
router.get("/:id", getMovie);
router.patch("/:id", updateMovie);

export default router;
