import React, { useEffect, useState } from 'react';
import './Main.css';
import News from '../News/News';
import Saved from '../Saved/Saved';
const Main = () => {
    const [newses, setNewses] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch("api.json")
            .then(response => response.json())
            .then(data => setNewses(data));
    }, []);

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

    // const handleSave = 
    return (

        <div className='main-container'>
            <div>
                {
                    newses.map(news => <News
                        key={news.id}
                        news={news}
                        handleTime={handleTime}
                    ></News>)
                }

            </div>

            <div>
                <Saved
                    time={time}
                ></Saved>
            </div>
        </div>
    );
};

export default Main;