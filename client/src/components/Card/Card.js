import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Card.module.scss';

export default function Card() {
  return (
    <div className={classes.Card}>
      <div className={classes.Card__img}>
        <img
          src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
          alt="man"
        />
      </div>
      <div className={classes.Card__text}>
        <h2>Kimberley Griffiths</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <Button>Подробнее</Button>
      </div>
    </div>
  );
}