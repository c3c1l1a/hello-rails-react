import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchAllMessages = createAsyncThunk(
	'greetings/All',
	async ('', thunkAPI) => {
		const response = await fetch('api/v1/messages/index')
		return response.data
	}
);

const initialState = [];


const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllMessages.fulfilled, (state, action) => {
			state.push(action.payload)
		})
	}
});

export default messagesSlice.reducer