import React from "react";
import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
    Legend,
} from "recharts";

const genreData = [
    { name: "Action", value: 400 },
    { name: "Drama/Comedy", value: 300 },
    { name: "Historical", value: 200 },
    { name: "Romantic", value: 150 },
    { name: "Horror", value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733'];
const COLORL = ['#1D7874', '#A8DADC', '#F4A261', '#E76F51', '#2A9D8F'];
function GenreChart({ theme }) {
    const Mode = theme === "light" ? COLORL : COLORS;
    return (
        <div className={`chart-containers text-white p-4 ${theme === 'light' ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#F8F8F8" : "#3F4E4F" }}>
            <h5 className={` ${theme === "light" ? "text-dark" : "text-light"}`}>🎬 Movie Genres</h5>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#fff",
                            border: "1px solid #fff",
                            borderRadius: "8px",
                            color: "#000",
                            padding: "10px",
                        }}
                    />
                    <Legend />
                    <Pie
                        data={genreData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {genreData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={Mode[index % Mode.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GenreChart;