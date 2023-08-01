import React from 'react';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

const News = ({ news, handleTime, handleBookmark }) => {
    const { name, picture, about, registered, tags, time } = news;

    return (
        <div className='news-container'>
            <img src={picture} alt="" />
            <div className='info'>
                <div className='profile'>
                    <div>
                        <img src="http://via.placeholder.com/60x60" alt="" />
                    </div>
                    <div className='profile-info'>
                        <h3>{name}</h3>
                        <small>{registered}</small>
                    </div>
                </div>
                <div>
                    <small>{time} min read</small> <br /><br />
                    <FontAwesomeIcon onClick={() => handleBookmark(news)} className='icon' icon={faBookmark} />
                </div>
            </div>
            <div className='others'>
                <h2>{about}</h2>
                <div className='tags'>
                    <p>#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                    <p>#{tags[2]}</p>
                </div>
                <button onClick={() => handleTime(news)}>Mark As Read</button>
            </div>
        </div>
    );
};

export default News;