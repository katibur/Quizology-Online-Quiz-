import React from 'react';
import './Options.css';


const Options = ({ option, optionBtnHandler }) => {
    return (
        <div className='options-container'>
            <input onClick={() => optionBtnHandler(option)} type='radio' name='quiz' id={option} />
            <label className='ms-2' htmlFor={option}>{option}</label>

        </div>
    );
};

export default Options;