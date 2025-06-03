import React from "react";
import image1 from './statsTicket.png'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
    LabelList,
} from "recharts";
// import "./dashboard.css";

const data = [
    { name: "Chhava", tickets: 400 },
    { name: "Pushpa 2", tickets: 300 },
    { name: "Umbaro", tickets: 250 },
    { name: "Faati ne?", tickets: 180 },
    { name: "Umbaro", tickets: 250 },
    { name: "Faati ne?", tickets: 180 },
    { name: "Umbaro", tickets: 250 },
    { name: "Faati ne?", tickets: 180 },
];

function MovieChart({ theme }) {

    return (
        <div className={`chart-containers p-4 ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#F8F8F8" : "#3F4E4F" }}
        >
            <h5 className={` ${theme === "light" ? "text-dark" : "text-light"}`}>🎥 Movie Performance</h5>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart

                    data={data}

                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                    <XAxis


                        dataKey="name"

                        stroke={theme === "light" ? "#000" : "#fff"}

                        tick={{

                            angle: -45,

                            textAnchor: "end",

                            fontSize: 12,
                            fill: theme === "light" ? "#000" : "#fff"

                        }}

                        interval={0}

                        height={60}

                    />
                    <YAxis stroke={theme === "light" ? "#000" : "#fff"} />
                    <Tooltip

                        contentStyle={{

                            backgroundColor: theme === "light" ? "#fff" : "#333",

                            border: `1px solid ${theme === "light" ? "#ccc" : "#555"}`,

                            borderRadius: "8px",

                            color: theme === "light" ? "#000" : "#fff",

                            padding: "10px",

                        }}
                        labelStyle={{ color: theme === 'light' ? "#000" : "#fff" }}
                        itemStyle={{ color: theme === "light" ? "#000" : "#fff" }}
                        cursor={{ fill: theme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)" }}

                    />
                    <Bar

                        dataKey="tickets"

                        name="Ticket sold"

                        fill={theme === "light" ? "#457B9D" : "#8884d8"}

                        radius={[4, 4, 0, 0]}
                    >
                        <LabelList

                            dataKey="tickets"

                            position="top"

                            fill={theme === "light" ? "#000" : "#fff"}

                            formatter={(value) => value.toLocaleString()}

                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div >

    );

}


// function MovieChart() {
//     return (
//         <div className="chart-containers text-white p-3 mb-4 mt-4 ">
//             <h5 className="mb-5">🎥 Movie Performance</h5>
//             < ResponsiveContainer width="100%" className="bar-graph" >
//                 <BarChart data={data}>
//                     <XAxis dataKey="name" stroke="#fff"
//                         tick={{
//                             angle: -45,
//                             textAnchor: "end",
//                             // dy: 10
//                         }} />
//                     <YAxis stroke="#fff" />
//                     <Tooltip
//                         contentStyle={{
//                             // backgroundColor: "rgba(33, 30, 30, 0.1)",
//                             backgroundColor: "#fff",
//                             border: "1px solid #fff",
//                             borderRadius: "8px",
//                             color: "#000",
//                             padding: "10px",
//                         }}
//                         cursor={{
//                             fill: "rgba(33, 30, 30, 0.1)",
//                         }}
//                     />
//                     {/* <Legend
//                         // wrapperStyle={{ color: "#fff" }}
//                         content={() => (
//                             <div className="ticketimg d-flex  justify-content-center gap-2 " style={{ color: "#fff", fontWeight: "bold" }}>
//                                 <img src={image1} />
//                                 <p>Ticket sold</p>
//                             </div>
//                         )}
//                     /> */}
//                     <Bar dataKey="tickets" name="Ticket sold" fill="#212529" activeBar={{ color: "#fff" }} >
//                         <LabelList dataKey="tickets" position="top" fill="#fff" />
//                     </Bar>
//                 </BarChart>
//             </ ResponsiveContainer>
//         </div >
//     );
// }

export default MovieChart;
