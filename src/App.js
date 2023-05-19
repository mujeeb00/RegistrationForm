import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      fullName: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="container mt-5">
      <h1>REGISTRATIONS FORM!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <hr />
      <h2>Users DATA:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Full Name:</strong> {user.fullName},{' '}
            <strong>Email:</strong> {user.email},{' '}
            <strong>Password:</strong> {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
