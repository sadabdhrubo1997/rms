import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';

const AdminAddressWrapper = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [address, setAddress] = useState(null);
    const [buttonText, setButtonText] = useState("Update");

    useEffect(() => {
        axios.get(`${BASE_URL}contact/address`)
        .then(res=>{
            setAddress(res.data);
        })
    }, []);

    const changeHandler = (e)=>{
        setAddress(e.target.value)
    }

    const updateHandler = ()=>{
        setButtonText("Updating")        
        axios.put(`${BASE_URL}contact/address`,{address:address},{
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
           { !editMode && <p>Address :&nbsp;&nbsp; {address}  <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>Address : <input autoFocus type="text" value={address} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminAddressWrapper;
