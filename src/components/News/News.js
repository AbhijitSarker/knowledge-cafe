import React from 'react';
import './News.css';
const News = () => {
    return (
        <div className='news-container'>
            <img src="http://via.placeholder.com/850x450" alt="" />
            <div className='info'>
                <div className='profile'>
                    <div>
                        <img src="http://via.placeholder.com/60x60" alt="" />
                    </div>
                    <div className='profile-info'>
                        <h3>mr Rahu</h3>
                        <small>mar 12 </small>
                    </div>
                </div>
                <div>
                    <small>5 min read</small>
                </div>
            </div>
            <div className='others'>
                <h2>hello</h2>
                <div>
                    <p>#beginners</p>
                </div>
                <button>Mark As Saved</button>
            </div>
        </div>
    );
};

export default News;