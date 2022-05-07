import express, { Request, Response } from 'express'
import Lobby from '../game/lobby'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../auth/verify'

const router = express.Router()


router.get('/data', verifyToken, (req: Request, res: Response) => {
	const player_number = res.locals.player_number
	const id_hash = res.locals.id_hash 
	console.log(res.locals.id_hash)

	res.send({
		err: false,
		message: 'success'
	})
})


export default router;