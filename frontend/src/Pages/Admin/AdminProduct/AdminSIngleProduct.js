import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {PUBLIC_URL, BASE_URL} from '../../../config';
import axios from 'axios';

const AdminSIngleProduct = ({data, rerender}) => {

  let history = useHistory();

  const [deleting,
    setDeleting] = useState(false);
  const [deleted,
    setDeleted] = useState(false);

  let isDeleted = {
    display: "none"
  }

  const deleteHandler = () => {
    let cnfrm = window.confirm("Are you sure?")

    if (cnfrm) {
      setDeleting(true)
      axios
        .delete(`${BASE_URL}product/${data.product_id}`, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
        .then(res => {
          console.log(res.status);

          if (res.status === 206) {
            localStorage.removeItem('token')
            history.push("/admin/login")
          } else if (res.status === 201) {
            setDeleting(false)
            setDeleted(true)
            // rerender()
          }

        })
    }
  }

  return (
    <tr style={deleted
      ? {
        display: "none"
      }
      : null}>

      <td>{data.product_no}</td>
      <td><img src={`${PUBLIC_URL}` + data.product_image} alt="Product"/></td>
      <td>{data.category_name}</td>
      <td>{data.primary_material}</td>
      <td>{data.dimension}</td>
      <td>{data.warrenty}</td>
      <td>{data.price}</td>
      <td>
        <Link to={`/admin/product/edit/${data.product_id}`}>Edit</Link>
        <button onClick={deleteHandler}>{deleting
            ? "Deleting"
            : "Delete"}</button>
      </td>

    </tr>
  );
}

export default AdminSIngleProduct;
