import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage.jsx';
import RegistrationPage from './components/RegistrationPage';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && localStorage.getItem('isLoggedIn')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      {!isLoggedIn ? (
        showLogin ? (
          <LoginPage setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <RegistrationPage setShowLogin={setShowLogin} />
        )
      ) : (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
