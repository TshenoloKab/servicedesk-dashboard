import React from "react";

function UserDashboard({ handleLogout }) {
  // Dummy data
  const openTickets = 2;
  const resolvedTickets = 5;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Service Desk – User Dashboard
      </h1>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {/* Open Tickets */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm">Open Tickets</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">{openTickets}</p>
        </div>

        {/* Resolved Tickets */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm">Resolved Tickets</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{resolvedTickets}</p>
        </div>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"      >
        Logout
      </button>
    </div>
  );
}

export default UserDashboard;
