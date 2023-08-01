import React, { useEffect, useState } from 'react';
import './Main.css';
import News from '../News/News';
import Saved from '../Saved/Saved';
const Main = () => {
    const [newses, setNewses] = useState([]);
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        fetch("api.json")
            .then(response => response.json())
            .then(data => setNewses(data));
    }, []);

    const handleSaved = (news) => {
        const newSaved = [...saved, news];
        setSaved(newSaved);

    }
    return (

        <div className='main-container'>
            <div>
                {
                    newses.map(news => <News
                        key={news.id}
                        news={news}
                        handleSaved={handleSaved}
                    ></News>)
                }

            </div>

            <div>
                <Saved
                    saved={saved}
                ></Saved>
            </div>
        </div>
    );
};

export default Main;