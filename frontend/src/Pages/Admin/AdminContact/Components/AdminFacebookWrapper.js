import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';

const AdminFacebookWrapper = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [facebook, setFacebook] = useState(null);
    const [buttonText, setButtonText] = useState("Update");


    useEffect(() => {
        axios.get(`${BASE_URL}contact/facebook`)
        .then(res=>{
            setFacebook(res.data);
        })
    }, []);

    const changeHandler = (e)=>{
        setFacebook(e.target.value)
    }

    const updateHandler = ()=>{
        setButtonText("Updating")        
        axios.put(`${BASE_URL}contact/facebook`,{facebook:facebook},{
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
           { !editMode && <p>Facebook &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; <a href={facebook} target="_blank" rel="noopener noreferrer">{facebook}</a> <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>Facebook &nbsp;&nbsp;&nbsp;&nbsp;: <input autoFocus type="text" value={facebook} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminFacebookWrapper;
