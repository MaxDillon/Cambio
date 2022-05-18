
import { Deck, Player } from "./player";

function RecreatingLobyException(message: string) {
	this.message = message;
	if ("captureStackTrace" in Error)
		 Error.captureStackTrace(this, RecreatingLobyException);
	else
		 this.stack = (new Error()).stack;
}
RecreatingLobyException.prototype = Object.create(Error.prototype);
RecreatingLobyException.prototype.name = "RecreatingLobyException";
RecreatingLobyException.prototype.constructor = RecreatingLobyException;


interface gameData {
	users: {}[],
	discardTop: number
}

class Game {
	static lobbies: { [id_hash: string]: Game } = {};
	players: Player[];
	deck: Deck;

	constructor(lobby_id: string) {
		if (lobby_id in Game.lobbies) {
			throw RecreatingLobyException("");
		}

		Game.lobbies[lobby_id] = this;
		this.players = [];
		this.deck = new Deck()
	}


	addUser(nick: string): number {
		const id = this.players.length;
		const player = new Player(nick, id);
		this.players[id] = player;

		return id
	}

	everyoneReady() {
		this.players.forEach(player => {
			if (!player.isReady) return false
		})
		return true
	}

	getHiddenData() {
		const data: gameData = {users: [], discardTop: 1}
		this.players.forEach(player => data.users.push(player.hiddenData()))
		return data;

	}

	deal(player: Player) {
		
	}
}



export default Game;