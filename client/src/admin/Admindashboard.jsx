import React from "react";
import { Link, Outlet } from "react-router-dom";
const Admindashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <div className="bg-purple-600 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold text-center">Welcome To Admin Dashboard</h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-grow">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg p-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Menu</h2>

          <nav className="flex flex-col gap-3">
            <Link
              to="createuser"
              className="px-4 py-2 rounded-lg hover:bg-purple-100 text-gray-700 font-medium transition"
            >
              Create User
            </Link>

            <Link
              to="assigntask"
              className="px-4 py-2 rounded-lg hover:bg-purple-100 text-gray-700 font-medium transition"
            >
              Assign Task
            </Link>

            <Link
              to="seereport"
              className="px-4 py-2 rounded-lg hover:bg-purple-100 text-gray-700 font-medium transition"
            >
              See Reports
            </Link>

          
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-grow p-6">
          <div className="bg-blue-200 rounded-2xl shadow-md p-6 min-h-[400px]">
            <div>
              <h2 className="font-bold text-blue-900 text-center 
              text-2xl">Wellcome in this web </h2>
              <p className="text-gray-500 text-center">This side for admin and you can manipulate users data add new user assign task to them and somthing more</p>
            </div>
            <Outlet />
          </div>
        </div>

      </div>
       <div className="bg-gray-800 text-white text-center py-3 text-sm">
        www.taskmanagement.com all rights reserved © 2026
      </div>
    </div>
  );
};

export default Admindashboard;