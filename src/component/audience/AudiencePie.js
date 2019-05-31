import React, { PureComponent } from "react";
import {
    PieChart,
    Pie,
    Legend,
    Sector,
    Cell,
    ResponsiveContainer
} from "recharts";
import { Container, Row, Col, Button } from "reactstrap";
import classes from "./Audience.module.scss";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const style = {
    top: 0,
    lineHeight: "24px"
};

export default class AudiencePie extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="86%">
                <PieChart onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={data}
                        cx={80}
                        cy={80}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={style}
                    />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
