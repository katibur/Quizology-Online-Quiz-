import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import './Statistics.css';

const Statistics = () => {
    const statistics = useLoaderData();
    const statisticsData = statistics.data;
    // console.log(statisticsData);

    return (
        <div className='statistics-container'>
            <h2>Statistics:</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={statisticsData}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey='total' barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="total" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
            <h2>Statistics Between The Total Questions And Topic-Name.</h2>
        </div>
    );
};

export default Statistics;