import express from "express";
import { saveImage } from "../controllers/imageController.js";
const router = express.Router();
router.route("/").post(saveImage);
export default router;
