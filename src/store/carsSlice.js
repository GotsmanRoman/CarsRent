import { createSlice } from '@reduxjs/toolkit';
import { getCars } from '../components/API/API';

const initialState = {
  cars: [],
  filteredCars: [],
  isLoading: false,
  error: null,
  hasMore: false,
  filter: {
    filterByName: '',
    filterByPrice: '',
    filterByMileAgeFrom: '',
    filterByMileAgeTo: '',
  },
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    applyFilters: (state, action) => {
      const {
        filterByName,
        filterByPrice,
        filterByMileAgeFrom,
        filterByMileAgeTo,
      } = action.payload;
      state.filteredCars = [];

      state.filter = action.payload;
      state.filteredCars = state.cars
        .filter(car => {
          let passFilter = true;

          if (
            filterByName &&
            car.make.toLowerCase() !== filterByName.toLowerCase()
          ) {
            passFilter = false;
          }

          if (filterByPrice && +car.rentalPrice.slice(1) > +filterByPrice) {
            passFilter = false;
          }

          if (filterByMileAgeFrom && car.mileage < filterByMileAgeFrom) {
            passFilter = false;
          }

          if (filterByMileAgeTo && car.mileage > filterByMileAgeTo) {
            passFilter = false;
          }
          return passFilter;
        })
        .slice(0, 8);
    },
    clearFilters: state => {
      state.filter = {
        filterByName: '',
        filterByPrice: '',
        filterByMileAgeFrom: '',
        filterByMileAgeTo: '',
      };
      state.filteredCars = state.cars.slice(0, 8);
    },
    loadMoreCars: state => {
      const startIndex = state.filteredCars.length;
      const endIndex = startIndex + 8;
      state.filteredCars = state.cars.slice(0, endIndex);
      state.hasMore = endIndex < state.cars.length;
    },
  },

  extraReducers: builder => {
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cars = action.payload;
      state.filteredCars = action.payload.slice(0, 8);
      state.hasMore = action.payload.length > 8;
    });
    builder.addCase(getCars.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const { applyFilters, clearFilters, loadMoreCars } = carsSlice.actions;
export default carsSlice.reducer;
