import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInRole, setLoggedInRole] = useState(null);
  const [showDemo, setShowDemo] = useState(false); // Toggle state

  // Logout function
  const handleLogout = () => {
    setLoggedInRole(null);
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@servicedesk.com" && password === "1234") {
      setLoggedInRole("admin");
    } else if (email === "user@servicedesk.com" && password === "1234") {
      setLoggedInRole("user");
    } else {
      alert("Invalid credentials");
    }
  };

  // Show dashboards based on role
  if (loggedInRole === "admin") return <AdminDashboard handleLogout={handleLogout} />;
  if (loggedInRole === "user") return <UserDashboard handleLogout={handleLogout} />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Service Desk - Dashboard
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 w-full rounded transition"
          >
            Login
          </button>
        </form>

        {/* Demo credentials toggle */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowDemo(!showDemo)}
            className="text-blue-600 hover:underline text-sm mb-2"
          >
            {showDemo ? "Hide Demo Credentials" : "Show Demo Credentials"}
          </button>

          {showDemo && (
            <p className="text-xs text-gray-500">
              For Admin use <strong>admin@servicedesk.com</strong> <br />
              For User use <strong>user@servicedesk.com</strong> <br />
              Password for both: <strong>1234</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
