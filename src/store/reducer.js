import { combineReducers } from '@reduxjs/toolkit';

import carsReducer from './carsSlice';
import modelsReducer from './modelSlice';
import favoriteReducer from './favoriteSlice';

export const rootReducer = combineReducers({
  cars: carsReducer,
  models: modelsReducer,
  favorite: favoriteReducer,
});
