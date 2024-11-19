import React, { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("login"); // To toggle between login and signup views
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]); // Stores registered users
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if user already exists
    const userExists = registeredUsers.some((user) => user.username === username);
    if (userExists) {
      alert("User already exists! Please log in.");
    } else {
      // Add new user to registered users
      setRegisteredUsers([...registeredUsers, { username, password }]);
      alert("Signup successful! Please log in.");
      setView("login"); // Switch to login view
    }

    // Clear input fields
    setUsername("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate credentials
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="container text-center mt-5">
        <h1>Welcome, {username}!</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-danger">Error: Invalid credentials!</h1>
        <button className="btn btn-primary mt-3" onClick={() => setError(false)}>
          Try Again
        </button>
      </div>
    );
  }

  if (view === "signup") {
    return (
      <div className="container mt-5">
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h1 className="card-title text-center">Signup</h1>
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Signup
              </button>
            </form>
            <button
              className="btn btn-link w-100 mt-3"
              onClick={() => setView("login")}
            >
              Already have an account? Log in
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h1 className="card-title text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <button
            className="btn btn-link w-100 mt-3"
            onClick={() => setView("signup")}
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
