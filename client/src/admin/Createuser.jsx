import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [input, setInput] = useState({});
  const [showForm, setShowForm] = useState(true);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let api = `${import.meta.env.VITE_API_URL}/admin/createuser`;
      await axios.post(api, input);

      toast.success("User Created Successfully 🎉");
      setShowForm(false); // 🔥 form hide

    } catch (err) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

        <h2 className="text-2xl font-bold mb-2">Create New User</h2>
        <p className="text-gray-500 mb-6">
          Add a new team member to your organization
        </p>

        {showForm ? (
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Enter full name"
              className="w-full px-3 py-2 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-lg"
            />

            <select
              name="post"
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">Select Post</option>
              <option value="Programmer">Programmer</option>
              <option value="Designer">Designer</option>
              <option value="Analyst">Analyst</option>
            </select>

            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Create User
            </button>

          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            ✅ User Created Successfully!
          </div>
        )}

      </div>
    </div>
  );
};

export default CreateUser;