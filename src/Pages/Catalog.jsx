import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CatalogFilter from '../components/CatalogFilter/CatalogFilter';
import LoadMoreButton from '../components/LoadMore/LoadMoreButton';
import CarList from '../components/carList/CarList';
import { loadMoreCars } from '../store/carsSlice';
import { getCars } from '../components/API/API';
import Footer from '../components/Footer/Footer';
import '../index';

const Catalog = () => {
  const { hasMore, filteredCars } = useSelector(state => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreCars());
  };

  return (
    <div>
      <section className="section">
        <CatalogFilter />
        <CarList />
        {hasMore & (filteredCars.length > 0) && (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        )}
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default Catalog;
