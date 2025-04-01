import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById } from './operation';

const initialState = {
  item: null,
  isLoading: false,
  error: null,
};

export const camperDetailsSlice = createSlice({
  name: 'camperDetails',
  initialState,
  reducers: {
    clearCamperDetails: state => {
      state.item = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCamperDetails } = camperDetailsSlice.actions;
export default camperDetailsSlice.reducer;
