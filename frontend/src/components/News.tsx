// #: REACT
import React from 'react';

// #: MODELS
import { INews } from '../models';

// #: TYPESCRIPT
interface NewsProps {
  news: INews
}

const News = ({news}: NewsProps) => {
  return(
    <>
      <div className="main_content_news">
          <h1>{news.title}</h1>
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