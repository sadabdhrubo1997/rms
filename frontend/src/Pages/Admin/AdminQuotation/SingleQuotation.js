import React from 'react';
import {BASE_URL} from '../../../config'
import axios from 'axios'

const SingleQuotation = ({data,render}) => {




    const deleteHandler = ()=>{
       let cnfrm = window.confirm("Are you sure?")

       if (cnfrm) {
        axios.delete(`${BASE_URL}quotation/${data.quotation_id}`,{
          headers:{
              authorization:localStorage.getItem('token')
          }
      })
      .then(res=>{
          if(res.status === 201){
            render()              
          }
      })
       }
    }
  return (
    
      <tr>
        <td>{data.quotation_id}</td>
        <td>{data.name}</td>
        <td>{data.contact}</td>
        <td>{data.email}</td>
        <td>{data.interested_item}</td>
        <td>{data.quantity}</td>
        <td>
          <button onClick={deleteHandler}>Delete</button>
        </td>
      </tr>
    
  );
}

export default SingleQuotation;
