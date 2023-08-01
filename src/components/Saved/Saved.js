import React from 'react';
import './Saved.css';
import Blog from '../Blog/Blog';

const Saved = ({ time, bookmark }) => {
    let spentTime = 0;
    for (const news of time) {
        spentTime = spentTime + news.time;
    }
    // console.log(time);
    // console.log(bookmark);
    let bookmarks = [];
    // bookmark.find(bookmark => [...bookmarks, bookmark])
    for (const news of bookmark) {
        bookmarks = [...bookmarks, news.about];
    }

    // console.log(bookmark);
    // console.log(time);
    // console.log(spentTime);


    return (
        <div className='saved-container'>
            <div className='time'>Spent Time on read: {spentTime} min</div>

            <div className='blogs'>
                <h3>Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Blog bookmark={bookmark}></Blog>)
                }

            </div>
        </div>
    );
};

export default Saved;