import React from 'react';
import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

const Quizes = ({ quizes }) => {

    const { name, logo, total } = quizes;
    return (
        <div className='quizes-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {total}
                    </Card.Text>
                    <Button variant="primary">Check Yourself</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quizes;
