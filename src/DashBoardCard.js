import React from 'react'
import image1 from "./statsTicket.png";
import image2 from "./statscash.png";
import image3 from "./statsuser.png";
import image4 from "./statsmovie.png";
import imageL1 from "./ticketL.png";
import imageL2 from "./userL.png";
import imageL4 from "./movieL.png"
function DashBoardCard({ theme }) {
    const stats = [
        { title: "Total Booking", value: 200, icon: image1, iconLight: imageL1 },
        { title: " Revenue", value: 1200, icon: image2, iconLight: image2 },
        { title: "Users", value: 200, icon: image3, iconLight: imageL2 },
        { title: "Upcoming shows", value: 200, icon: image4, iconLight: imageL4 },

    ]
    return (
        <div className="row ">
            {stats.map((stat, index) => (
                <div key={index} className='col-md-3 mb-1 Card'>
                    <div className={`card  text-white d-flex p-2 stats-icon ${theme === "light" ? "text-dark" : "text-light"}`}
                        style={{ backgroundColor: theme === "light" ? "#F8F8F8" : "#3F4E4F" }}>
                        <div className='d-flex'>
                            <img src={theme === "light" ? stat.iconLight : stat.icon}></img>
                            <h5 className={`mx-3 ${theme === "light" ? "text-dark" : "text-light"}`}> {stat.title}</h5>
                        </div>
                        <h3 className={`mx-5 ${theme === "light" ? "text-dark" : "text-light"}`}>{stat.value}</h3>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default DashBoardCard