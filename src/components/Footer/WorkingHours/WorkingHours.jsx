import * as React from 'react';
import styles from './WorkingHours.module.scss';

export const WorkingHours = () => {
  return (
    <div className={styles.Contacts}>
      <h2>Working hours</h2>
      <ul className={styles.working__list}>
        <li>
          Monday-Friday:{' '}
          <span className={styles.textActive}>09-00 to 18-00</span>
        </li>
        <li>
          Saturday: <span className={styles.textActive}>10-00 to 17-00</span>
        </li>
        <li>
          Sunday: <span className={styles.textActive}>Not working</span>
        </li>
      </ul>
    </div>
  );
};
