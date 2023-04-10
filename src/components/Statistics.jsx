import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import img from '../assets/All Images/Vector.png'
import imgtwo from '../assets/All Images/Vector-1.png'


const Statistics = () => {
  // const [chartData, setChartData] = useState({});
  const data = [
    { x: 1, y: 60 },
    { x: 2, y: 50 },
    { x: 3, y: 52 },
    { x: 4, y: 60 },
    { x: 5, y: 37 },
    { x: 6, y: 56 },
    { x: 7, y: 58 },
    { x: 8, y: 54 },
  ];



 

  return (
    <>
           <div className='flex justify-between items-center'>
     <div > <img src={img} alt="" /></div>
     <h1 className='text-4xl font-semibold'>Statistics Assignment Marks</h1>
      <div><img src={imgtwo} alt="" /></div>
     </div>
   
    <div className='flex justify-center items-center mt-8'>
         <ScatterChart width={500} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" name="Assignment Number" />
      <YAxis type="number" dataKey="y" name="Assignment Mark" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Assignment Marks" data={data} fill="#8884d8" />
    </ScatterChart>
    </div>
    </>
  );
};

export default Statistics;
