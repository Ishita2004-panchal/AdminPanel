import React from "react";
import image1 from './statsTicket.png'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const dailyData = [
    { date: "Mon", tickets: 30 },
    { date: "Tue", tickets: 45 },
    { date: "Wed", tickets: 20 },
    { date: "Thur", tickets: 50 },
    { date: "Fri", tickets: 70 },
    { date: "Sat", tickets: 90 },
    { date: "Sun", tickets: 60 },
];

function DailyTicketChart({ theme }) {
    return (
        <div className={`chart-containers p-3 text-white  ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#F8F8F8" : "#3F4E4F" }}>
            <h5 className={` ${theme === "light" ? "text-dark" : "text-light"}`}>📅 Daily Bookings</h5>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyData} >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="date" stroke={theme === "light" ? "#000" : "#fff"} />
                    <YAxis stroke={theme === "light" ? "#000" : "#fff"} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: theme === "light" ? "#fff" : "#333",
                            border: `1px solid ${theme === "light" ? "#ccc" : "#555"}`,
                            borderRadius: "8px",
                            color: theme === "light" ? "#3F4E4F" : "#fff",
                            padding: "10px",
                        }}
                        labelStyle={{ color: theme === "light" ? "#000" : "#fff" }}
                        itemStyle={{ color: theme === "light" ? "#000" : "#fff" }}
                        cursor={{ fill: theme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)" }}

                    />
                    <Legend
                        // wrapperStyle={{ color: "#fff" }}
                        content={() => (
                            <div className="ticketimg d-flex  justify-content-center gap-2" style={{ color: "#fff", fontWeight: "bold" }}>
                                <img src={image1} />
                                <p>Ticket sold</p>
                            </div>
                        )}
                    />
                    <Line type="monotone" dataKey="tickets" stroke={` ${theme === "light" ? "#000" : "#fff"}`} activeDot={{ r: 8 }} dot={{ r: 4, stroke: theme === "light" ? "#000" : "#fff" }} />
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
}

export default DailyTicketChart;