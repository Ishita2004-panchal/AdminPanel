import React from 'react'
import icon1 from './statsTicket.png';
import icon2 from './statsuser.png';
import icon3 from './rate.png';
import icon4 from './refund.png';
import statL from './statistic.png'
import statD from './statisticD.png'

const MovieStats = ({ theme }) => {
    const stats1 = [
        { icon: icon1, head: "Avg. Tickets per/day", count: "142" },
        { icon: icon2, head: "Occupancy Rate", count: "142" },
    ]
    const stats2 = [
        { icon: icon3, head: "New user", count: "142" },
        { icon: icon4, head: "Avg. Tickets per/day", count: "142" },
    ]
    return (
        <div className={`stats  ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#F8F8F8" : "#3F4E4F" }}>
            <div className='d-flex heading  align-items-center '>
                <img src={`${theme === "light" ? statD : statL}`} className='mt-2' />
                <h4 className={`text-light mt-3 ${theme === "light" ? 'text-dark' : 'text-light'} `}>Quick stats</h4>
            </div>
            <div className='text- text-center'>
                <h5 className={`${theme === "light" ? 'text-dark' : "text-light"}`}>Key metrics at a glance</h5>
            </div>
            <div className='statsCard gap-3 mt-2'>
                {stats1.map((ticket, index) => (
                    <div className='statcard container  rounded-3' key={index} style={{ backgroundColor: theme === "light" ? "#B9BABB" : "#212529" }}>
                        <div className=' cardCont  text-light '>
                            <div className=' icons1 d-flex align-items-center mx-2'>
                                <img src={ticket.icon} />
                            </div>
                            <div className={`text ${theme === "light" ? "text-dark" : "text-light"}`}>
                                <p>{ticket.head}</p>
                                <h5>{ticket.count}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='statsCard gap-3 mt-2'>
                {stats2.map((ticket2, index) => (
                    <div className='statcard container  rounded-3' key={index} style={{ backgroundColor: theme === "light" ? "#B9BABB" : "#212529" }}>
                        <div className='ActivityCard text-light p-'>
                            <div className='icons1 d-flex align-items-center mx-2'>
                                <img src={ticket2.icon} />
                            </div>
                            <div className={`text ${theme === "light" ? "text-dark" : "text-light"}`}>
                                <p>{ticket2.head}</p>
                                <h5>{ticket2.count}</h5>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default MovieStats