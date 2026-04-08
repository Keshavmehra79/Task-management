import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const UserTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [taskStatus, setTaskStatus] = useState("");
  const [compDay, setCompDay] = useState("");
  const [taskID, setTaskID] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setTaskID(id);
    setShow(true);
  };

  const loadData = async () => {
    let api = `${import.meta.env.VITE_API_URL}/user/getusertask/?id=${localStorage.getItem("userid")}`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmitTask = async (e) => {
      e.preventDefault();
    try {
        let api = `${import.meta.env.VITE_API_URL}/user/settaskstatus`;
    await axios.post(api, { taskID, taskStatus, compDay });
    toast.success("Report Submitted ✅");
    setShow(false);
    } catch  {
         toast.error("Error submitting report ❌")
    }
    
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Your Assigned Tasks
      </h2>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Task</th>
              <th className="px-4 py-3">Days</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {mydata.map((key, index) => (
              <tr key={key._id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{key.usertask}</td>
                <td className="px-4 py-2">{key.days}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleShow(key._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                  >
                    Send Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">

            <h3 className="text-xl font-semibold mb-4">
              Send Report
            </h3>

            <form onSubmit={handleSubmitTask}>

              {/* Status */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Task Status
                </label>
                <select
                  onChange={(e) => setTaskStatus(e.target.value)}
                  className="w-full border px-3 py-2 rounded-lg"
                >
                  <option value="">Select Status</option>
                  <option value="Fully Completed">Fully Completed</option>
                  <option value="Partial Completed">Partial Completed</option>
                  <option value="No Complete">No Complete</option>
                </select>
              </div>

              {/* Completion Days */}
              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Completion Days
                </label>
                <input
                  type="text"
                  onChange={(e) => setCompDay(e.target.value)}
                  className="w-full border px-3 py-2 rounded-lg"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
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

export default UserTask;