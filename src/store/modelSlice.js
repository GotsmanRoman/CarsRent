import { createSlice } from '@reduxjs/toolkit';
import { getModels } from '../components/API/API';

const initialState = {
  models: [],
  isLoading: false,
  error: null,
};

export const modelSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getModels.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getModels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.models = action.payload;
      })
      .addCase(getModels.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default modelSlice.reducer;
