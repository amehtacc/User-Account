import { useState } from 'react';

const LoginPage = ({ setShowLogin, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password. Please try again or register if you are new.');
    }
  };

  return (
    <div className="max-w-md p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full mb-2 p-2 border rounded"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-2 p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
      <button className="mt-4 text-blue-500" onClick={() => setShowLogin(false)}>
        New user? Register here.
      </button>
    </div>
  );
};

export default LoginPage;
