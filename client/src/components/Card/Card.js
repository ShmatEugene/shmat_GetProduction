import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './Card.module.scss';

export default function Card({ title, desc, imgUrl, id }) {
  return (
    <div className={classes.Card}>
      <div className={classes.Card__img}>
        <img src={imgUrl} alt="man" />
      </div>
      <div className={classes.Card__text}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <NavLink to={`details/${id}`}>
          <Button>Подробнее</Button>
        </NavLink>
      </div>
    </div>
  );
}
