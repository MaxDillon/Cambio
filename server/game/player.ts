import WebSocket from "ws"

interface Hand {
	topLeft: number,
	topRight: number,
	bottomLeft: number,
	bottomRight: number,
	extra: number[]
}


export class Deck {
	cards: number[] = []
	constructor() {
		for(let i = 0; i < 54; i++) {
			this.cards.push(i)
		}
		this.shuffle()
	}

	shuffle() {
		this.cards = this.cards
			.map(x => {return {i:x, v:Math.random()}})
			.sort((a, b) => (a.v - b.v))
			.map(data => data.i)
		console.log(this.cards.map(Deck.indexToCard))
	}


	static indexToCard(i: number) {
		if (i > 51) return 0

		return (i % 13) + 1
	}

}


export class Player {
	id: number;
	nick: string;
	isReady: boolean;

	hand: Hand

	constructor(nick: string, id: number) {
		this.isReady = false;
		this.nick = nick;
		this.id = id;
		this.hand = null;
	}

	setReady() {
		this.isReady = true;
	}

	hiddenHand() {
		if (this.hand == null) return null;
		return {
			topLeft: this.hand.topLeft !== null,
			topRight: this.hand.topRight !== null,
			bottomLeft: this.hand.bottomLeft !== null,
			bottomRight: this.hand.bottomRight !== null,
			extra: this.hand.extra.length
		}
	}


	hiddenData(): {} {
		return {
			id: this.id,
			nick: this.nick,
			isReady: this.isReady,
			cards: this.hiddenHand()
		}
	}

	setSocket(ws: WebSocket) {

	}

}

