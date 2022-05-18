import CryptoES from 'crypto-es'



export default async function enterLobby(lobby_id: string) {
	const id_hash = CryptoES.SHA256(lobby_id).toString()

	const entered =  await fetch("/auth/enterLobby", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id_hash: id_hash,
			nick: "abc"
		})
	})
	.then(resp => resp.json())
	.then(data => {
		return data.err;
	})
	.catch(e => {
		console.log("Failed to enter lobby ")
		return true;
	})
	return entered;
}


