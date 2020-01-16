import React, { useState } from 'react'
import FlareComponent from 'flare-react';

const Rive = () => {

	let [ animation, setAnimation ] = useState('idle')

	const onClick = () => {
		setAnimation('success')
	}

	return (
		<div>
			<FlareComponent width={500} height={500} animationName={animation} file="teddy.flr"/>
			<button onClick={onClick}>sucesso!</button>
		</div>
	)
}

export default Rive
