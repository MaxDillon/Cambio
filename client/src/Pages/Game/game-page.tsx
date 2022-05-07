
import React, { FC, useEffect } from 'react'

const GamePage: FC = () => {
  
  useEffect(() => {
    fetch("/game/data")
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);
  
  return (
    <div>GamePage</div>
  );
}
  
export default GamePage