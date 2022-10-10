import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import './Statistics.css';

const Statistics = () => {
    const statistics = useLoaderData();
    const statisticsData = statistics.data;
    // console.log(statisticsData);



    return (
        <div className='statistics-container'>
            <h2>Statistics:</h2>
            <div className='chart'>
                <LineChart width={400} height={300} data={statisticsData}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>

            </div>
            <h2>Statistics Between The Total Questions And Topic-Name.</h2>
        </div>
    );
};

export default Statistics;