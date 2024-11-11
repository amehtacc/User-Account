import { useState } from "react";

const RegistrationPage = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.username === formData.username) {
      setError("Username is already taken");
      return;
    } 
    if (existingUser && existingUser.email === formData.email) {
      setError("Email is already registered");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    setShowLogin(true);
  };

  return (
    <div className="max-w-md p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="address1"
          placeholder="Address Line 1"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="address2"
          placeholder="Address Line 2"
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          required
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Register
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
      <button className="mt-4 text-blue-500" onClick={() => setShowLogin(true)}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default RegistrationPage;
