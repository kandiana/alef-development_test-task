import { HTMLAttributes } from 'react';
import { useRef } from 'react';
import { FC } from 'react';

import './FormControl.scss';

export type FormControlProps = {
  name: string;
  label: string;
  inputMode?: HTMLAttributes<FormControlProps>['inputMode'];
};

export const FormControl: FC<FormControlProps> = ({ name, label, inputMode = 'text' }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="Form-control" onClick={handleClick}>
      <p className="Form-control__label">{label}</p>
      <input className="Form-control__input" name={name} inputMode={inputMode} ref={inputRef} />
    </div>
  );
};
