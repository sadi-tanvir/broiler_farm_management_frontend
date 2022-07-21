import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell } from "recharts";

const Piechart = () => {
  // redux
  const { buyChicken, deathChickens } = useSelector(state => state.loginReducer)


  // total death of Chicks
  const totalDeathArr = deathChickens.map(chicks => {
    return chicks.death
  })
  const totalDeath = totalDeathArr.reduce((pre, curr) => pre + curr, 0)

  const data = [
    {
      "chicks": buyChicken.quantity - totalDeath,
    },
    {
      "chicks": totalDeath,
    }
  ]

  // colors
  const COLORS = ["#1dd1a1", "#ee5253"];

  //   radian
  const RADIAN = Math.PI / 180;

  //   render customized
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="order-2 order-md-1">
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="chicks"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Piechart;
