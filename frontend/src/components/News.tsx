// #: REACT
import React from 'react';
import axios from 'axios';

// #: MODELS
import { INews } from '../models';

// #: TYPESCRIPT
interface NewsProps {
  news: INews,
  post: Object
}

const News = ({news}: NewsProps, {post}: NewsProps) => {
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

  // console.log(postNews);

  React.useEffect(() => console.log(post), [])

  return (
    <>
      <div className="main_content_news">
          <h1>{news.title}</h1>
          {/* <h1>{postNews[0].title}</h1> */}
          <div className="main_content_news_base">
            <div className="main_content_news_base__img">
              <img src={news.image} alt="img"/>
            </div>
            <span>{news.text}</span>
          </div>
      </div>
    </>
  )
}

export { News };