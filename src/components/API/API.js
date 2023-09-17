import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://64fe04f9596493f7af7eddae.mockapi.io';

export const getCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getModels = createAsyncThunk(
  'models/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/models');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
