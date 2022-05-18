
export default function initWebsocket() {

	return new Promise<WebSocket>((resolve, reject) =>{
	  const ws = new WebSocket("ws://localhost:3001/socket")
	  ws.onopen = () => {
		 resolve(ws);
	  } 
	  ws.onerror = event => {
		 reject(event)
	  }
	})
 }
 
 

export async function abc() {
	const webSocket = await initWebsocket()
	.catch(err => {
		console.log(err)
		return null
	})
	if (webSocket === null) return false;
	
	webSocket.onmessage = event => {
		const obj = JSON.parse(event.data)
		console.log(obj)
		}
	return true;
}


