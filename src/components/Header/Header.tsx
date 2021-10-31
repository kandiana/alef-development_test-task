import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/imgs/Logo.svg';

import './Header.scss';

export const Header: FC = () => {
  return (
    <header className="Header">
      <Logo />
      <nav className="Header__nav">
        <Link to="/form" className="Header__nav-link">
          Форма
        </Link>
        <Link to="/preview" className="Header__nav-link">
          Превью
        </Link>
      </nav>
    </header>
  );
};
