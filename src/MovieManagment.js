import React, { useEffect, useState } from "react";
import rating from './rate.png';
import rating2 from './stard.png';

function MovieManagement({ isSidebarOpen, theme }) {
    const [movies, setMovies] = useState(() => {
        const storedMovies = localStorage.getItem("movies");
        return storedMovies
            ? JSON.parse(storedMovies)
            : [
                { id: 1, title: "Inception", Rating: "3.3", genre: "Sci-Fi", releaseDate: "2010-07-16", TicketSold: "333", Revenue: "10000", status: "Released" },
                { id: 2, title: "Avatar", Rating: "4.3", genre: "Action", releaseDate: "2009-12-18", TicketSold: "333", Revenue: "10000", status: "Released" },
            ];
    });

    const [searchTerm, setSearchTerm] = useState("");
    const filteredBookings = movies.filter((movies) =>
        movies.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        Rating: "",
        genre: "",
        releaseDate: "",
        TicketSold: "",
        Revenue: "",
        status: "Released",
    });
    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);
    const handleSave = () => {
        if (!formData.title || !formData.genre || !formData.releaseDate) {
            alert("Please fill in all fields.");
            return;
        }
        if (formData.id) {
            const updatedMovies = movies.map((movie) =>
                movie.id === formData.id ? { ...movie, ...formData } : movie
            );
            setMovies(updatedMovies);
            alert("Movie updated successfully!");
        } else {
            const newMovie = {
                ...formData,
                id: movies.length ? Math.max(...movies.map((movie) => movie.id)) + 1 : 1,
            };
            setMovies([...movies, newMovie]);
            alert("Movie added successfully!");
        }
        setFormData({
            id: "",
            title: "",
            Rating: "",
            genre: "Drama",
            releaseDate: "",
            TicketSold: "",
            Revenue: "",
            status: "Released",
        });
        const modalElement = document.getElementById("movieModal");
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this movie?")) {
            const updatedMovies = movies.filter((movie) => movie.id !== id);
            reassignIds(updatedMovies);
            alert("Movie deleted successfully!");
        }
    };
    const reassignIds = (updatedMovies) => {
        const reassignMovies = updatedMovies.map((movie, index) => ({
            ...movie,
            id: index + 1,
        }));
        setMovies(reassignMovies);
    };
    const handleEdit = (movie) => {
        setFormData({
            id: movie.id,
            title: movie.title,
            Rating: movie.Rating,
            genre: movie.genre,
            releaseDate: movie.releaseDate,
            TicketSold: movie.TicketSold,
            Revenue: movie.Revenue,
            status: movie.status,
        });

        const modalElement = document.getElementById("movieModal");
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
    };

    return (
        <div className={`${isSidebarOpen ? "sidebar-open" : "sidebar-closed"} user-bg text-light p-3 ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#fff" : "#3F4E4F", minHeight: "100vh", width: "100%" }} >
            <div className="d-flex justify-content-between align-items-center head1 ">
                <div>
                    <h5 className={` mb-3 ${theme === "light" ? "text-dark" : "text-light"}`}>Movie Management</h5>
                </div>
                <div className="d-flex align-items-center search">
                    <input
                        className={`form-control bg-transparent searchbtn ${theme === "light" ? "text-dark" : "text-light"}`}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className={`btn ${theme === "light" ? "btn-outline-dark bg-transparent" : "btn-outline-light"}`} type="submit">
                        Search
                    </button>
                    <button
                        type="button"
                        className="btn btn-success plusimg d-flex align-items-center justify-content-between "
                        data-bs-toggle="modal"
                        data-bs-target="#movieModal"
                        onClick={() => {
                            setFormData({
                                id: "",
                                title: "",
                                Rating: "",
                                genre: "Drama",
                                releaseDate: "",
                                TicketSold: "",
                                Revenue: "",
                                status: "Released",
                            });
                        }}
                    >
                        <img src="plus.png" />
                        Add Movie
                    </button>
                </div>
            </div>

            <div className="modal fade" id="movieModal" tabIndex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered p-4">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="movieModalLabel">
                                {formData.id ? "Edit Movie" : "Add Movie"}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-dark ">
                            <form>
                                <div className="d-flex justify-content-start align-items-center gap-5">
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="form-control px-4"
                                            placeholder="Enter Movie Title"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Genre</label>
                                        <select
                                            name="genre"
                                            className="form-select px-5"
                                            value={formData.genre}
                                            onChange={handleChange}
                                        >
                                            <option value="Released">Drama</option>
                                            <option value="Upcoming">Action</option>
                                            <option value="Upcoming">Comedy</option>
                                            <option value="Upcoming">Fantasy</option>
                                            <option value="Upcoming">Historical</option>
                                            <option value="Upcoming">Horror</option>
                                            <option value="Upcoming">Romantic</option>
                                            <option value="Upcoming">Sci-Fi</option>
                                            <option value="Upcoming">Thriller</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Rating</label>
                                    <input
                                        type="number"
                                        name="Rating"
                                        value={formData.Rating}
                                        onChange={handleChange}
                                        className="form-control"
                                    // placeholder="Enter Movie Title"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Release Date</label>
                                    <input
                                        type="date"
                                        name="releaseDate"
                                        value={formData.releaseDate}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Ticket Sold</label>
                                    <input
                                        type="number"
                                        name="TicketSold"
                                        value={formData.TicketSold}
                                        onChange={handleChange}
                                        className="form-control"
                                    // placeholder="Enter Movie Title"
                                    />
                                </div><div className="mb-3 ">
                                    <label className="form-label">Revenue</label>
                                    <input
                                        type="number"
                                        name="Revenue"
                                        value={formData.Revenue}
                                        onChange={handleChange}
                                        className="form-control"
                                    // placeholder="Enter Movie Title"
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
                                        <option value="Released">Released</option>
                                        <option value="Upcoming">Upcoming</option>
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

            <table className={`table mt-3 ${theme === "light" ? "text-dark" : "text-light"} `} >
                <thead className={theme === "light" ? "custom-light" : "custom-dark"}>
                    <tr >
                        <th>ID</th>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Genre</th>
                        <th>Ticket Sold</th>
                        <th>Revenue</th>
                        <th>Release Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className={theme === "light" ? "custom-light" : "custom-dark"}>
                    {movies.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center text-danger fw-bold">
                                No movies available!
                            </td>
                        </tr>
                    ) : (
                        filteredBookings.map((movie) => (
                            <tr key={movie.id} >
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td className="rateicon d-flex p-3 gap-3 align-items-center">
                                    <img src={theme === "light" ? rating2 : rating} className="mb-1 " />
                                    {movie.Rating}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.TicketSold}</td>
                                <td>{movie.Revenue}</td>
                                <td>{movie.releaseDate}</td>
                                <td>
                                    <span className={`badge ${movie.status === "Released" ? "bg-success" : "bg-warning"}`}>
                                        {movie.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(movie)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(movie.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div >
    );
}

export default MovieManagement;


