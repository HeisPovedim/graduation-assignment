// #: REACT
import React from 'react';
import { Link } from 'react-router-dom';

// #: IMG
import logo from '../../img/logo.png';

const Header = () => {

  return (
    <>
      <header>
        {/* <img src={logo} alt="logo"/> */}
        <div className="header-menu">
          <ul className="header-menu__ul">
            <li><span>О НАС</span></li>
            <li><span>ГЛАВНАЯ</span></li>
            <li><Link to="/"><span>НОВОСТИ</span></Link></li>
            <li><span>МАГАЗИН</span></li>
            <li><Link to="/personal_account"><span>ЛИЧНЫЙ КАБИНЕТ</span></Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export { Header };