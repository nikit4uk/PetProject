import React, { Component } from 'react';
import NewsItems from '../store/NewsItems';
import { Link } from 'react-router-dom';
import '../styles/news.css';


export default class News extends Component {
  render() {
    let newsElements = NewsItems.map((NewsItems, i) => {
      return(
        <div className="news-items" key={`news-items-${NewsItems.id}`}>
          <Link to={`/news/${NewsItems.id}`}>
            <img src={NewsItems.mainPhoto} alt="" />
            <h4>{NewsItems.title}</h4>
          </Link>
        </div>
      )
    });
    return (
      <div id='news' className="container">
        <h1 className='page-title'>Latest News</h1>
        <div className="news-wrapper">
          {newsElements}
        </div>
      </div>
    )
  }
}