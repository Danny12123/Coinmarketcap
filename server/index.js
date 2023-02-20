import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

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
mongoose.set("strictQuery", false);

app.listen(5000, ()=> {
    connect() 
    console.log("Connected!")
})