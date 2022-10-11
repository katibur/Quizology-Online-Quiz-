import React from 'react';

const Options = ({ option }) => {
    return (
        <div>

            <input type="radio" name="size" value="XS" id="option"></input>
            <label for="xs">{option}</label>

        </div>
    );
};

export default Options;