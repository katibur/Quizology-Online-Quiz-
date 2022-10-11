import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from '../Options/Options';
import './Questions.css';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Questions = ({ questions }) => {
    const { correctAnswer, question, options } = questions;

    const remove1sttag = question.replace('<p>', '');
    const mainQuestion = remove1sttag.replace('</p>', '');

    console.log(questions, mainQuestion, options);


    const notify = () => toast(correctAnswer);



    return (
        <div className='question-answer-container'>
            <h4>Question: {mainQuestion}
                <button className='check-btn rounded' onClick={notify}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                <ToastContainer />
            </h4>

            <h6 className='bg-secondary px-4 py-2 rounded w-25'>Options:</h6>
            <div className='options container'>
                {
                    options.map(option => <Options

                        option={option}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;