import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';

const Quiz = () => {

    const quizQuestions = useLoaderData();
    const quizQuestionsData = quizQuestions.data;

    const { name } = quizQuestionsData;
    const totalQuestions = quizQuestionsData.questions;



    return (
        <div className='main-container'>
            <h3>Questions On: <span className='fw-bold bg-info px-3 py-2 rounded'>{name}</span></h3>
            <div className='quiz-container'>
                {
                    totalQuestions.map(questions => <Questions
                        key={questions.id}
                        questions={questions}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;