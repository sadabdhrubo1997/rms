import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {BASE_URL,PUBLIC_URL} from '../../../config';

const AdminSIngleNewArrival = ({id,image,name,render}) => {

  const [deleting, setDeleting] = useState(false);

    
    const deleteHandler = ()=>{
        let cnfrm = window.confirm("Are you sure?") 
        if (cnfrm) {
          setDeleting(true)
          axios
          .delete(`${BASE_URL}/category/${id}`)
          .then(res => {
            if(res.status === 201){
              setDeleting(false)
              render()
            }
    
          })
        }
     }
  return (
    <tr>

      <td>{id}</td>
      <td><img src={PUBLIC_URL+image} alt={image}/></td>
      <td>{name}</td>
      <td>
          <Link to={`/admin/category/edit/${id}`}>Edit</Link>
          <button onClick={deleteHandler}>{deleting? "deleting": "Delete"}</button>
      </td>

    </tr>
  );
}

export default AdminSIngleNewArrival;
