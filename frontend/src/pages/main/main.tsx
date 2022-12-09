// #: REACT
import React from 'react';

// #: IMG
import logo from '../../img/logo.png';

// #: COMPONENTS
import { News } from '../../components/News';

// #: OBJECT
import { news } from '../../data/news';

export function HomePage () {
  return (
    <>
      <header>
        <img src={logo} alt="logo"/>
        <div className="header-menu">
          <ul className="header-menu__ul">
            <li><span>О НАС</span></li>
            <li><span>ГЛАВНАЯ</span></li>
            <li><span>НОВОСТИ</span></li>
            <li><span>МАГАЗИН</span></li>
            <li><span>ЛИЧНЫЙ КАБИНЕТ</span></li>
          </ul>
        </div>
      </header>
      <div className="main_content">
        <News news={news[0]} />
      </div>
    </>
  );
};