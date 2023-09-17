import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
  isLoading: false,
  error: null,
  hasMore: false,
  models: [],
  filter: {
    filterByName: '',
    filterByPrice: '',
    filterByMileAgeFrom: '',
    filterByMileAgeTo: '',
  },
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteItems.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        item => item.id !== action.payload.id
      );
    },
    toggleFavorite: (state, action) => {
      const index = state.favoriteItems.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.favoriteItems.splice(index, 1);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
    setFavoriteItems: (state, action) => {
      state.favoriteItems = action.payload;
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  setFavoriteItems,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
