
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

class Lobby {
	static lobbies = {};
	players: number;
	constructor(lobby_id: string) {
		if (lobby_id in Lobby.lobbies) {
			throw RecreatingLobyException("");
		}
		Lobby.lobbies[lobby_id] = this;
		this.players = 0;
	}


}



export default Lobby;