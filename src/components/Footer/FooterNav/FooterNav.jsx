import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Item } from './FooterNav.module';
import styles from './FooterNav.module.css';
import { Logo } from '../Logo/Logo';
import CompanyDescription from '../CompanyDescription/CompanyDescription';
import { Contacts } from '../Contacts/Contacts';
import { WorkingHours } from '../WorkingHours/WorkingHours';

export const FooterNav = () => {
  return (
    <List>
      <Item>
        <NavLink
          className={`${styles.NavLink} ${styles.CompanyBlock}`}
          to="/Home"
        >
          <Logo />
        </NavLink>
        <CompanyDescription></CompanyDescription>
      </Item>
      <Item>
        <Contacts />
      </Item>
      <Item>
        <WorkingHours />
      </Item>
    </List>
  );
};
