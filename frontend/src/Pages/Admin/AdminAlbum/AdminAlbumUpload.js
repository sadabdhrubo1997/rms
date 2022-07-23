import axios from 'axios';
import React, {useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import { BASE_URL } from '../../../config';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './AdminnAlbum.scss';

const AdminAlbumUpload = () => {

  let base64data = []
  let history = useHistory()

  let {id} = useParams();

  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState(null);

  const [uploadedImages,
    setUploadedImages] = useState(base64data);

  const submitHandler = (e) => {
    e.preventDefault()
    setUploading(true)
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('photos', images[i]);
    }

    axios.post(`${BASE_URL}photo/${id}`,formData)
    .then(res=>{      
      if (res.status === 201) {
        history.push("/admin/album")
      }
    })


  }

  const handleImageChange = (e) => {
    setImages(e.target.files)

    Array
      .from(e.target.files)
      .forEach((file) => {
        var reader = new FileReader();
        reader.onloadend = function () {

          setUploadedImages((prev) => prev.concat(reader.result))
        }
        reader.readAsDataURL(file);
      })

  };

  return (
    <div id="adminAlbumUpload">
      <title>Admin | Image Upload</title>
      <Sidebar/>
      <Topbar pageName={`Upload Image`}/>
      <div className="admin_main_body">
        {/* <h1>{id}</h1> */}
        <form>
          <label htmlFor="file">Select Images</label>
          <input multiple type="file" name="file" id="file" onChange={handleImageChange}/>
        </form>
        <div
          className="demo"
          style={{
          display: "flex",
          flexWrap: "wrap",
          width:"100%"
        }}>

          {
          uploadedImages.map((item, idx) => {
            return <div key={idx} className="myBox">
              <img key={idx}src={item}/>
            </div>
          })
          }
        </div>
        {uploadedImages.length ? <button className="btn" onClick={submitHandler} type="submit">{uploading?"Uploading" : "Upload"}</button> : null}

        

      </div>
    </div>
  );
}

export default AdminAlbumUpload;
