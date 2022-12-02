import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getGreeting = createAsyncThunk(
  'greetings/getGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/greetings');
    return response.json()
  },
);

const initialState = {
    message: [],
    status: 'idle',
};

// Then, handle actions in your reducers:
const reducerGreetings = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getGreeting.fulfilled, (state, action) => {
        state.message = action.payload;
        state.status = 'succeeded';
    });
    builder.addCase(getGreeting.pending, (state, action) => {
        state.message = action.payload;
        state.status = 'loading';
    });
  },
});

// Action creators are generated for each case reducer function
export const { greetingsReducer } = reducerGreetings.actions;

export default reducerGreetings.reducer;