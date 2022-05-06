import express from 'express'
import { Request, Response } from 'express'
import Lobby from '../game/lobby'
import jwt from 'jsonwebtoken'

const router = express.Router()
const SECRET = 'asdfaksdfkladfasdfkasdkfjlsd'
router.post('/enterLobby', (req: Request, res: Response) => {
	const id_hash = req.body.id_hash;
	const nick = req.body.nick;

	var lobby: Lobby;
	if (id_hash in Lobby.lobbies) {
		lobby = Lobby.lobbies[id_hash];
	} else {
		lobby = new Lobby(id_hash);		 
	}
	const player_number = lobby.addUser(nick)
	const webToken = jwt.sign({id_hash: id_hash, player_number: player_number}, SECRET)

	res.cookie('roomJsonToken', webToken, {httpOnly: true, maxAge: 360000, secure: true, sameSite: true})
	res.send({
		err: false,
		message: 'added to lobby'
	})
})





export default router;