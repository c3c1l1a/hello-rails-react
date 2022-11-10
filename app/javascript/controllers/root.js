import React from 'react'

function RootController() {
	const generateMessage = () => {
		console.log('clicked')
	}

	return (
		<button onClick={()=> generateMessage()}>Generate message</button>
	);
}

export default RootController
