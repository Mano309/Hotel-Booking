import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");

    // Basic Validation
    if (username.length < 3) {
      setMessage("Username must be at least 3 characters long.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Check if the user already exists
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.username === username) {
      setMessage("Username already taken. Try a different one.");
      return;
    }

    // Save User to Local Storage
    localStorage.setItem("user", JSON.stringify({ username, password }));
    setMessage("Registration Successful! You can now login.");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleRegister} className="mt-3">
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="form-control mb-2" 
          required 
        />

        <label>Password:</label>
        <div className="input-group mb-2">
          <input 
            type={showPassword ? "text" : "password"} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-control" 
            required 
          />
          <button 
            type="button" 
            className="btn btn-outline-secondary" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <label>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          className="form-control mb-2" 
          required 
        />

        {message && <p className="text-danger">{message}</p>}

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
