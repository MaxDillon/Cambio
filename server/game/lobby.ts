
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


class Player {
	id: number;
	nick: string;
	isReady: boolean;

	constructor(lobby: Lobby, nick: string) {
		this.isReady = false;
		this.nick = nick;
		this.id = lobby.players.length;
		lobby.players[this.id] = this;
	}
}

class Lobby {
	static lobbies = {};
	players: Player[];
	constructor(lobby_id: string) {
		if (lobby_id in Lobby.lobbies) {
			throw RecreatingLobyException("");
		}
		Lobby.lobbies[lobby_id] = this;
		this.players = [];
	}


	addUser(nick: string): number {
		const player = new Player(this, nick);
		return player.id
	}

}



export default Lobby;