import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchAllMessages = createAsyncThunk(
	'greetings/fetchAll',
	async ('', thunkAPI) => {
		const response = await fetch('api/v1/messages/index')
		return response.data
	}
);