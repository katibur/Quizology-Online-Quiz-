import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

import './Home.css';

const Home = () => {
    const loadedData = useLoaderData();
    const quizesData = loadedData.data;
    console.log(quizesData);


    return (
        <div className='quizes-container'>
            <h1 className='fw-bold'>Want To Check Your Ability?</h1>
            <div className='quize-container'>
                {
                    quizesData.map(quizes => <Quizes
                        key={quizes.id}
                        quizes={quizes}
                    ></Quizes>)
                }
            </div>

        </div>
    );
};

export default Home;