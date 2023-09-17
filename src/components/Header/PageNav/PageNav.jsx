import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Item } from './PageNav.module';
import styles from './PageNav.module.css';
import RentButton from '../../RentButton/RentButton';

export const PageNav = () => {
  return (
    <List>
      <Item>
        <NavLink className={styles.NavLink} to="/Home">
          Home
        </NavLink>
        <NavLink className={styles.NavLink} to="/Catalog">
          Catalog
        </NavLink>
        <NavLink className={styles.NavLink} to="/Favorite">
          Favorite
        </NavLink>
      </Item>
      <Item>
        <RentButton className={styles.NavLink} to="/Favorite"></RentButton>
      </Item>
    </List>
  );
};
