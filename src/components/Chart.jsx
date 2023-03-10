import {
  LineChart,
  Line,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import React from "react";

function Chart() {


    
    const current = new Date()
  const data = [
    {
      name: current.getDate()-5,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: current.getDate()-4,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: current.getDate()-3,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: current.getDate()-2,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: current.getDate()-1,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: current.getDate(),
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <main className="mt-4">
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> */}
        <XAxis dataKey='name'>
        <Label value={`Month of ${current.getMonth()}`} offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </main>
  );
}

export default Chart;
