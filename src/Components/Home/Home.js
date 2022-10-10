import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

import './Home.css';

const Home = () => {
    const loadedData = useLoaderData();
    const quizesData = loadedData.data;
    console.log(quizesData);


    return (
        <div>
            <h1>Want To Check Your Ability?</h1>
            <div className='quizes-container'>
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