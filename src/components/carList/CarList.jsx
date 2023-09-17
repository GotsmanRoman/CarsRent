import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CarList.module.scss';
import Modal from '../modal/modal';
import DefaultCar from '../../assets/image/nocar.jpg';
import FavoriteButton from 'components/FavoriteButton/FavoriteButton';

function CarList() {
  const filteredCars = useSelector(state => state.cars.filteredCars);

  const [openModal, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleLearnMoreClick = car => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (event.target === event.currentTarget) {
        console.log(event.currentTarget);
        setIsModalOpen(false);
      }
    };

    const modalOverlay = document.querySelector(`.${styles.overlay}`);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', handleClickOutside);

      return () => {
        modalOverlay.removeEventListener('click', handleClickOutside);
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      {filteredCars.length > 0 && (
        <ul className={styles.container}>
          {filteredCars.map(item => (
            <li key={item.id} className={styles.container__item}>
              <ul className={styles.card}>
                <li className={styles.card__item}>
                  <FavoriteButton car={item} />
                  <img
                    className={styles.car__image}
                    src={item.img ? item.img : DefaultCar}
                    alt={item._id}
                    width="400"
                    height="400"
                  ></img>
                </li>
                <li className={styles.card__item}>
                  <ul className={styles.meta}>
                    <li className={styles.meta__item}>
                      <ul className={styles.car__title}>
                        <li className={styles.car__text}>{item.make} </li>
                        <li
                          className={`${styles.car__text} ${styles.car__titleActive}`}
                        >
                          {item.model},
                        </li>
                        <li className={styles.car__text}>{item.year}</li>
                      </ul>
                      <Link
                        to={`/recipe/${item.id}`}
                        className={styles.car__price}
                      >
                        {item.rentalPrice}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.card__item}>
                  <ul className={styles.card__filter}>
                    <li>{item.address}</li>
                    <li>{item.rentalCompany}</li>
                    <li>{item.type}</li>
                    <li>{item.make}</li>
                    <li>{item.id}</li>
                    <li>{item.accessories[0]}</li>
                  </ul>
                </li>
                <li className={styles.card__item}>
                  {' '}
                  <button
                    className={styles.card__button}
                    onClick={() => {
                      handleLearnMoreClick(item);
                    }}
                  >
                    Learn more
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      <Modal
        open={openModal}
        onClose={() => setIsModalOpen(false)}
        item={selectedCar}
      ></Modal>
    </div>
  );
}

export default CarList;
