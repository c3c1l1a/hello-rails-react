import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllMessages } from '../redux/greetings';

function RootController() {
	const dispatch = useDispatch()
	const generateMessage = () => {
		dispatch(fetchAllMessages())
	}

	return (
		<button onClick={()=> generateMessage()}>Generate message</button>
	);
}

export default RootController
