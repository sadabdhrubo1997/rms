import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';

const AdminTwitterWrapper = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [twitter, setTwitter] = useState(null);
    const [buttonText, setButtonText] = useState("Update");

    useEffect(() => {
        axios.get(`${BASE_URL}contact/twitter`)
        .then(res=>{
            setTwitter(res.data);
        })
    }, []);

    const changeHandler = (e)=>{
        setTwitter(e.target.value)
    }

    const updateHandler = ()=>{   setButtonText("Updating")        
    axios.put(`${BASE_URL}contact/twitter`,{twitter:twitter},{
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
           { !editMode && <p>Twitter &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; <a href={twitter} target="_blank" rel="noopener noreferrer">{twitter}</a> <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>Twitter &nbsp;&nbsp;&nbsp;&nbsp;: <input autoFocus type="text" value={twitter} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminTwitterWrapper;
