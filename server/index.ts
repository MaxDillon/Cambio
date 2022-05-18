
import express from "express";
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from './routes/authRoutes'
import gameRoutes from './routes/gameRoutes'
import ws from 'express-ws'

import { getToken } from './auth/verify'
import Game from './game/game'

const app = express()

const webSocket = ws(app)

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes)
app.use("/game", gameRoutes)

app.rawListeners

process.env.SERVER_SECRET = 'secret'

webSocket.app.ws('/socket', (ws, req)=> {
   const token = getToken(req)
   const game = Game.lobbies[token.id_hash]
   game.players[token.player_number].setSocket(ws);
   
   ws.on('message', (msg) => {
      ws.send(msg)
   })
})

app.listen(3001, () => {
   console.log("Example app listening")
})