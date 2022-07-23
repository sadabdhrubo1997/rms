import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';

const AdminEmailWrapper = () => {

 
    
    const [editMode, setEditMode] = useState(false);
    const [email, setEmail] = useState(null);
    const [buttonText, setButtonText] = useState("Update");

    useEffect(() => {
        axios.get(`${BASE_URL}contact/email`)
        .then(res=>{
            setEmail(res.data);
        })
    }, []);

    const changeHandler = (e)=>{
        setEmail(e.target.value)
    }

    const updateHandler = ()=>{
        setButtonText("Updating")        
        axios.put(`${BASE_URL}contact/email`,{email:email},{
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
           { !editMode && <p>E-mail &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; {email}  <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>E-mail &nbsp;&nbsp;&nbsp;&nbsp;: <input autoFocus type="text" value={email} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminEmailWrapper;
