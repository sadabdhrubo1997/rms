import React from 'react';
import axios from 'axios';
import {PUBLIC_URL,BASE_URL} from '../../../config'

const AdminSingleImageWrapper = ({data,render}) => {

    const deleteHandler = ()=>{
        let cnfrm = window.confirm("Are you sure?..")

        if (cnfrm) {
            axios.delete(`${BASE_URL}photo/${data.photo_id}`)
            .then(res=>{
              if (res.status === 201) {
                render()
              }
            })
        }
    }

  return (
    <div className="singleImageWrapper">
        <div className="sub">
        <img className="singleImage" src={PUBLIC_URL+data.photo} alt={data.id}/>
        <button onClick={deleteHandler}>Delete</button>
        </div>
    </div>
  );
}

export default AdminSingleImageWrapper;
