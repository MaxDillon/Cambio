import CryptoES from 'crypto-es'

export default async function enterLobby(lobby_id: string) {
	const id_hash = CryptoES.SHA256(lobby_id).toString()


	return await fetch("/auth/enterLobby", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id_hash: id_hash
		})
	})
	.then(resp => resp.json())
	.then(data => {
		return data;
	})
	.catch(e => {
		console.log("Failed to enter lobby ")
		return false;
	})

}


