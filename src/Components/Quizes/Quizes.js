import React from 'react';

const Quizes = ({ quizes }) => {

    const { name, logo, total } = quizes;
    return (
        <div>
            <h2>{name}</h2>
            <img src={logo} alt="" />
            <p>{total}</p>
        </div>
    );
};

export default Quizes;