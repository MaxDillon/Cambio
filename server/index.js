
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express()

app.post("/auth/enterLobby", (req, res) => {

	res.send({success: true})
})


app.listen(3001, () => {
   
   console.log("Example app listening")
})