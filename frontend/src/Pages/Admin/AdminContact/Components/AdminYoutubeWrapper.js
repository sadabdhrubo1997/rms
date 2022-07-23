import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../../../../config';
import axios from 'axios';


const AdminYoutubeWrapper = () => {    
    const [editMode, setEditMode] = useState(false);
    const [youtube, setYoutube] = useState(null);
    const [buttonText, setButtonText] = useState("Update");


    
    useEffect(() => {
        axios.get(`${BASE_URL}contact/youtube`)
        .then(res=>{
            setYoutube(res.data);
        })
    }, []);

    const changeHandler = (e)=>{
        setYoutube(e.target.value)
    }

    const updateHandler = ()=>{
        setButtonText("Updating")        
        axios.put(`${BASE_URL}contact/youtube`,{youtube:youtube},{
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
           { !editMode && <p>Youtube &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; <a href={youtube} target="_blank" rel="noopener noreferrer">{youtube}</a> <button onClick={()=>setEditMode(!editMode)}>Edit</button></p>}
           {editMode && <p>Youtube &nbsp;&nbsp;&nbsp;&nbsp;: <input autoFocus type="text" value={youtube} onChange={changeHandler}/>  <button onClick={updateHandler}>{buttonText}</button></p>}
        </div>
    );
}

export default AdminYoutubeWrapper;
