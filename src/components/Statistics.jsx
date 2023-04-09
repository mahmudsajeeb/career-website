import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const Statistics = () => {
  // const [chartData, setChartData] = useState({});
  const data = [
    { x: 1, y: 60 },
    { x: 2, y: 65 },
    { x: 3, y: 70 },
    { x: 4, y: 75 },
    { x: 5, y: 80 },
    { x: 6, y: 85 },
    { x: 7, y: 90 },
  ];



 

  return (
    <div>
         <ScatterChart width={500} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" name="Assignment Number" />
      <YAxis type="number" dataKey="y" name="Assignment Mark" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Assignment Marks" data={data} fill="#8884d8" />
    </ScatterChart>
    </div>
  );
};

export default Statistics;
