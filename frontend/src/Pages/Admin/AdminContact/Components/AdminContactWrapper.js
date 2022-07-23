import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../../../config'

const AdminContactWrapper = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [contactNo, setContactNo] = useState(null);
    const [buttonText, setButtonText] = useState("Update");

    useEffect(() => {
        axios.get(`${BASE_URL}contact/phone`)
        .then(res=>{
            setContactNo(res.data);
        })
    }, []);

    const changeHandler = (e)=>{
        setContactNo(e.target.value)
    }

    const updateHandler = ()=>{
        setButtonText("Updating")        
        axios.put(`${BASE_URL}contact/phone`,{phone:contactNo},{
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
           { !editMode && <p>Contact :&nbsp;&nbsp; {contactNo}  <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>Contact : <input type="text" autoFocus value={contactNo} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminContactWrapper;
