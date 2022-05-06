
import express from "express";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from './routes/authRoutes'


const app = express()
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes)


app.listen(3001, () => {
   
   console.log("Example app listening")
})