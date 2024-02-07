import React from "react";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import datas from "../datas";



const Chart = () => {
       
  return (
   <div>
     <ResponsiveContainer aspect={4}>
      <LineChart width="100%" height="100%" data={datas}>
        <Line type="monotone" dataKey={datas} stroke="#5555" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
   </div>
  );
};

export default Chart;
