import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyFilters, clearFilters } from '../../store/carsSlice';
import { getModels } from '../API/API';
import Spinner from 'react-spinners/BeatLoader';

import styles from './CatalogFilter.module.scss';

function CatalogFilter() {
  const models = useSelector(state => state.models.models);
  const isLoading = useSelector(state => state.models.isLoading);
  const filter = useSelector(state => state.cars.filter);
  const dispatch = useDispatch();

  const [filterByName, setMake] = useState(filter.filterByName);
  const [filterByPrice, setRentalPrice] = useState(filter.filterByPrice);
  const [filterByMileAgeFrom, setByMileAgeFrom] = useState(
    filter.filterByMileAgeFrom
  );
  const [filterByMileAgeTo, setByMileAgeTo] = useState(
    filter.filterByMileAgeTo
  );

  const cars = useSelector(state => state.cars.cars);
  const uniquePrice = [
    ...new Set(cars.map(item => item.rentalPrice.slice(1))),
  ].sort((a, b) => a - b);

  useEffect(() => {
    dispatch(getModels());
  }, [dispatch]);

  const handleMakeChange = e => {
    const selectedMake = e.target.value;
    setMake(selectedMake);
  };

  const handleRentalPriceChange = e => {
    const selectedRentalPrice = e.target.value;
    setRentalPrice(selectedRentalPrice);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      filterByName ||
      filterByPrice ||
      (filterByMileAgeFrom !== '' && filterByMileAgeTo !== '')
    ) {
      dispatch(
        applyFilters({
          filterByName,
          filterByPrice,
          filterByMileAgeFrom,
          filterByMileAgeTo,
        })
      );
    } else {
      dispatch(
        applyFilters({
          filterByName: '',
          filterByPrice,
          filterByMileAgeFrom,
          filterByMileAgeTo,
        })
      );
    }
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setMake('');
    setRentalPrice('');
    setByMileAgeFrom('');
    setByMileAgeTo('');
    dispatch(getModels());
    dispatch(applyFilters());
  };

  const override = {
    display: 'block',
    width: '200px',
    margin: '300px auto',
    borderColor: 'red',
  };

  return (
    <>
      {isLoading ? (
        <Spinner
          cssOverride={override}
          size={30}
          color={'#36d7b7'}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <form className={styles.searchForm}>
          <select
            className={styles.selectModel}
            value={filterByName}
            onChange={handleMakeChange}
          >
            <option value={''}>All categories</option>
            {models.map(item => (
              <option key={item.id} value={item.model}>
                {item.model}
              </option>
            ))}
          </select>
          <select
            className={`${styles.selectModel}  ${styles.small}`}
            value={filterByPrice}
            onChange={handleRentalPriceChange}
          >
            <option>To $</option>
            {uniquePrice.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            className={`${styles.selectModel}  ${styles.medium}`}
            type="number"
            placeholder="Mileage from"
            value={filterByMileAgeFrom}
            onChange={e => setByMileAgeFrom(e.target.value)}
          />
          <input
            className={`${styles.selectModel}  ${styles.medium}`}
            type="number"
            placeholder="Mileage to"
            value={filterByMileAgeTo}
            onChange={e => setByMileAgeTo(e.target.value)}
          />
          <button
            type="submit"
            className={styles.submit}
            onClick={handleSubmit}
          >
            Search
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </form>
      )}
    </>
  );
}

export default CatalogFilter;
