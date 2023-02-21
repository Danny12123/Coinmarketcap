import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/Users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comment.js";
import auth from "./routes/auth.js";

const app = express();  
dotenv.config();


const connect = () => {
    mongoose
      .connect(process.env.MONGO, { useNewUrlParser: true })
      .then(() => {
        console.log("CONNECTED TO DB");
      })
      .catch((err) => {
        throw err;
      });
}

app.use(express.json())
app.use("/Story/Auth", auth)
app.use("/Story/Users", userRoutes)
app.use("/Story/Video", videoRoutes)
app.use("/Story/Comment", commentRoutes)

app.use((err, req, res, next)=> {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  })
})

mongoose.set("strictQuery", false);

app.listen(5000, ()=> {
    connect() 
    console.log("Connected!")
})