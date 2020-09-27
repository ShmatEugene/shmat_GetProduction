import React from 'react';
import Card from '../../components/Card/Card';
import classes from './Content.module.scss';

export default function Content() {
  return (
    <div className={classes.Content}>
      <Card />
    </div>
  );
}
