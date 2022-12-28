// #: REACT
import React from 'react';
import axios from 'axios';

// #: IMG
import logo from '../../img/logo.png';

// #: COMPONENTS
import { News } from '../../components/News';

// #: OBJECT
import { news } from '../../data/news';

export function HomePage () {
  // const [postNews, setPostNews] = React.useState([]);

  // React.useEffect(() => { // ?: получение всех постов из БД
  //   const fecthAllPostNews = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:5000/news');
  //       setPostNews(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fecthAllPostNews();
  // }, []);

  // console.log(postNews[0]);

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
        <News/>
      </div>
    </>
  );
};