// import React, { use, useEffect, useState } from 'react';

// function UserManagement() {
//     const [users, setUsers] = useState([
//         { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
//         { id: 2, name: "Alice Smith", email: "alice@example.com", status: "Blocked" },
//     ]);
//     const [formData, setFormData] = useState({
//         id: "",
//         name: "",
//         email: "",
//         status: "Active"
//     });

//     useEffect(() => {
//         const storedUsers = localStorage.getItem("users");
//         if (storedUsers) {
//             setUsers(JSON.parse(storedUsers));
//         }
//     }, []);
//     useEffect(() => {
//         localStorage.setItem("users", JSON.stringify(users));
//     }, [users]);
//     const handleSave = () => {
//         if (!formData.name || !formData.email) {
//             alert("please fill in all fields");
//             return;
//         }
//         const isDuplicte = users.some((user) => user.email === formData.email && user.id !== formData.id);
//         if (isDuplicte) {
//             alert("This email is already in use. Please use different email");
//             return;
//         }
//         if (formData.id) {
//             const updateUser = users.map((user) =>
//                 user.id === formData.id ? formData : user
//             );
//             setUsers(updateUser);
//             alert("user updated successfully");
//         }
//         else {
//             const newUser = {
//                 ...formData,
//                 id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
//             };
//             setUsers([...users, newUser]);
//             alert("Users added successfully!")
//         }

//         // else {
//         //     alert("form submitted successfully!")
//         // }
//         // const newUser = {
//         //     ...formData,
//         //     id: users.length + 1,
//         // };
//         // setUsers([...users, newUser]);
//         // alert("User added succesfully");

//         setFormData({
//             id: "",
//             email: "",
//             name: "",
//             status: "Active",
//         });

//         const modalElement = document.getElementById("exampleModal");
//         const modal = window.bootstrap.Modal.getInstance(modalElement);
//         if (modal) modal.hide();
//     };
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this user?")) {
//             const updateUser = users.filter((user) => user.id !== id);
//             setUsers(updateUser);
//             alert("User deleted successfully");
//         }
//     };
//     const handleEdit = (user) => {
//         setFormData({
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             status: user.status
//         });
//         const modalElement = document.getElementById("exampleModal");
//         const modal = new window.bootstrap.Modal(modalElement);
//         modal.show();
//     }
//     return (
//         <div className="user-management user-bg text-light p-3">
//             <div className='d-flex justify-content-between align-items-center'>
//                 <h5 className="text-white mb-3">User Management</h5>
//                 {/* <button className='btn btn-danger p-2 px-4'>Add</button> */}
//                 <button type="button" className="btn btn-danger p-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal"
//                     onClick={() => {
//                         setFormData({ id: "", name: "", email: "", status: "Active" });

//                     }}
//                 >Add</button>
//             </div>
//             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title text-dark" id="exampleModalLabel">Add</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body text-dark">
//                             <form >
//                                 <div className="mb-3">
//                                     <label for="exampleFormControlInput1" className="form-label">Email address</label>
//                                     <input type="email"
//                                         name='email'
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className="form-control"
//                                         id="email"
//                                         placeholder="name@example.com" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label for="exampleFormControlInput1" className="form-label"> Name</label>
//                                     <input type="text"
//                                         name='name'
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className="form-control"
//                                         id="name"
//                                         placeholder="Enter your Name" />
//                                 </div>
//                                 <div className='mb-3'>
//                                     <label className='form-label'>Status</label>
//                                     <select
//                                         name='status'
//                                         className='form-select'
//                                         value={formData.status}
//                                         onChange={handleChange}
//                                     >
//                                         <option value="Active">Active</option>
//                                         <option value="Blocked">Blocked</option>
//                                     </select>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <table className="table table-dark table-striped mt-3">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>
//                                 <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
//                                     {user.status}
//                                 </span>
//                             </td>
//                             <td>
//                                 <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(user)}>Edit</button>
//                                 <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default UserManagement;
import React, { useEffect, useState } from "react";

function UserManagement({ theme }) {
    const [users, setUsers] = useState(() => {
        try {
            const storedUsers = localStorage.getItem("users");
            if (storedUsers) {
                const parsedUsers = JSON.parse(storedUsers);
                return parsedUsers
                    .map((user) => ({
                        id: Number(user.id) || Date.now(),
                        name: String(user.name || ""),
                        email: String(user.email || ""),
                        role: ["Admin", "User", "Editor"].includes(user.role)
                            ? user.role : "Admin",
                        joinDate: user.joinDate || "",
                        status: ["Active", "Blocked"].includes(user.status)
                            ? user.status
                            : "Active",
                    }))
                    .filter(
                        (user) =>
                            user.id &&
                            typeof user.name === "string" &&
                            typeof user.email === "string" &&
                            typeof user.role === "string"
                    );
            }
        } catch (error) {
            console.error("Error loading users:", error);
        }
        return [
            { id: 1, name: "John Doe", email: "john@example.com", role: "user", joinDate: "12-04-25", status: "Active" },
            { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Admin", joinDate: "10-03-25", status: "Blocked" },
        ];
    });

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        status: "Active",
        role: "",
        joinDate: ""
    });

    useEffect(() => {
        try {
            localStorage.setItem("users", JSON.stringify(users));
        } catch (error) {
            console.error("Error saving users:", error);
        }
    }, [users]);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredUser = users.filter((users) =>
        users.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSave = () => {
        if (!formData.name.trim() || !formData.email.trim()) {
            alert("Please fill in all fields");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert("Please enter a valid email address");
            return;
        }
        const isDuplicate = users.some(
            (user) => user.email === formData.email && user.id !== formData.id
        );
        if (isDuplicate) {
            alert("This email is already in use");
            return;
        }

        const updatedUsers = formData.id
            ? users.map((user) => (user.id === formData.id ? { ...formData } : user))
            : [
                ...users,
                {
                    ...formData,
                    id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
                },
            ];
        setUsers(updatedUsers);
        resetForm();
        closeModal();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            const updatedUsers = users.filter((user) => user.id !== id);
            reassignIds(updatedUsers);
            alert("user deleted successfully");
            // setUsers(users.filter((user) => user.id !== id));
        }
    };

    const reassignIds = (updatedUsers) => {
        const reassignUser = updatedUsers.map((user, index) => ({
            ...user,
            id: index + 1,
        }));
        setUsers(reassignUser);
    };
    const handleEdit = (user) => {
        setFormData({
            id: user.id,
            name: user.name,
            email: user.email,
            status: user.status,
            role: user.role,
            joinDate: user.joinDate,
        });
        openModal();
    };

    const resetForm = () => {
        setFormData({
            id: "",
            name: "",
            email: "",
            status: "Active",
            role: "",
            joinDate: "",
        });
    };

    const openModal = () => {
        const modal = new window.bootstrap.Modal(
            document.getElementById("userModal")
        );
        modal.show();
    };

    const closeModal = () => {
        const modal = window.bootstrap.Modal.getInstance(
            document.getElementById("userModal")
        );
        if (modal) modal.hide();
    };

    return (
        <div className={`user-management user-bg text-light p-3 ${theme === "light" ? "text-dark" : "text-light"}`} style={{ backgroundColor: theme === "light" ? "#fff" : "#3F4E4F", minHeight: "100vh", width: "100%" }}>
            <div className="d-flex justify-content-between align-items-center head1">
                <div>
                    <h5 className={` mb-3 ${theme === "light" ? "text-dark" : "text-light"}`}>User  Management</h5>
                </div>
                <div className="d-flex search">
                    <input
                        className={`form-control bg-transparent  searchbtn ${theme === "light" ? "text-dark" : "text-light"}`}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-outline-light bg-dark" type="submit">
                        Search
                    </button>

                    <button
                        type="button"
                        className="btn btn-success px- plusimg d-flex align-items-center justify-content-between "
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                        onClick={resetForm}
                    >
                        <img src="plus.png" />
                        Add User
                    </button>
                </div>
            </div>
            <div
                className="modal fade"
                id="userModal"
                tabIndex="-1"
                aria-labelledby="userModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered p-4">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="userModalLabel">
                                {formData.id ? "Edit User" : "Add User"}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-dark">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="userEmail"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="userName"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Date" className="form-label">
                                        Join Date
                                    </label>
                                    <input
                                        type="date"
                                        name="joinDate"
                                        value={formData.joinDate}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="joindate"
                                        // placeholder=""
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <select
                                        name="role"
                                        className="form-select"
                                        value={formData.role}
                                        onChange={handleChange}>
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                        <option value="Editor">Editor</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select
                                        name="status"
                                        className="form-select"
                                        value={formData.status}
                                        onChange={handleChange}>
                                        <option value="Active">Active</option>
                                        <option value="Blocked">Blocked</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSave}
                            >
                                {formData.id ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <table className={`table mt-3 text-center ${theme === "light" ? "text-dark" : "text-light"}`}>
                <thead className={theme === "light" ? "custom-light" : "custom-dark"}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Join Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className={theme === "light" ? "custom-light" : "custom-dark"}>
                    {filteredUser.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <span
                                    className={`badge ${user.role === "Admin" ? "bg-primary" : "bg-secondary"}`}
                                >
                                    {user.role}
                                </span>
                            </td>
                            <td>{user.joinDate}</td>
                            <td>
                                <span
                                    className={`badge ${user.status === "Active" ? "bg-success" : "bg-danger"}`}
                                >
                                    {user.status}
                                </span>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => handleEdit(user)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default UserManagement;