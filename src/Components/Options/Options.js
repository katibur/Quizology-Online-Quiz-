import React from 'react';


const Options = ({ option }) => {
    return (
        <div>
            <input type="radio" name="size" id="option"></input>
            <label className='ms-2'>{option}</label>

        </div>
    );
};

export default Options;