import React, {useState} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {BASE_URL} from '../../../config';

const AdminCategoryAdd = () => {

  let history = useHistory()

  const [adding, setAdding] = useState(false);

  const [categoryName,
    setCategoryName] = useState('');
  const [categoryImage,
    setCategoryImage] = useState('');
  const [categoryImageBase64,
    setCategoryImageBase64] = useState('');
  const [categoryNameError,
    setCategoryNameError] = useState('');
  const [nameExists, setNameExists] = useState(false);  

  const submitHandler =async (e) => {
    e.preventDefault()
    setAdding(true)
    const formData = new FormData();
    formData.append('category_name', categoryName);
    formData.append('category', categoryImage);


    if (categoryImage) {
      await axios
      .post(`${BASE_URL}category/c`, {category_name:categoryName},{
        headers:{
          authorization:localStorage.getItem("token")
        }
      })
      .then(res => {
        if (res.status === 203) {
          return setNameExists(true)
        }else{
         axios.post(`${BASE_URL}category`, formData,{
            headers:{
              authorization:localStorage.getItem("token")
            }
          }).then(res=>{
            if (res.status === 201) {
              history.push('/admin/category')
            }
          })
        }
       
      })
      .catch(e => console.log(e))
    }

 


    

  }

  const changeHandler = (e) => {
    setCategoryName(e.target.value)
  }

  const fileChangeHandler = (e) => {
    let file = e.target.files[0];
    setCategoryImage(file)

    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        setCategoryImageBase64(reader.result)
      };
      reader.readAsDataURL(file);
    }

  }

  return (
    <div id="adminCategoryAdd">
      <title>Admin | Add Category</title>
      <Sidebar/>
      <Topbar pageName="Add Category"/>
      <div className="admin_main_body addCategoryPage">
        <form autoComplete="off" onSubmit={submitHandler}>
          <input
            type="text"
            value={categoryName}
            onChange={changeHandler}
            placeholder="Category Name Here"
            name="name"
            id="name"/> {categoryImageBase64 && <div className="image_wrapper">
            <img
              className="category_thumbnail"
              src={categoryImageBase64}
              alt="Category Thumbnail"/>
            <br/>
            <br/>
          </div>
            }
          <label htmlFor="image">{categoryImageBase64
              ? "Change Image"
              : "Select Image"}</label>
          <input type="file" name="image" id="image" onChange={fileChangeHandler}/> {categoryImageBase64 && <button type="submit">{adding ? "Submitting" : "Submit"}</button>}
        </form>

        <div className="read_board">
          <p>
            For better view, image size is :-
            <br/>
            Width =
            <b>290px</b>
            <br/>
            Height =
            <b>370px</b>
          </p>
          {nameExists && <p style={{color:"red"}}>This category name is already exists</p>}
        </div>

      </div>
      <h1></h1>
      <h1></h1>

    </div>
  );
}

export default AdminCategoryAdd;
