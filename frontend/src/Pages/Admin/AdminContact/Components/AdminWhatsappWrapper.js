import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';

const AdminWhatsappWrapper = () => {
    
    const [editMode, setEditMode] = useState(false);
    const [whatsapp, setWhatsapp] = useState(null);
    const [buttonText, setButtonText] = useState("Update");

    useEffect(() => {
        axios.get(`${BASE_URL}contact/whatsapp`)
        .then(res=>{
            setWhatsapp(res.data);
        })
    }, []);


    const changeHandler = (e)=>{
        setWhatsapp(e.target.value)
    }

    const updateHandler = ()=>{
        setButtonText("Updating")        
        axios.put(`${BASE_URL}contact/whatsapp`,{whatsapp:whatsapp},{
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
           { !editMode && <p>Whatsapp &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; <a href={whatsapp} target="_blank" rel="noopener noreferrer">{whatsapp}</a> <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>Whatsapp &nbsp;&nbsp;&nbsp;&nbsp;: <input autoFocus type="text" value={whatsapp} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminWhatsappWrapper;
