import React from 'react';
import './Blog.css'

const Blog = ({ bookmark }) => {

    return (
        <div className='blog'>
            <span>{bookmark}</span>

        </div>
    );
};

export default Blog;