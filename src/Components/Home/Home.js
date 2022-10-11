import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import './Home.css';

import logo from './banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const loadedData = useLoaderData();
    const quizesData = loadedData.data;

    return (
        <div className='quizes-container'>

            <div className='page-header d-flex'>
                <div className='header-img w-25'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='bg-info'>
                    <h2 className='text-white fw-bolder'>Quizology Offers You The Most Informative Questions Ever. <FontAwesomeIcon icon={faWalkieTalkie}></FontAwesomeIcon></h2>
                </div>
                <div className='header-img w-25'>
                    <img src={logo} alt="Logo" />
                </div>
            </div>

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