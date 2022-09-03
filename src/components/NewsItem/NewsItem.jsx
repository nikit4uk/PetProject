import React from "react";
import { useParams } from 'react-router-dom';
import NewsItems from '../../store/NewsItems';
import './newsItem.css';
import { Link } from 'react-router-dom';


const NewsItem = () => {
    let { id } = useParams();

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

    let NewsElement = NewsItems.map((i) => {
        if(i.id == id ){
            return(
                <div className='news-item'>
                    <div className='news-item-overlay' style={{ backgroundImage: `url(${i.mainPhoto})`}}>
                        <h1 className='page-title'>{i.title}</h1>
                    </div>
                    <div className='container'>
                        <div className='news-item-info'>
                            {i.paragraph1 && <h4>{i.paragraph1}</h4> }
                            {i.paragraph2 && <p>{i.paragraph2}</p> }
                            {i.photo && <img src={i.photo} alt={i.title}/> }
                            {i.paragraph3 && <p>{i.paragraph3}</p> }
                            {i.paragraph4 && <p>{i.paragraph4}</p> }
                            {i.paragraph5 && <p>{i.paragraph5}</p> }
                            {i.video && 
                                <iframe width="560" height="315" src={i.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            }
                        </div>
                        <aside>
                            {newsElements}
                        </aside>
                    </div>
                </div>
            )
        }
    })

    return (
        <React.Fragment>
            {NewsElement}
        </ React.Fragment>
    )
}

export default NewsItem;