import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Home = () => {
    const loadedData = useLoaderData();
    const quizesData = loadedData.data;
    console.log(quizesData);


    return (
        <div>
            <h1>Want To Check Your Ability?</h1>
            {
                quizesData.map(quizes => <Quizes
                    key={quizes.id}
                    quizes={quizes}
                ></Quizes>)
            }
        </div>
    );
};

export default Home;