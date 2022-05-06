import express from 'express'

const router = express.Router()

router.post('/enterLobby', (req, res) => {
	res.send({success: true})
})





export default router;