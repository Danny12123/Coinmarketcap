import express from "express";
import { addVideo, addView, deleteVideo, getByTags, getVideo, random, search, trends, updateVideo } from "../controlles/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trends)
router.get("/random", random)
router.get("/tags", getByTags)
router.get("/search", search)

export default router;
