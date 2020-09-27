import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import Button from '../UI/Button/Button';
import classes from './Header.module.scss';

export default function Header() {
  const { user, setUser } = React.useContext(AuthContext);

  return (
    <div className={classes.Header}>
      <div className={classes.Header__brand}>
        <NavLink to="/" exact={true}>
          <h1>Brand</h1>
        </NavLink>
      </div>
      <div className={classes.Header__auth}>
        <div className={classes.Header__user}>
          <span>{user && user}</span>
        </div>
        {user ? (
          <NavLink to="/" exact={true}>
            <Button onClick={() => setUser('')}>Выйти</Button>
          </NavLink>
        ) : (
          <NavLink to="/auth" exact={true}>
            <Button>Войти</Button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
