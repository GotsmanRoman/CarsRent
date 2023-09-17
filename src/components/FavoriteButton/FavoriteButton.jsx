import React, { useEffect, useState } from 'react';
import styles from './FavoriteButton.module.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../store/favoriteSlice';

const FavoriteButton = ({ car, onToggleLike = null }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
    const isLikedStorage = likedCars.some(likedCar => likedCar.id === car.id);
    setIsLiked(isLikedStorage);
  }, [car.id]);

  const toggleLike = () => {
    const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
    const isLikedStorage = likedCars.some(likedCar => likedCar.id === car.id);
    const updatedLikedCars = isLikedStorage
      ? likedCars.filter(likedCar => likedCar.id !== car.id)
      : [...likedCars, car];

    dispatch(toggleFavorite(car));

    localStorage.setItem('likedCars', JSON.stringify(updatedLikedCars));
    setIsLiked(!isLikedStorage);

    if (onToggleLike) {
      onToggleLike(updatedLikedCars);
    }
  };

  return (
    <button
      onClick={toggleLike}
      type="button"
      className={`${styles.favorite__btn} ${styles.favoriteIcon}`}
    >
      {isLiked ? (
        <IconContext.Provider
          value={{
            color: '#3470ff',
            className: 'favoriteIcon',
            size: '18px',
          }}
        >
          <AiFillHeart width="18px" height="18px" />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider
          value={{
            color: '',
            className: 'favoriteIcon',
            size: '18px',
          }}
        >
          <AiOutlineHeart className={styles.favoriteIcon} />
        </IconContext.Provider>
      )}
    </button>
  );
};
export default FavoriteButton;
