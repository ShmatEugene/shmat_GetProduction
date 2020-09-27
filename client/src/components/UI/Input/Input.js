import React from 'react';
import classes from './Input.module.scss';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

export default function Input(props) {
  const inputType = props.type || 'text';
  const htmlFor = inputType + '-' + Math.random();

  return (
    <div className={classes.Input}>
      <label className={classes.Input__label} htmlFor={htmlFor}>
        {props.label}
      </label>
      <input
        className={classes.Input__input}
        id={htmlFor}
        type={inputType}
        value={props.value}
        onChange={props.onChange}
      />
      {isInvalid(props) ? (
        <span className={classes.Input__error}>
          {props.errorMessage
            ? props.errorMessage.map((error, index) => <p key={index}>{error}</p>)
            : 'Введено некорректное значение'}
        </span>
      ) : null}
    </div>
  );
}
