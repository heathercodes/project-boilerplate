import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  labelText?: string;
  labelIsHidden: boolean;
  id: string;
  type: string;
  value: any;
  disabled: boolean;
  handleChange(val: any): void;
  overrideStyles?: any;
}

export function Input({
  disabled,
  labelText,
  type,
  id,
  handleChange,
  labelIsHidden,
  value,
  overrideStyles,
}: InputProps): JSX.Element {
  const isHidden = labelIsHidden ? styles.accessiblyHidden : styles.label;

  return (
    <fieldset disabled={disabled} className={`${styles.fieldset}, ${overrideStyles}`}>
      <label htmlFor={id} className={isHidden}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={handleChange}
        className={styles.input}
        value={value}
      />
    </fieldset>
  );
}
