
import React, { createContext, FC, useContext, useEffect, useReducer, useRef, useState } from 'react'
import useInterval from '../../Hooks/useInterval';
import Deck, { DeckInfo } from './deck';
import initWebSocket from './initWebSocket'





const GamePage: FC = () => {

  const [playersState, setPlayersState] = useState<DeckInfo[]>([
    {
      nick: "abc",
      topRight: {value:4, suit:3},
      topLeft: {value:2, suit:0},
      bottomRight: {value:6, suit:2},
      bottomLeft: {value:1, suit:2},
      extra: []
    },
    {
      nick: "def",
      topRight: {value:5, suit:0},
      topLeft: {value:11, suit:0},
      bottomRight: {value:0, suit:1},
      bottomLeft: {value:3, suit:2},
      extra: []
    }
  ])

  // useEffect(() => {
  //   initWebSocket()
  //   .then(ws => ws.onmessage = msg => {
  //     const response = JSON.parse(msg.data)

  //   })
  // })
  
  return (
    <div>
      {playersState?.map((player, index) => {
        return <Deck key={index} player={player}/>
      })}
    </div>
  );
}
  
export default GamePage


