import React from 'react';
import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Quizes = ({ quizes, checkBtnHandler }) => {

    const { id, name, logo, total } = quizes;



    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img className='bg-dark' variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Topis Name: {name}</Card.Title>
                    <Card.Text>
                        Total Questions: {total}
                    </Card.Text>
                    <Link to={`../quiz/${id}`}><Button variant="primary">Check Yourself</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quizes;
