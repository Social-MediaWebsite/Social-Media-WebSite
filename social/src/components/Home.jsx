import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import Posts from './Posts';
import './css/Post.css';

function Home() {
  const [userData, setUserData] = useState(null);
  const { id } = useParams(); //id is getting well
  // console.log("id",id);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/socialMedia/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        // console.log("resss",response.data)

        setUserData(response.data);
        console.log("user",userData);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
    
  }, [id]); 

  return (
    <div>
      <Posts />
    </div>
  );
}

export default Home;
