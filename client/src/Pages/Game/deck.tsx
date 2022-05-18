import React, { FC, useState } from 'react'
import Card, { CardInfo } from './card';


export interface DeckInfo {
	nick: string,
	topLeft: CardInfo,
	topRight: CardInfo,
	bottomLeft: CardInfo,
	bottomRight: CardInfo,
	extra: CardInfo[]
 }

interface DeckProps {
	player: DeckInfo
}


const Deck: FC<DeckProps> = ({ player }) => {

	return (
		<div>
			<div className='mainCards'>
				<Card info={player.topLeft} handleClick={()=>{console.log("abc")}}/>
				<Card info={player.topRight} handleClick={()=>{}}/>
				<Card info={player.bottomLeft} handleClick={()=>{}}/>
				<Card info={player.bottomRight} handleClick={()=>{}}/>
			</div>
			<div className='extra-cards'>
				{player.extra.map((value, index) => {
					return <Card key={index} info={value} handleClick={() => {

					}}/>
				})}
			</div>
		</div>
		)
	}
	
	export default Deck