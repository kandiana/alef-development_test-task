import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import { useRef } from 'react';
import { FC } from 'react';

import './FormControl.scss';

export type FormControlProps = {
  name: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  inputMode?: HTMLAttributes<FormControlProps>['inputMode'];
};

export const FormControl: FC<FormControlProps> = ({
  name,
  label,
  value,
  onChange,
  inputMode = 'text',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const filterNonNumbers = () => {
    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value.replace(/\D/g, '');
    }
  };

  return (
    <div className="Form-control" onClick={handleClick}>
      <p className="Form-control__label">{label}</p>
      <input
        className="Form-control__input"
        name={name}
        value={value}
        inputMode={inputMode}
        ref={inputRef}
        onChange={onChange}
        onInput={inputMode === 'numeric' ? filterNonNumbers : undefined}
      />
    </div>
  );
};
