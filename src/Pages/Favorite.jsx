import React from 'react';
import FavoriteFilter from '../components/FavoriteFilter/FavoriteFilter';
import FavoriteList from '../components/FavoriteList/FavoriteList';
import Footer from '../components/Footer/Footer';
import '../index';

const Favorite = () => {
  return (
    <div>
      <section className="section">
        <FavoriteFilter />
        <FavoriteList />
      </section>
      <Footer></Footer>
    </div>
  );
};
export default Favorite;
