import * as React from 'react';
import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.Contacts}>
      <h2>Contacts</h2>
      <ul className={styles.contacts__list}>
        <li>
          Car manager:{' '}
          <span className={styles.textActive}>+3(087)000 000 000</span>
        </li>
        <li>
          Car repair:{' '}
          <span className={styles.textActive}>+3(087)000 000 001</span>
        </li>
        <li>
          Email: <span className={styles.textActive}>car@cars.com</span>
        </li>
      </ul>
    </div>
  );
};
