import express from "express";
import { signup } from "../controlles/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin", )




export default router;
