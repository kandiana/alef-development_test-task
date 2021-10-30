import { FC, ReactElement } from 'react';
import classnames from 'classnames';

import './Button.scss';

type child = ReactElement | String;

export type ButtonProps = {
  children: child | child[];
  filled?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, filled = false }) => {
  const ButtonClasses = classnames('Button', { Button_filled: filled });
  return <button className={ButtonClasses}>{children}</button>;
};
