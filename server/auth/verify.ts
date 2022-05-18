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

export function getToken(req: Request) {
	const token = req.cookies.roomJsonToken
	if (token === null) return null;

	try {
		return jwt.verify(token, process.env.SERVER_SECRET) as Token
	} catch {
		return null
	}
}

export function hasToken(req: Request, res: Response, next: NextFunction) {
	if (getToken(req)) {
		res.locals.hasToken = true;
	} else {
		res.locals.hasToken = false;
	}
	next();
}


export function verifyToken(req: Request, res: Response, next: NextFunction) {
	const token = getToken(req);
	if (token) {
		res.locals.player_number = token.player_number;
		res.locals.id_hash = token.id_hash;
		next()
	} else {
		res.send({
			err: true,
			mesage: "cannot authenticate jsonWebToken"
		})
	}
}

