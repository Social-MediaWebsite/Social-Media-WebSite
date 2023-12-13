import React, { useState } from 'react';
import { Image } from 'cloudinary-react';

function Profile() {
  const cloudName = 'dge6nmby7';
  const presetName = 'p825ad6k';
  const [image, setImage] = useState('');
  const [show,setShow] = useState(true);
  const [newImage,setNewImage] = useState("");

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
      setNewImage(data.secure_url)
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };
  console.log(image);
  return (
    <div>
        {
            show &&
            <button onClick={()=>setShow(!show)}>Update</button>
        }
        {!show && <div>
      <input type="file" onChange={handleUpload} />
      {image && (
        <Image style={{ width:100 , height:100}} cloudName={cloudName} publicId={image}>
        </Image>
      )}
        </div>}
    </div>
  );
}

export default Profile;
