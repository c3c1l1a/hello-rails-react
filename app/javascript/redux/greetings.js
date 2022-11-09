import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchAllMessages = createAsyncThunk(
	'greetings/All',
	async ('', thunkAPI) => {
		const response = await fetch('api/v1/messages/index')
		return response.data
	}
);

const initialState = {
  entities: [],
  loading: 'idle',
} as MessagesState


const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchAllMessages.fulfilled, (state, action) => {
			state.entities.push(action.payload)
		})
	}
});