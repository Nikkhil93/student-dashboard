import React from 'react';
import classes from './Input.css';

const input = props => {
  let inputElement = null;
  let errorMessage = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    errorMessage = (
      <div className={classes.ValidationError}>
        Please enter appropriate {props.valueName}
      </div>
    );
  }

  inputElement = (
    <input
      className={inputClasses.join(' ')}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
    />
  );

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.valueName}</label>
      {inputElement}
      {errorMessage}
    </div>
  );
};

export default input;
