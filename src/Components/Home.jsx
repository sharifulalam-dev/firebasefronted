import React, { useContext, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Authentication } from "../AuthProvider/AuthProvider";
const Home = () => {
  const loadedData = useLoaderData();
  const [users, setusers] = useState(loadedData);
  const { deleteUser } = useContext(Authentication);

  const handleDelete = async (id) => {
    try {
      // Delete user from your backend
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update local state
        setusers(users.filter((user) => user._id !== id));
      } else {
        console.error("Failed to delete user from server.");
      }
    } catch (error) {
      console.error("Error while deleting user:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">User Table</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Password
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Last Login
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.password}
                </td>
                {
                  <td className="border border-gray-300 px-4 py-2">
                    {user.lastSignInTime}
                  </td>
                }
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-500 hover:text-red-700 mx-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
