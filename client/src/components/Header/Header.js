import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../UI/Button/Button';

import classes from './Header.module.scss';

export default function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__brand}>
        <NavLink to="/" exact={true}>
          <h1>Brand</h1>
        </NavLink>
      </div>
      <div className={classes.Header__auth}>
        <div className={classes.Header__user}>
          <span>sergey</span>
        </div>
        <NavLink to="/auth" exact={true}>
          <Button>Войти</Button>
        </NavLink>
      </div>
    </div>
  );
}
