import React from 'react'
import DashBoardCard from './DashBoardCard'
import MovieChart from './MovieCharts'
// import RecentBooking from './RecentBooking'
import PieChart from './Piechart'
import TicketGraph from './TicketGraph'
import MovieStats from './MovieStats'
import RecentActivity from './RecentActivity'


function Dashboard({ theme }) {
    return (
        <div className={`dashboard ${theme}`}>
            <div >
                <DashBoardCard theme={theme} />
            </div>
            <div className='chart-row'>
                <div className={`chart-container mt-3 ${theme}`}>
                    <MovieChart theme={theme} />
                </div>
                <div className={`chart-container mt-3 ${theme}`}>
                    <PieChart theme={theme} />
                </div>
            </div>
            <div className='chart-row'>
                <div className={`chart-container mt-3 ${theme}`}>
                    <TicketGraph theme={theme} />
                </div>
                <div className={`chart-container mt-3 ${theme}`}>
                    <MovieStats theme={theme} />
                </div>
            </div>
            <div className={`${theme}`}>
                <RecentActivity theme={theme} />
            </div>
        </div >
    )
}

export default Dashboard