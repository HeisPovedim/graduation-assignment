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
              <li><span>О НАС</span></li>
              <li><span>ГЛАВНАЯ</span></li>
              <li><span>НОВОСТИ</span></li>
              <li><span>МАГАЗИН</span></li>
              <li><span>ЛИЧНЫЙ КАБИНЕТ</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};