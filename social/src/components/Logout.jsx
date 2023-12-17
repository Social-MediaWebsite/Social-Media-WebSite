import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/authContext';
import './css/Logout.css'
import image from '../assets/logos.png'

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
    <div >
      <img className='imgimgLogout' src="https://icones.pro/wp-content/uploads/2021/06/icone-deconnexion-deconnexion-noir.png" alt="" />
      <div className='confirmation-dialog'>
      <img className='logoutImage' src={image} alt="" />
      <h1>Are you sure</h1>
      <button onClick={handleLogout}>Yes</button>
      <button onClick={handleHome}>No</button>
      </div>
 
    </div>
  );
}

export default Logout;
