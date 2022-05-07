import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

interface Token {
	id_hash: string;
	player_number: number;
}

export function initToken(req: Request, res: Response) {

	const token: Token = {
		id_hash: res.locals.id_hash,
		player_number: res.locals.player_number
	}

	const webToken = jwt.sign(token, process.env.SERVER_SECRET)

	res.cookie('roomJsonToken', webToken, {httpOnly: true, maxAge: 360000, secure: true, sameSite: true})
	res.send({
		err: false,
		message: 'added to lobby'
	})
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
	const token = req.cookies.roomJsonToken

	try {
		const data = jwt.verify(token, process.env.SERVER_SECRET) as Token

		res.locals.id_hash = data.id_hash;
		res.locals.player_number = data.player_number;
		next()	

	} catch {
		res.send({
			err: true,
			mesage: "cannot authenticate jsonWebToken"
		})
		return
	}


}