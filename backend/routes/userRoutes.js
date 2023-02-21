import express from "express";
import {
  authUser,
  deleteUser,
  getUserByID,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser).get(getUsers);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserByID).put(updateUser);
export default router;
