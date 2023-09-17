import styles from './modal.module.scss';
import iconClose from '../../assets/icons/x.svg';
import DefaultCar from '../../assets/image/nocar.jpg';

const Modal = ({ open, onClose, item }) => {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img
          className={styles.close}
          src={iconClose}
          alt="Icon close"
          onClick={onClose}
        />
        <div className={styles.modal__container}>
          <img
            className={styles.modal__image}
            src={item.img ? item.img : DefaultCar}
            width="461px"
            height="248px"
            alt={item.make}
          ></img>
          <ul className={styles.modal__information}>
            <li className={styles.modal__title}>
              {`${item.make}
              ${item.model}
              ${item.year}`}
            </li>
            <li>
              <ul className={styles.modal__keyInfo}>
                <li className={styles.keyInfo__item}>
                  {item.address.split(',').splice(-2, 1)}
                </li>
                <li className={styles.keyInfo__item}>
                  {item.address.split(',').splice(-1, 1)}
                </li>
                <li className={styles.keyInfo__item}>Id: {item.id}</li>
                <li className={styles.keyInfo__item}>Year: {item.year}</li>
                <li className={styles.keyInfo__item}>Type: {item.type}</li>
                <li className={styles.keyInfo__item}>
                  Fuel Consumption: {item.fuelConsumption}
                </li>
                <li className={styles.keyInfo__item}>
                  Engine Size: {item.engineSize}
                </li>
              </ul>
            </li>
            <li className={styles.modal__description}>{item.description}</li>
            <li className={styles.modal__accessories}>
              Accessories and functionalities:
              <ul className={styles.accessories__list}>
                {item.accessories.map(value => {
                  return (
                    <li className={styles.accessories__item} key={value}>
                      {value}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className={styles.modal__conditions}>
              Rental Conditions:
              <ul className={styles.conditions__list}>
                {item.rentalConditions.split('\n').map(value => {
                  return (
                    <li className={styles.conditions__item} key={value}>
                      {value}
                    </li>
                  );
                })}
                <li className={styles.conditions__item}>
                  Mileage:
                  <span className={styles.modal__accentText}>
                    {item.mileage}
                  </span>
                </li>
                <li className={styles.conditions__item}>
                  Price:{' '}
                  <span className={styles.modal__accentText}>
                    {item.rentalPrice}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <a href="tel:+380730000000" className={styles.modal__button}>
            Rental Car
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
