
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from './routes/authRoutes'


const app = express()

app.use("/auth", authRoutes)


app.listen(3001, () => {
   
   console.log("Example app listening")
})