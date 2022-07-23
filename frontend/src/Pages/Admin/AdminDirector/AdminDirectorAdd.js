import React, {useState} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import {BASE_URL} from '../../../config';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const AdminDirectorAdd = () => {

  let history = useHistory()

  const [personData, setPersonData] = useState({
      personName:"",
      personDesignation:""
  });

  const [adding, setAdding] = useState(false);

  const [categoryImage, setCategoryImage] = useState('');

  const [categoryImageBase64,
    setCategoryImageBase64] = useState('');


    const submitHandler = async (e)=>{
        e.preventDefault()
        setAdding(true)
        const formData = new FormData();
        formData.append("name",personData.personName)
        formData.append("designation",personData.personDesignation)
        formData.append("directorImage", categoryImage)

        await axios.post(`${BASE_URL}director`,formData,{
          headers:{
            authorization:localStorage.getItem("token")
          }
        }).then(res=>{
          if (res.status === 201) {
            history.push("/admin/director")
          }
        }).catch(e=>console.log(e))
        
    }


    const changeHandler = (e)=>{
        setPersonData({
            ...personData,
            [e.target.name]:e.target.value
        })

        
        
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
      <title>Admin | Add Category</title>
      <Sidebar/>
      <Topbar pageName="Add Director"/>
      <div className="admin_main_body addCategoryPage">
        <form autoComplete="off" onSubmit={submitHandler}>
          <input type="text" value={personData.personName} onChange={changeHandler} placeholder="Person Name" name="personName" id="name"/>
          <input type="text" value={personData.personPost} onChange={changeHandler} placeholder="Person Designation" name="personDesignation" id="post"/>
          {
            categoryImageBase64 &&
            <div className="image_wrapper">
                <img className="category_thumbnail" src={categoryImageBase64} alt="Category Thumbnail"/>
                <br/>
                <br/>
            </div>
        }
          <label htmlFor="image">{categoryImageBase64 ? "Change Image" : "Select Image"}</label>
          <input type="file" name="image" id="image" onChange={fileChangeHandler}/>
          {categoryImageBase64 && <button type="submit">{adding ? "Submitting" : "Submit"}</button>}
        </form>

        <div className="read_board">
            <p>
                For better view, image size should be :-
                <br/>
                Width = <b>200px</b>
                <br/>
                Height = <b>200px</b>
            </p>
        </div>
        
      </div>


    </div>
  );
}

export default AdminDirectorAdd;
