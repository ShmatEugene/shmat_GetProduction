import React from 'react';
import classes from './Button.module.scss';

export default function Button(props) {
  const cls = [classes.Button, classes[props.type] || classes.default];

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type="button"
      className={cls.join(' ')}>
      {props.children}
    </button>
  );
}
