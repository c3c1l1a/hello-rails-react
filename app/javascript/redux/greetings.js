import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const GET_ALL = 'messages/GET_ALL';


const fetchAllMessages = createAsyncThunk(
	GET_ALL,
	async (all, thunkAPI) => {
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