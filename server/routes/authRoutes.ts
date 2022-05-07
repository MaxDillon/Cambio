import express from 'express'
import Lobby from '../game/lobby'
import jwt from 'jsonwebtoken'
import { initToken } from '../auth/verify'

const router = express.Router()

router.post('/enterLobby', (req, res, next) => {
	const id_hash = req.body.id_hash;
	const nick = req.body.nick;

	var lobby: Lobby = (id_hash in Lobby.lobbies) ? Lobby.lobbies[id_hash] : new Lobby(id_hash);

	res.locals.player_number = lobby.addUser(nick);
	res.locals.id_hash = id_hash;
	next()
	
}, initToken)





export default router;