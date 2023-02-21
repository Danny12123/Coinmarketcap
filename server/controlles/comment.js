import { createError } from "../error.js";
import Comments from "../models/Comments.js";
import Video from "../models/Video.js";

export const addComment = async (req, res, next) => {
    const newComment = new Comment({...req.body, userId:req.user.id});
    try{
        const saveComment = await newComment.save()
        res.status(200).send(saveComment)
    }catch(err) {
        next(err)
    }
}
export const deleteComment = async (req, res, next) => {
    try{
        const comment = await Comments.findById(res.params.id)
        const video = await Video.findById(res.params.id);
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has benn deleted")
        }else {
            return next(createError(403, "You can delete only your comment"))
        }
    }catch(err) {
        next(err)
    }
}
export const getComment = async (req, res, next) => {
    try{
        const comment = await Comments.find({videoId:req.params.videoId})
        res.status(200).json(comment)
    }catch(err) {
        next(err)
    }
}