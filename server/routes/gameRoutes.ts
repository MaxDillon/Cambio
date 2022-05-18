import express, { Request, Response } from 'express'
import Game from '../game/game'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../auth/verify'

const router = express.Router()


router.get('/data', verifyToken, (req: Request, res: Response) => {
	const player_number = res.locals.player_number
	const id_hash = res.locals.id_hash 

	const lobby = Game.lobbies[id_hash];

	res.send({
		err: false,
		message: 'success',
		data: lobby.getHiddenData()
	})
})


router.post('/ready', verifyToken, (req: Request, res: Response) => {
	const lobby = Game.lobbies[res.locals.id_hash]
	const player = lobby.players[res.locals.player_number]

	player.setReady()

	if (lobby.everyoneReady()) {
		res.send({
			err: false,
			message: "ready"
		})
	} else {
		res.send({
			err: false,
			message: "waiting"
		})
	}

})


export default router;