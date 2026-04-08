import axios from "axios";
import { useEffect, useState } from "react";

const SeeReport = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = `${import.meta.env.VITE_API_URL}/admin/gettaskreport`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        User Task Status Report
      </h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Task</th>
              <th className="px-4 py-3">Days</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Completion Day</th>
            </tr>
          </thead>

          <tbody>
            {mydata.map((key, index) => (
              <tr key={key._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{key.userid.name}</td>
                <td className="px-4 py-2">{key.userid.email}</td>
                <td className="px-4 py-2">{key.usertask}</td>
                <td className="px-4 py-2">{key.days}</td>
                <td className="px-4 py-2">{key.taskstatus}</td>
                <td className="px-4 py-2">{key.compday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeeReport;