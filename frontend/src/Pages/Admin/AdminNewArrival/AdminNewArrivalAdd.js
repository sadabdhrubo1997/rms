import React, {useState} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {BASE_URL} from '../../../config';

const AdminNewArrivalAdd = () => {

  let history = useHistory()

  const [categoryName,
    setCategoryName] = useState('');
  const [categoryImage,
    setCategoryImage] = useState('');
  const [categoryImageBase64,
    setCategoryImageBase64] = useState('');

  const [btnText,
    setbtnText] = useState("Submit");

  const submitHandler = async(e) => {
    e.preventDefault()
    setbtnText("Processing...")

    const formData = new FormData();
    formData.append('name', categoryName);
    formData.append('image', categoryImage);

    if (categoryImage) {
      axios
        .post(`${BASE_URL}newArrival`, formData)
        .then(res => {
          if (res.status === 201) {
            history.push('/admin/new-arrival')
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
      <title>Admin | Add New Arrival</title>
      <Sidebar/>
      <Topbar pageName="Add New Arrival"/>
      <div className="admin_main_body addCategoryPage">
        <form autoComplete="off" onSubmit={submitHandler}>
          <input
            type="text"
            value={categoryName}
            onChange={changeHandler}
            placeholder="New Arrival Name Here"
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
          <input type="file" name="image" id="image" onChange={fileChangeHandler}/> {categoryImageBase64 && <button type="submit">{btnText}</button>}
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
        </div>
      </div>
      <br/><br/>
    </div>
  );
}

export default AdminNewArrivalAdd;
