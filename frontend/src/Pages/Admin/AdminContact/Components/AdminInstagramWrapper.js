import React, {useState, useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';


const AdminInstagramWrapper = () => {

  const [editMode,
    setEditMode] = useState(false);
  const [instagram,
    setInstagram] = useState(null);
  const [buttonText,
    setButtonText] = useState("Update");

  const changeHandler = (e) => {
    setInstagram(e.target.value)
  }


  useEffect(() => {
    axios.get(`${BASE_URL}contact/instagram`)
    .then(res=>{
        setInstagram(res.data);
    })
}, []);

  const updateHandler = () => {
    setButtonText("Updating")        
    axios.put(`${BASE_URL}contact/instagram`,{instagram:instagram},{
        headers:{
            authorization:localStorage.getItem('token')
        }
    }).then(res=>{
        if(res.status === 201){
            setEditMode(false)
            setButtonText("Update")  
        }
    })

  }

  return (
    <div className="adminContactWrapper">
      {!editMode && <p>Instagram &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;
        <a href={instagram} target="_blank" rel="noopener noreferrer">{instagram}</a>
        <button onClick={() => setEditMode(!editMode)}>Edit</button>
      </p>}
      {editMode && <p>Instagram &nbsp;&nbsp;&nbsp;&nbsp;:
        <input autoFocus type="text" value={instagram} onChange={changeHandler}/>
        <button onClick={updateHandler}>{buttonText}</button>
      </p>}
    </div>
  );
}

export default AdminInstagramWrapper;
