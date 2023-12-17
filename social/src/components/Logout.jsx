import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/authContext';

function Logout({id}) {
  const navigate = useNavigate();
  const { clearToken } = useAuth();

  const handleLogout = () => {
    clearToken(); // this function used to log the user out
    
    navigate('/'); // Redirect the user to the login page
  };
  const handleHome =()=>{
    navigate(`/Home/${id}`)
  }

  return (
    <div className='confirmation-dialog'>
      <h1>Are you sure</h1>
      <button onClick={handleLogout}>Yes</button>
      <button onClick={handleHome}>No</button>
    </div>
  );
}

export default Logout;
