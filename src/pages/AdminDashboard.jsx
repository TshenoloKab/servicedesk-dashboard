import React from "react";

function AdminDashboard({ handleLogout }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Service Desk – Admin Dashboard
      </h1>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Open Tickets */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm">Open Tickets</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">12</p>
        </div>

        {/* Tickets Resolved Today */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm">Tickets Resolved Today</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">8</p>
        </div>

        {/* Open High-Priority Tickets */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm">Open High-Priority Tickets</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">4</p>
          <p className="text-xs text-gray-500 mt-1">
            Tickets requiring immediate action
          </p>
        </div>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
