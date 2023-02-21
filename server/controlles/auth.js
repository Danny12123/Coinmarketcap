import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";


export const signup = async (req, res, next) => {
    // console.log(req.body)
    try{
        //hashing the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body, password: hash});
        // const newUser = new User(req.body)
        // console.log(newUser)
        await newUser.save();
        res.status(200).send("User has been created")
    }catch(err) {
        next(err)
    }

}


export const signin = async (req, res, next) => {
    // console.log(req.body)
    try{
        //finding user
        const user = await User.findOne({name:req.body.name})
        //send an error if user not found
        if (!user) return next(createError(404, "User not found"))
        //compare password
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect) return next(createError(400, "wrong password"));
    }catch(err) {
        next(err)
    }

}