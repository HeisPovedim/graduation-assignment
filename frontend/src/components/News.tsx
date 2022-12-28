// #: REACT
import React from 'react';
import axios from 'axios';

// #: MODELS
import { IPostNews } from '../models';

const News = () => {
  // const [postNews, setPostNews] = React.useState([]);
  const [postNews, setPostNews] = React.useState<IPostNews[]>([]);

  React.useEffect(() => { // ?: получение всех постов из БД
    const fecthAllPostNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/news');
        setPostNews(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fecthAllPostNews();
  }, []);

  return (
    <>
      { postNews.map( item => (
          <div className="main_content_news" key={item.id}>
            <h1>{item.title}</h1>
            <div className="main_content_news_base">
              <div className="main_content_news_base__img">
                <img src={"../img/" + item.img} alt="img"/>
              </div>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
    </>
  )
}

export { News };