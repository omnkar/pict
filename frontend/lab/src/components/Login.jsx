import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [library, setLibrary] = useState("My library");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onLogin(); // Call the onLogin function to set authentication
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Koha_ILS_logo.png"
          alt="Koha Logo"
          className="mx-auto mb-4 w-32"
        />
        <h2 className="text-center text-xl font-semibold mb-4">
          OPEN-SOURCE INTEGRATED LIBRARY SYSTEM
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Library:</label>
            <select
              value={library}
              onChange={(e) => setLibrary(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option>My library</option>
              <option>Central Library</option>
              <option>City Library</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
