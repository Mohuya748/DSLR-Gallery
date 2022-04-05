import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className="w-4/5 h-fit mx-auto gap-4 grid grid-cols-1 md:grid-cols-2">
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default Dashboard;