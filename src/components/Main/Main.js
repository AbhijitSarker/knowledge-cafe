import React, { useEffect, useState } from 'react';
import './Main.css';
import News from '../News/News';
import Saved from '../Saved/Saved';
import { addBookmark, getStoredBookmarks } from '../../utilities/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    const [newses, setNewses] = useState([]);
    const [time, setTime] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch("api.json")
            .then(response => response.json())
            .then(data => setNewses(data));
    }, []);

    useEffect(() => {
        const storedBookmarks = getStoredBookmarks();
        const savedBookmarks = [];

        for (const id in storedBookmarks) {

            const addedBookmark = newses.find(news => news.id === id);

            if (addedBookmark) {
                savedBookmarks.push(addedBookmark);
            }

        }
        setBookmark(savedBookmarks);
    }, [newses])

    const handleTime = (selectedTime) => {
        let newTime = [];
        const exists = time.find(time => time.id === selectedTime.id);

        if (!exists) {
            newTime = [...time, selectedTime];
        } else {
            const rest = time.filter(time => time.id !== selectedTime.id);
            newTime = [...rest, selectedTime]
        }

        setTime(newTime);
    }

    const handleBookmark = (selectedNews) => {
        let newBookmark = [];
        const exists = bookmark.find(bookmark => bookmark.id === selectedNews.id);

        if (!exists) {
            newBookmark = [...bookmark, selectedNews];
            toast("Bookmarked!");
        } else {
            const rest = bookmark.filter(bookmark => bookmark.id !== selectedNews.id);
            newBookmark = [...rest, selectedNews]
            toast("Already in Bookmark!");
        }

        setBookmark(newBookmark);
        addBookmark(selectedNews.id);
    }

    return (

        <div className='main-container'>
            <div>
                {
                    newses.map(news => <News
                        key={news.id}
                        news={news}
                        handleTime={handleTime}
                        handleBookmark={handleBookmark}
                    ></News>)
                }

            </div>

            <div>
                <Saved
                    time={time}
                    bookmark={bookmark}
                ></Saved>
            </div>
        </div>
    );
};

export default Main;