import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './AdminCategory.scss';
import AdminSIngleCategory from './AdminSingleCategory';
import axios from 'axios';
import {BASE_URL} from '../../../config';

const AdminCategory = () => {
  const [compRndr,
    setCompRndr] = useState(false);

  const render = () => {
    setCompRndr(!compRndr)
  }

  const [data,
    setData] = useState(null);
  const [isLoading,
    setIsLoading] = useState(true);
    const [noData, setNoData] = useState(false);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/category`)
      .then(res => {
        if (res.status === 201) {
          setIsLoading(false)
          setData(res.data)
        } else if (res.status === 202) {
          setIsLoading(false)
          setNoData(true)
        }

      })
  }, [render, data]);

  //   const MyView = () => {     return(       data && data.map((item, idx) =>
  // {<AdminSIngleCategory key={idx}/>})     )   }

  return (
    <div>
      <title>Admin | Category</title>
      <Sidebar/>
      <Topbar pageName="Category"/> {isLoading && <div className="admin_main_body">
        <h1
          style={{
          color: "#00609D",
          textAlign: "center"
        }}>Loading...</h1>
      </div>
}
      {noData && <div className="admin_main_body">
        <h1
          style={{
          color: "#00609D",
          textAlign: "center"
        }}>No Category Exists.</h1>
      </div>
}
      {!isLoading && <div className="admin_main_body">
        <Link className="addCategoryButton" to="/admin/category/add">Add New Category</Link>
        <div className="wrapper">
          <table>
            <thead>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </thead>
            <tbody>
              {data && data.map((item, idx) => {
                return (<AdminSIngleCategory
                  render={render}
                  name={item.category_name}
                  image={item.category_image}
                  id={item.category_id}
                  key={idx}/>)
              })
}
            </tbody>
          </table>
        </div>
      </div>}
    </div>
  );
}

export default AdminCategory;
