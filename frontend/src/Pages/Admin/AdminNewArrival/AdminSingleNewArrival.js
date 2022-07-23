import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {BASE_URL, PUBLIC_URL} from '../../../config';

const AdminSingleNewArrival = ({id, image, name, render}) => {

  const [deleting,
    setDeleting] = useState(false);
  
  const deleteHandler = async() => {
    let cnfrm = window.confirm("Are you sure?")
    if (cnfrm) {
      setDeleting(true)
      await axios
        .delete(`${BASE_URL}/newArrival/${id}`)
        .then(res => {
          if (res.status === 201) {
            render()
          }
        })
    }
  }
  return (
    <tr>
      <td>{id}</td>
      <td><img src={PUBLIC_URL + image} alt={image}/></td>
      <td>{name}</td>
      <td>
        <Link to={`/admin/new-arrival/edit/${id}`}>Edit</Link>
        <button onClick={deleteHandler}>{deleting ? "Deleting" : "Delete"}</button>
      </td>
    </tr>
  );
}

export default AdminSingleNewArrival;
