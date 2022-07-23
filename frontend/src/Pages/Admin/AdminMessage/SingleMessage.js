import React from 'react';
import {Link} from 'react-router-dom';
import {BASE_URL} from '../../../config';
import axios from 'axios';

const SingleMessage = ({data, serial}) => {

  const deleteHandler = () => {
    let cnfrm = window.confirm("Are you sure?")

    if (cnfrm) {

      axios
        .delete(`${BASE_URL}message/${data.message_id}`,{
          headers:{
            authorization:localStorage.getItem('token')
          }
        })
        .then(res => {          
          if (res.status === 201) {
            window.location.reload(true)
          }
        })
    }
  }
  return (

    <tr>
      <td>{serial + 1}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.contact}</td>
      <td>
        <Link to={`/admin/message/${data.message_id}`}>View</Link>
        <button onClick={deleteHandler}>Delete</button>
      </td>
    </tr>

  );
}

export default SingleMessage;
