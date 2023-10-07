import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
  value: []
}

export const fetchElements = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://650af6bedfd73d1fab094cf7.mockapi.io/elements')
  return response.data.data.content
})

export const elementSlice = createSlice({
  name: 'element',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchElements.fulfilled, (state, action) => {
      state.value = action.payload
    })
  },
});

export const selectElement = (state) => state.element.value;
export default elementSlice.reducer;