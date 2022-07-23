import React, {useState, useEffect} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import {BASE_URL, PUBLIC_URL} from '../../../config';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom'

const AdminDirectorEdit = () => {

  let history = useHistory()
  let {id} = useParams();

  const [submitting, setSubmitting] = useState(false);

  const [personData,
    setPersonData] = useState({personName: "", personDesignation: ""});

  const [newImage,
    setNewImage] = useState(null);
  const [dbImage,
    setDbImage] = useState(null);

  const [categoryImageBase64,
    setCategoryImageBase64] = useState(null);

  const submitHandler = async(e) => {
    e.preventDefault()
    setSubmitting(true)
    const formData = new FormData();
    if (newImage) {
      formData.append("name", personData.personName)
      formData.append("designation", personData.personDesignation)
      formData.append("directorImage", newImage)

      await axios
        .put(`${BASE_URL}director/withImage/${id}`, formData, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
        .then(res => {
          if (res.status === 201) {
            history.push("/admin/director")
          }
        })
        .catch(e => console.log(e))
    } else {
      formData.append("name", personData.personName)
      formData.append("designation", personData.personDesignation)
      await axios.put(`${BASE_URL}director/withOutImage/${id}`, {
        "name": personData.personName,
        "designation": personData.personDesignation
      }, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      }).then(res => {
        if (res.status === 201) {
          history.push("/admin/director")
        }
      }).catch(e => console.log(e))
    }

  }

  const changeHandler = (e) => {
    setPersonData({
      ...personData,
      [e.target.name]: e.target.value
    })

  }

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

  useEffect(() => {
    axios
      .get(`${BASE_URL}director/${id}`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
      .then(res => {
        if (res.status === 201) {
          setDbImage(res.data[0].image)
          setPersonData({
            ...personData,
            personName: res.data[0].name,
            personDesignation: res.data[0].designation
          })
        }
      })
  },[]);

  return (
    <div id="adminCategoryAdd">
      <title>Admin | Add Category</title>
      <Sidebar/>
      <Topbar pageName="Add Director"/>
      <div className="admin_main_body addCategoryPage">
        <form autoComplete="off" onSubmit={submitHandler}>
          <input
            type="text"
            value={personData.personName}
            onChange={changeHandler}
            placeholder="Person Name"
            name="personName"
            id="name"/>
          <input
            type="text"
            value={personData.personDesignation}
            onChange={changeHandler}
            placeholder="Person Designation"
            name="personDesignation"
            id="post"/>

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
          <button type="submit">{submitting?"Updating": "Update"}</button>
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
        </div>

      </div>
  

    </div>
  );
}

export default AdminDirectorEdit;
