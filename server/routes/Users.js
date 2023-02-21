import express from "express";
import { deleteuser, dislike, getUser, like,  update } from "../controlles/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken,  update);

//delete user
router.delete("/:id",verifyToken, deleteuser);
//get a user
router.get("/find/:id", getUser);

//subscribe a user
// router.put("/sub/:id",verifyToken, subscribeUser);

//like a user
router.put("/like/:videoId", verifyToken, like);

//dislike a user
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
