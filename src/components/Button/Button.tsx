import { FC, MouseEventHandler, ReactElement } from 'react';
import classnames from 'classnames';

import './Button.scss';

type child = ReactElement | String;

export type ButtonProps = {
  children: child | child[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  filled?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, onClick, filled = false }) => {
  const ButtonClasses = classnames('Button', { Button_filled: filled });
  return (
    <button className={ButtonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
