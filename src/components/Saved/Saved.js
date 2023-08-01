import React from 'react';
import './Saved.css';
import Blog from '../Blog/Blog';
const Saved = ({ time }) => {
    let spentTime = 0;
    for (const news of time) {
        spentTime = spentTime + news.time;
    }
    return (
        <div className='saved-container'>
            <div className='time'>Spent Time on read: {spentTime} min</div>

            <div className='blogs'>
                <h3>Bookmarked Blogs: 0</h3>
                <Blog></Blog>
                <Blog></Blog>
                <Blog></Blog>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Saved;