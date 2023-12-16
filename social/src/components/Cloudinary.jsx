import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import './css/Cloudinary.css'
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

function Cloudinary({setImg}) {
  const cloudName = 'dcq9dwrsb';
  const presetName = 'l4ng65bl';
  const [image, setImage] = useState('');

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', presetName);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      setImage(data.secure_url); 
      setImg(data.secure_url); 
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };
  console.log(image);
  return (
    <div className='cloudinary'>
      <label >
      <MdOutlineAddPhotoAlternate />
      <input  type="file" onChange={handleUpload} />
      </label>
    </div>
  );
}

export default Cloudinary;
