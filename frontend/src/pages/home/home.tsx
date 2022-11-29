// #: REACT
import React from 'react';

// #: IMG
import logo from '../../img/logo.png';

export function HomePage () {
  return (
    <>
      <div className='home'>
        <div className='header'>
          <img src={logo} alt='logo'/>
          <div className='header-menu'>
            <ul className='header-menu__ul'>
              <li>О НАС</li>
              <li>ГЛАВНАЯ</li>
              <li>НОВОСТИ</li>
              <li>МАГАЗИН</li>
              <li>ЛИЧНЫЙ КАБИНЕТ</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};