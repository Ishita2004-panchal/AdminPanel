import React, { useState } from "react";

function UserMana2() {
  // State to manage user list
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", status: "Blocked" },
  ]);

  // State for modal and form data
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ id: "", name: "", email: "", status: "Active" });

  // Open modal for Add/Edit
  const handleShowModal = (user = null) => {
    if (user) {
      setFormData(user); // Edit mode
      setEditingUser(user.id);
    } else {
      setFormData({ id: "", name: "", email: "", status: "Active" }); // Add mode
      setEditingUser(null);
    }
    setShowModal(true); // Show modal
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save user data (Add or Update)
  const handleSave = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingUser) {
      // Update existing user
      setUsers(users.map((user) => (user.id === editingUser ? formData : user)));
    } else {
      // Add new user
      const newUser = { ...formData, id: users.length + 1 };
      setUsers([...users, newUser]);
    }
    setShowModal(false); // Hide modal after save
  };

  // Delete user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="user-management user-bg text-light p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="text-white mb-3">User Management</h5>
        <button className="btn btn-danger p-2 px-4" onClick={() => handleShowModal()}>
          Add
        </button>
      </div>

      {/* User Table */}
      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`badge ${user.status === "Active" ? "bg-success" : "bg-danger"}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleShowModal(user)}
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

      {/* Modal for Add/Edit User */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark">
                  {editingUser ? "Edit User" : "Add User"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body text-dark">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="form-select"
                    >
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
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default UserMana2;
