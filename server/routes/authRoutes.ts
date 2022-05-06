import express from 'express'
import { Request, Response } from 'express'
import Lobby from '../game/lobby'

const router = express.Router()

router.post('/enterLobby', (req: Request, res: Response) => {
	const id_hash = req.body.id_hash;
	var lobby: Lobby;
	if (id_hash in Lobby.lobbies) {
		lobby = Lobby.lobbies[id_hash];
	} else {
		lobby = new Lobby(id_hash);
	}
	res.cookie('roomID', id_hash, {httponly: true})
	res.send({})
})





export default router;