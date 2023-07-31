import React from 'react';
import './Main.css';
import News from '../News/News';
import Saved from '../Saved/Saved';
const Main = () => {
    return (
        <div className='main-container'>
            <div>
                <News></News>
            </div>

            <div>
                <Saved></Saved>
            </div>
        </div>
    );
};

export default Main;