import { NavLink, Outlet } from "react-router-dom";

const UserDashBoard = () => {
  return (<>
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5 hidden md:block">
        <h2 className="text-xl font-bold text-blue-600 mb-6">
          User side
        </h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="yourtask"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            Your Tasks
          </NavLink>

        
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="bg-blue-600 text-white p-4 shadow-md flex justify-between">
          <h1 className="text-xl font-bold">User Dashboard</h1>
          <span>{localStorage.getItem("username")}</span>
        </div>

        {/* Welcome */}
        <div className="bg-white m-4 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            👋 Welcome back, {localStorage.getItem("username")}
          </h2>
          <p className="text-gray-500 text-sm">
            Here’s what’s happening with your tasks today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">

          <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500">
            <p className="text-gray-500 text-sm">Total Tasks</p>
            <h1 className="text-2xl font-bold text-blue-600 mt-2">12</h1>
          </div>

          <div className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500">
            <p className="text-gray-500 text-sm">Completed</p>
            <h1 className="text-2xl font-bold text-green-600 mt-2">8</h1>
          </div>

          <div className="bg-white p-5 rounded-xl shadow border-l-4 border-red-500">
            <p className="text-gray-500 text-sm">Pending</p>
            <h1 className="text-2xl font-bold text-red-600 mt-2">4</h1>
          </div>

        </div>

        {/* Content */}
        <div className="p-4">
          <div className="bg-white rounded-2xl shadow-md p-6 min-h-[400px]">
            <Outlet />
          </div>
        </div>

      </div>
     
    </div>
      <div className="bg-gray-800 text-white text-center  py-3 text-sm">
        www.taskmanagement.com all rights reserved © 2026
      </div>
     </>
  );
};

export default UserDashBoard;