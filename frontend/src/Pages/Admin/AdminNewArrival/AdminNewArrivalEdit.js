import React, {useState, useEffect} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import {BASE_URL, PUBLIC_URL} from '../../../config';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom'

const AdminNewArrivalEdit = () => {
  let history = useHistory()
  let {id} = useParams();

  const [dbName,
    setDbName] = useState('');
  const [newName,
    setNewName] = useState('');
  const [categoryName,
    setCategoryName] = useState('');
  const [newImage,
    setNewImage] = useState(null);
  const [dbImage,
    setDbImage] = useState(null);
    

  const [categoryImageBase64,
    setCategoryImageBase64] = useState(null);
  const [nameExists,
    setNameExists] = useState(false);

  const submitHandler = async(e) => {
    e.preventDefault()
    const formData = new FormData();

    // for name update 
    if(newName && (!newImage)){
      await axios.put(`${BASE_URL}newArrival/name/${id}`,{name:newName})
      .then(res=>{
        if(res.status === 201){
          history.push("/admin/new-arrival")
        }
      })
    }else if(newImage && (!newName)){
      formData.append("image",newImage)
      await axios.put(`${BASE_URL}newArrival/image/${id}`, formData)
      .then(res=>{
        if (res.status === 201) {
          history.push("/admin/new-arrival")          
        }else{
          console.log("internal server error");
        }
      })
    }else if(newImage && newImage){
      formData.append('name', newName)
      formData.append('image', newImage)
      await axios.put(`${BASE_URL}newArrival/${id}`,formData)
      .then(res=>{
        if (res.status === 203) {
         return setNameExists(true)
        }else if(res.status === 201){
          history.push('/admin/new-arrival')
        }else{
          console.log("internal server error");
        }
      })
    }else{
      history.push('/admin/new-arrival')
    }
  }

  //file change handler
  const fileChangeHandler = (e) => {
    let file = e.target.files[0];
    setNewImage(file)

    if (file) {
      let reader = new FileReader();

      reader.onload = () => {
        setCategoryImageBase64(reader.result)

      };
      reader.readAsDataURL(file);
    }
  }

  // change handler
  const changeHandler = (e) => {
    setNewName(e.target.value)
    setCategoryName(e.target.value)
    
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}newArrival/${id}`)
      .then(res => {
        if (res.status === 201) {
          setDbImage(res.data[0].image)
          setDbName(res.data[0].name)
          setCategoryName(res.data[0].name)
        }
      })
  });

  return (
    <div id="adminCategoryAdd">
      <title>Admin | Edit Category</title>
      <Sidebar/>
      <Topbar pageName="Edit Category"/>
      <div className="admin_main_body addCategoryPage">
        <form autoComplete="off" onSubmit={submitHandler}>
          <input
            type="text"
            value={categoryName || dbName}
            onChange={changeHandler}
            placeholder="Category Name"/>

          <div className="image_wrapper">
            {/* {!categoryImageBase64 && <img className="category_thumbnail" src={PUBLIC_URL+dbImage} alt="Category Thumbnail"/>} */}
            {!categoryImageBase64
              ? <img
                  className="category_thumbnail"
                  src={PUBLIC_URL + dbImage}
                  alt="Category Thumbnail"/>
              : <img
                className="category_thumbnail"
                src={categoryImageBase64}
                alt="Category Thumbnail"/>
}
            {/* {!dbImage &&<img className="category_thumbnail" src={categoryImageBase64} alt="Category Thumbnail"/>} */}
            <br/>
            <br/>
          </div>

          <label htmlFor="image">{"Change Image"}</label>
          <input type="file" name="image" id="image" onChange={fileChangeHandler}/>
          <button type="submit">Update</button>
        </form>

        <div className="read_board">
          <p>
            For better view, image size should be :-
            <br/>
            Width =
            <b>200px</b>
            <br/>
            Height =
            <b>200px</b>
          </p>
          {nameExists && <p style={{
            color: "red"
          }}>This category name is already exists</p>}
        </div>

      </div>

    </div>
  )

}

export default AdminNewArrivalEdit