import { useEffect } from "react"



const useInterval = (callback: (() => void), refresh: number) => {
	
	useEffect(() => {
		const id = setInterval(callback, refresh)

		return () => {
			clearInterval(id)
		}
	}, [])
}

export default useInterval