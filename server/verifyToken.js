import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next ) => {
    //this becomes our medileware
    const token = req.cookies.access_token;
    //check if theirs a token
    if (!token) return next(createError(401, "You are not authenticated!"));

    //checking if the token is veerified
    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return next(createError(401, "Token is not valid!"));
        req.user = user;
        next()
    })
}