import express from 'express'
import Game from '../game/game'
import jwt from 'jsonwebtoken'
import { hasToken, initToken } from '../auth/verify'

const router = express.Router()

router.post('/enterLobby', hasToken, (req, res, next) => {

	// if (res.locals.hasToken) {
	// 	res.send({
	// 		err: true,
	// 		message: "Player already part of game"
	// 	})
	// 	return
	// }

	const id_hash = req.body.id_hash;
	const nick = req.body.nick;

	var game: Game = (id_hash in Game.lobbies) ? Game.lobbies[id_hash] : new Game(id_hash);

	res.locals.player_number = game.addUser(nick);
	game.deal(res.locals.player_number)
	res.locals.id_hash = id_hash;
	next()
	
}, initToken)





export default router;