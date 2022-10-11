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

    const notify = () => toast(`Correct Answer is: ${correctAnswer}`);

    const optionBtnHandler = (option) => {
        if (option === correctAnswer) {
            toast.success("Wow,That's The Right Answer.")
        }
        else {
            toast.warning('Wrong Answer');
        }
    }


    return (
        <div className='question-answer-container'>
            <h4>Question: {mainQuestion}
                <button className='check-btn rounded' onClick={notify}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                <ToastContainer />
            </h4>

            <h6 className='bg-secondary px-3 py-2 rounded w-25'>Options:</h6>
            <div >
                {
                    options.map((option, id) => <Options
                        key={id}
                        optionBtnHandler={optionBtnHandler}
                        option={option}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;