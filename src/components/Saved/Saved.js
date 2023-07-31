import React from 'react';
import './Saved.css';
import Blog from '../Blog/Blog';
const Saved = () => {
    return (
        <div className='saved-container'>
            <div className='time'>Spent Time on read: 0 min</div>

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