import React, { useEffect, useState } from "react";

function BookingManagement({ theme }) {
    const [bookings, setBookings] = useState(() => {
        const storedBookings = localStorage.getItem("bookings");
        return storedBookings ? JSON.parse(storedBookings) : [];
    });

    const [searchTerm, setSearchTerm] = useState("");

    const filteredBookings = bookings.filter((booking) =>
        booking.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [formData, setFormData] = useState({
        id: "",
        movieTitle: "",
        customerName: "",
        seats: "",
        showtime: "",
        Amount: "",
        payment: "Paid",
        bookingDate: "",
        status: "Confirmed",
    });

    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        const { movieTitle, customerName, seats, bookingDate, Amount, payment, showtime } = formData;

        if (!movieTitle || !customerName || !seats || !bookingDate) {
            alert("Please fill in all fields.");
            return;
        }
        if (parseInt(seats) > 10) {
            alert("You can't add more than 10 seats");
            return;
        }
        if (parseInt(seats) < 0) {
            alert("You can't add seats in negative");
            return;
        }
        if (parseInt(seats) === 0) {
            alert("Select any seats");
            return;
        }

        if (formData.id) {
            const updatedBookings = bookings.map((booking) =>
                Number(booking.id) === Number(formData.id) ? { ...booking, ...formData } : booking
            );
            setBookings(updatedBookings);
            alert("Booking updated successfully!");
        } else {
            const newBooking = {
                ...formData,
                id: bookings.length ? Math.max(...bookings.map((booking) => Number(booking.id))) + 1 : 1,
            };
            setBookings([...bookings, newBooking]);
            alert("Booking added successfully!");
        }
        resetForm();
        hideModal();
    };


    const handleEdit = (booking) => {
        setFormData(booking);
        showModal();
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this booking?")) {
            const updatedBookings = bookings.filter((booking) => Number(booking.id) !== Number(id));
            reassignIds(updatedBookings);
            alert("Booking deleted successfully!");
        }
    };
    const reassignIds = (updatedBookings) => {
        const reassignBookings = updatedBookings.map((booking, index) => ({
            ...booking,
            id: index + 1,
        }));
        setBookings(reassignBookings);
    };

    const resetForm = () => {
        setFormData({
            id: "",
            movieTitle: "",
            customerName: "",
            seats: "",
            showtime: "",
            Amount: "",
            payment: "Paid",
            bookingDate: "",
            status: "Confirmed",
        });
    };

    const showModal = () => {
        const modalElement = document.getElementById("bookingModal");
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
    };

    const hideModal = () => {
        const modalElement = document.getElementById("bookingModal");
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
    };

    return (
        <div className={`booking-management user-bg text-light p-3 ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#fff" : "#3F4E4F", minHeight: "100vh", width: "100%" }}>
            <div className="d-flex justify-content-between align-items-center head1">
                <div>
                    <h5 className={` mb-3 ${theme === "light" ? "text-dark" : "text-light"} `}>Booking Management</h5>
                </div>
                <div className="d-flex search align-items-center">
                    <input
                        className={`form-control bg-transparent  searchbtn ${theme === "light" ? "text-dark" : "text-light"}`}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className={`btn btn-outline-light bg-dark ${theme === "light" ? "btn-outline-dark bg-transparent" : "btn-outline-light"}`} type="submit">
                        Search
                    </button>
                    <button
                        type="button"
                        className="btn btn-success p-2 px-2 plusimg d-flex align-items-center justify-content-between"
                        onClick={() => {
                            resetForm();
                            showModal();
                        }}
                    >
                        <img src="plus.png" />
                        Add Booking
                    </button>
                </div>
            </div>

            <div className="modal fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered p-4">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="bookingModalLabel">
                                {formData.id ? "Edit Booking" : "Add Booking"}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-dark">
                            <form>
                                <div className="d-flex justify-content-between align-items-center ">
                                    <div className="mb-3">
                                        <label className="form-label">Movie Title</label>
                                        <input
                                            type="text"
                                            name="movieTitle"
                                            value={formData.movieTitle}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Enter Movie Title"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Customer Name</label>
                                        <input
                                            type="text"
                                            name="customerName"
                                            value={formData.customerName}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Enter Customer Name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Number of Seats</label>
                                    <input
                                        type="number"
                                        name="seats"
                                        value={formData.seats}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter Number of Seats"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Show time</label>
                                    <input
                                        type="date"
                                        name="showtime"
                                        value={formData.showtime}
                                        onChange={handleChange}
                                        className="form-control"
                                    // placeholder="Enter Movie Title"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        name="Amount"
                                        value={formData.Amount}
                                        onChange={handleChange}
                                        className="form-control"
                                    // placeholder="Enter Movie Title"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Payment</label>
                                    <select
                                        name="payment"
                                        className="form-select"
                                        value={formData.payment}
                                        onChange={handleChange}
                                    >
                                        <option value="Paid">Paid</option>
                                        <option value="Unpaid">Unpaid</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Booking Date</label>
                                    <input
                                        type="date"
                                        name="bookingDate"
                                        value={formData.bookingDate}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select
                                        name="status"
                                        className="form-select"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <table className={`table mt-3 ${theme === "light" ? "text-dark" : "text-light"}`}>
                <thead className={theme === "light" ? "custom-light" : "custom-dark"}>
                    <tr>
                        <th>ID</th>
                        <th>Movie Title</th>
                        <th>Customer Name</th>
                        <th>show time</th>
                        <th>Seats</th>
                        <th>Amount</th>
                        <th>Payment</th>
                        <th>Booking Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className={theme === "light" ? "custom-light" : "custom-dark"}>
                    {Array.isArray(filteredBookings) && filteredBookings.length > 0 ? (
                        filteredBookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.movieTitle}</td>
                                <td>{booking.customerName}</td>
                                <td>{booking.showtime}</td>
                                <td>{booking.seats}</td>
                                <td>{booking.Amount}</td>
                                <td>
                                    <span className={`badge ${booking.payment === "Paid" ? "bg-primary" : "bg-secondary"}`}>
                                        {booking.payment}
                                    </span>
                                </td>
                                <td>{booking.bookingDate}</td>
                                <td>
                                    <span className={`badge ${booking.status === "Confirmed" ? "bg-success" : "bg-danger"}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(booking)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(booking.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center text-white ">No bookings found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BookingManagement;