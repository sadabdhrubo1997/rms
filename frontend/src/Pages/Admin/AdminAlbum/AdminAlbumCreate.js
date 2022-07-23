import React, {useState} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import {BASE_URL} from '../../../config';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AdminAlbumCreate = () => {

  let history = useHistory()

  const [adding, setAdding] = useState(false);

  const [categoryName,
    setCategoryName] = useState('');
  const [categoryImage,
    setCategoryImage] = useState('');
  const [categoryImageBase64,
    setCategoryImageBase64] = useState('');
  const [categoryNameError, setCategoryNameError] = useState('');  


    const submitHandler = async (e)=>{
        e.preventDefault()
        setAdding(true)
        const formData = new FormData();

        formData.append("album_name",categoryName)
        formData.append("albumThumbnail",categoryImage)

        await axios.post(`${BASE_URL}album`,formData)
        .then(res=>{
          if (res.status === 201) {
            history.push('/admin/album')
          }
        })


        
    }


    const changeHandler = (e)=>{
        setCategoryName(e.target.value)
    }

    

  const fileChangeHandler = (e) => {
    let file = e.target.files[0];
    setCategoryImage(file)

    if (file) {
      let reader = new FileReader();

      reader.onload = ()=>{
        setCategoryImageBase64(reader.result)
      };
      reader.readAsDataURL(file);

    }

  }

  return (
    <div id="adminCategoryAdd">
      <title>Admin | Create Album</title>
      <Sidebar/>
      <Topbar pageName="Create Album"/>
      <div className="admin_main_body addCategoryPage">
        <form autoComplete="off" onSubmit={submitHandler}>
          <input type="text" value={categoryName} onChange={changeHandler} placeholder="Enter Album Name" name="name" id="name"/>
          {
            categoryImageBase64 &&
            <div className="image_wrapper">
                <img className="category_thumbnail" src={categoryImageBase64} alt="Category Thumbnail"/>
                <br/>
                <br/>
            </div>
        }
          <label htmlFor="image">{categoryImageBase64 ? "Change Album Thumbnail" : "Select Album Thumbnail"}</label>
          <input type="file" name="image" id="image" onChange={fileChangeHandler}/>
          {categoryImageBase64 && <button type="submit">{adding? "Processing" : "Submit"}</button>}
        </form>

        <div className="read_board">
            <p>
                For better view, thumbnail size should be :-
                <br/>
                Width = <b>300px</b>
                <br/>
                Height = <b>300px</b>
            </p>
        </div>
        
      </div>
      <h1></h1>
      <h1></h1>

    </div>
  );
}

export default AdminAlbumCreate;
