import React from 'react';
import './News.css';
const News = ({ news, handleSaved }) => {
    // console.log(news);
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
                    <small>{time} min read</small>
                </div>
            </div>
            <div className='others'>
                <h2>{about}</h2>
                <div>
                    <p>#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                    <p>#{tags[2]}</p>
                </div>
                <button onClick={() => handleSaved(news)}>Mark As Saved</button>
            </div>
        </div>
    );
};

export default News;