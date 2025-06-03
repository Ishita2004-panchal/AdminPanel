import React from 'react'
import image from './statsTicket.png';

function RecentBooking() {
    const bookings = [
        { id: "1", movie: "Avatar", user: "John doe", seats: "2", date: "26/03/2025" },
        { id: "1", movie: "Avatar", user: "John doe", seats: "2", date: "26/03/2025" },
        { id: "1", movie: "Avatar", user: "John doe", seats: "2", date: "26/03/2025" },
        { id: "1", movie: "Avatar", user: "John doe", seats: "2", date: "26/03/2025" },
    ];
    return (
        <div className='recentBookings bg-dark text-light text-center mt-3 '>
            <div className='d-flex stats-icon p-1 align-items-center justify-content-center head1'>
                <img src={image} className='mx-2 mb-3' />
                <h5 className='text-white py-2'>Recent Bookings</h5>
            </div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>MOVIE</th>
                        <th>USER</th>
                        <th>SEATS</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr>
                            <td>{booking.id}</td>
                            <td>{booking.movie}</td>
                            <td>{booking.user}</td>
                            <td>{booking.seats}</td>
                            <td>{booking.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecentBooking