import React from 'react';
import styles from './LoadMoreButton.module.scss';

function LoadMoreButton({ onClick }) {
  return (
    <button className={styles.load__more} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreButton;
