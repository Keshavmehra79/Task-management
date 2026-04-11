import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [userid, setUserID] = useState("");
  const [usertask, setUserTask] = useState("");
  const [days, setDays] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (uid) => {
    setShow(true);
    setUserID(uid);
  };

  const loadData = async () => {
    let api = `${import.meta.env.VITE_API_URL}/admin/getuserdata`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    try {
      let api = `${import.meta.env.VITE_API_URL}/admin/assigntask`;
    const response = await axios.post(api, { userid, usertask, days });
       toast.success("Task Assigned 🚀");
    setShow(false);
  setUserTask("");
    setDays("");
      
    } catch  {
       toast.error("Failed to assign task ❌");
      
    }
    
  };

  let sno = 0;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Assign Task</h2>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Post</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {mydata.map((key, index) => (
              <tr key={key._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{key.name}</td>
                <td className="px-4 py-2">{key.email}</td>
                <td className="px-4 py-2">{key.post}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleShow(key._id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                  >
                    Assign Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg w-96 p-6">

            <h3 className="text-xl font-semibold mb-4">
              Assign New Task
            </h3>

            <form onSubmit={handleSubmitTask}>
              {/* Task */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Enter Task
                </label>
                <input
                  type="text"
                  value={usertask}
                  onChange={(e) => setUserTask(e.target.value)}
                  className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Days */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Enter Days
                </label>
                <input
                  type="text"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default AssignTask;