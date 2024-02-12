import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

const Chart = ({ data, dataKey }) => {
  return (
    <div>
      <ResponsiveContainer aspect={4}>
        <LineChart width="100%" height="100%" data={data}>
          <Line type="monotone" dataKey={dataKey} stroke="#5555" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
