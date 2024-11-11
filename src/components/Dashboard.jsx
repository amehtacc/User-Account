import { useState } from 'react';

const Dashboard = ({ setIsLoggedIn }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className="w-[70%] p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">User Information</h2>
      <form onSubmit={handleUpdate} className='flex flex-wrap'>

        <div className='w-[50%]'>
          <label className="block mb-1">Username:</label>
          <input type="text" name="username" value={formData.username} disabled className="w-[90%] mb-3 p-2 border rounded bg-gray-100 cursor-not-allowed" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">Address Line 1:</label>
        <input type="text" name="address1" value={formData.address1} onChange={handleInputChange} required className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">Address Line 2:</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleInputChange} className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleInputChange} required className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleInputChange} required className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <div className='w-[50%]'>
        <label className="block mb-1">Pincode:</label>
        <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} required className="w-[90%] mb-2 p-2 border rounded" />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded mt-5">Save</button>
      </form>
      <button onClick={handleLogout} className="mt-4 w-full p-2 bg-red-500 text-white rounded">Logout</button>
    </div>
  );
};

export default Dashboard;