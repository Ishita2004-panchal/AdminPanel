import React from 'react'
import image1 from './statsTicket.png';
import activityD from './activity.png';
import activityL from './lightactivity.png';
// import { FiActivity } from "react-icons/fi";

function RecentActivity({ theme }) {
    const activity = [
        { icons: image1, head: "  Pushpa2 added to catalog", time: "2 hours ago" },
        { icons: image1, head: " Kantara 2 added to catalog", time: "4 hours ago" },
        { icons: image1, head: " Kantara 2 added to catalog", time: "6 hours ago" }
    ]
    return (
        <div className={`Activity mt-5 rounded-2 p-3 mb-3 ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#F8F8F8" : "#3F4E4F" }}>
            <div className='d-flex text-light mt-3 activityicons'>
                <img src={theme === "light" ? activityL : activityD} />
                <h5 className={`${theme === "light" ? "text-dark" : "text-light"}`}>Recent Activity</h5>
            </div>
            {activity.map((activity, index) => (
                <div className='icons text-white d-flex mt-3 bg-' key={index} style={{ backgroundColor: theme === "light" ? "#B9BABB" : "#212529" }}>
                    <div>
                        <img src={activity.icons} className='mt-3 mx-3' />
                    </div>
                    <div className={`${theme === "light" ? "text-dark" : "text-light"}`}>
                        <h3 className='mt-3'>{activity.head}</h3>
                        <p className='text-secondary'>{activity.time}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default RecentActivity