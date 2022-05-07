
import React, { useEffect } from 'react'

function GamePage() {

  useEffect(() => {
    fetch("/game/data")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
	 <div>GamePage</div>
  )
}

export default GamePage