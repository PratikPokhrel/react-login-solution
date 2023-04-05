import React, { Component } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const TABLE_LIST = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 }
];

export default class JointScatterChartEx extends Component {
  state = {
    list: [...TABLE_LIST]
  };

  render() {
    const { list } = this.state;
    return (
      <ScatterChart
        width={400}
        height={300}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {/* <CartesianGrid /> */}
        <XAxis type="number" dataKey={"x"} name="stature" unit="cm" />
        <YAxis type="number" dataKey={"y"} name="weight" unit="kg" />
        <ZAxis range={[100]} />
        {/* <Tooltip cursor={{ strokeDasharray: "3 3" }} /> */}
        <Legend />
        <Scatter name="A school" data={list} fill="#8884d8" line  />
      </ScatterChart>
    );
  }
}
