import { setFavoriteItems } from './favoriteSlice';

export const loadFavoritesFromLocalStorage = () => dispatch => {
  const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
  dispatch(setFavoriteItems(likedCars));
};
