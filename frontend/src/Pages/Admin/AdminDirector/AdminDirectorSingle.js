import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {PUBLIC_URL,BASE_URL} from '../../../config';

const AdminDirectorSingle = ({data,render}) => {

  const [deleting, setDeleting] = useState(false);

  const deleteHandler = ()=>{
    let cnfrm = window.confirm("Are you sure?....")

    if (cnfrm) {
      setDeleting(true)
      axios.delete(`${BASE_URL}director/${data.director_id}`)
      .then(res=>{
        if (res.status === 201) {
          setDeleting(false)
          render()
        }
      })
    }
  }

  return (
    <tr>
      <td className="image"><img src={`${PUBLIC_URL+data.image}`} alt="Director"/></td>
      <td className="name">{data.name}</td>
      <td className="designation">{data.designation}</td>
      <td className="action">
        <Link to={`/admin/director/edit/${data.director_id}`}>Edit</Link>
        <button onClick={deleteHandler}>{deleting ? "Deleting" : "Delete"}</button>
      </td>
    </tr>
  );
}

export default AdminDirectorSingle;
