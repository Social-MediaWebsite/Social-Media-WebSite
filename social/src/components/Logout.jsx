import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext/authContext';

function Logout() {
  const history = useHistory();
  const { clearToken } = useAuth();

  const handleLogout = () => {
    clearToken(); // this function used to log the user out
    
    history.push('/login');// Redirect the user to the login page
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
