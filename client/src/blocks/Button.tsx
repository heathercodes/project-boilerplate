/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick(value?: any): void;
  text: string;
  disabled?: boolean;
  overrideStyles?: any;
}

export function Button({
  type,
  text,
  onClick,
  disabled,
  overrideStyles,
}: ButtonProps): React.ReactElement {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button}, ${overrideStyles}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
