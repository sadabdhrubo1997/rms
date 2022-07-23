import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';

const AdminGooglePlusWrapper = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [googlePlus, setGooglePlus] = useState(null);
    const [buttonText, setButtonText] = useState("Update");

    useEffect(() => {
        axios.get(`${BASE_URL}contact/googlePlus`)
        .then(res=>{
            setGooglePlus(res.data);
        })
    }, []);

    const changeHandler = (e)=>{
        setGooglePlus(e.target.value)
    }

    const updateHandler = ()=>{
        setButtonText("Updating")        
        axios.put(`${BASE_URL}contact/googlePlus`,{google_plus:googlePlus},{
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
           { !editMode && <p>Google-Plus &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; <a href={googlePlus} target="_blank" rel="noopener noreferrer">{googlePlus}</a> <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>Google-Plus &nbsp;&nbsp;&nbsp;&nbsp;: <input autoFocus type="text" value={googlePlus} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminGooglePlusWrapper;
