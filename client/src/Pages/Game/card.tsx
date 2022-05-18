import React, { FC } from 'react'
import styled from 'styled-components'

const CardBox = styled.div`
	user-select: none;
	-moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -o-user-select: none;
	width: 70px;
	height: 100px;
	margin: 2px;
	display: inline-block;
	background-color: #f5f8f0;
	border: 2px solid black;
	border-radius: 10px;
	position: relative;
`

enum SUIT {
	clubs,
	diamonds,
	spades,
	hearts
 }

export interface CardInfo {
	value: number,
	suit: SUIT
}

interface CardProps {
	info: CardInfo,
	handleClick: () => void
}

const Card: FC<CardProps> = ({ info, handleClick }: CardProps) => {
  return (
	 <CardBox onClick={handleClick}>
		 <div style={{margin: '10%', right: '0px', top: '0px',position: 'absolute'}}>{info.value}</div>
		 <div style={{margin: '10%', bottom: '0px', left: '0px',position: 'absolute'}}>{info.value}</div>
		 <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>{info.suit}</div>
	 </CardBox>
  )
}

export default Card