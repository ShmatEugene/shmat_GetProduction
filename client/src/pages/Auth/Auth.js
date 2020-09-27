import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.scss';

//Form controls setup
function createFormControls() {
  return {
    login: {
      value: '',
      errorMessage: [],
      touched: false,
      valid: false,
      shouldValidate: true,
      type: 'text',
      label: 'Логин',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    password: {
      value: '',
      errorMessage: [],
      touched: false,
      valid: false,
      shouldValidate: true,
      type: 'password',
      label: 'Пароль',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
  };
}

export default function Auth() {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [formControls, setFormControls] = React.useState(createFormControls());

  //form validation
  function validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;
    let error = [];

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
      if (!(value.trim() !== '')) error.push(validation.required.errorMessage);
    }

    return { isValid, error };
  }

  const onInputChangeHandler = (event, controlName) => {
    const form = { ...formControls };
    const control = { ...form[controlName] };

    control.value = event.target.value;
    control.touched = true;
    const validation = validateControl(control.value, control.validation);
    control.valid = validation.isValid;
    control.errorMessage = validation.error;
    form[controlName] = control;

    let isFormValid = true;
    Object.keys(form).forEach((name) => {
      isFormValid = form[name].valid && isFormValid;
    });

    setIsFormValid(isFormValid);
    setFormControls(form);
  };

  const buttonClickHandler = (data) => {
    setFormControls(createFormControls());
  };

  function renderInputs() {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];
      return (
        <div key={controlName + index} className="col">
          <Input
            label={control.label}
            value={control.value}
            type={control.type}
            errorMessage={control.errorMessage}
            valid={control.valid}
            touched={control.touched}
            validation={control.validation}
            shouldValidate={control.shouldValidate}
            onChange={(event) => onInputChangeHandler(event, controlName)}
          />
        </div>
      );
    });
  }

  return (
    <div className={classes.central}>
      <div className={classes.Auth}>
        <h2 className={classes.Auth__title}>Авторизация</h2>
        {renderInputs()}
        <Button disabled={!isFormValid} onClick={() => buttonClickHandler(formControls)}>
          Войти
        </Button>
      </div>
    </div>
  );
}
