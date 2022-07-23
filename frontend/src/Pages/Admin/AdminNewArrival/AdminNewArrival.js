import React, {useState, useEffect} from 'react'
import Sidebar from '../Partials/Sidebar/Sidebar'
import Topbar from '../Partials/Topbar/Topbar'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {BASE_URL} from '../../../config'
import './AdminNewArrival.scss'
import './AdminCategory.scss'
import AdminSingleNewArrival from './AdminSingleNewArrival'

const AdminNewArrival = () => {
  const [compRndr,
    setcompRndr] = useState(false);
  const [noData,
    setNoData] = useState(false);
  const [isLoading,
    setIsLoading] = useState(true);

  const render = () => {
    setcompRndr(!compRndr)
  }

  const [data,
    setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}newArrival`)
      .then(res => {
        if (res.status === 201) {
          console.log(201);
          setIsLoading(false)
          setData(res.data)
        } else if (res.status === 202) {
          setIsLoading(false)
          setNoData(true)
        }
      })
      .catch(e => console.log(e))
  }, [compRndr]);

  return (
    <div id="adminNewArrival">
      <title>Admin | New Arrival</title>
      <Sidebar/>
      <Topbar pageName="New Arrival"/>
      
        {
          isLoading &&
          <div className="admin_main_body">
            <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
          </div>
        }
        {
          noData &&
         <div className="admin_main_body">
            <h1 style={{color:"#00609D",textAlign:"center"}}>No Item Exists.</h1>
         </div>
        }
      
      <div className="admin_main_body">
        <Link className="addCategoryButton" to="/admin/new-arrival/add">Add New Arrival</Link>
      {data  && 
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
                return (<AdminSingleNewArrival
                  render={render}
                  name={item.name}
                  image={item.image}
                  id={item.id}
                  key={idx}/>)
              })
}
            </tbody>
          </table>
        </div>}
      </div>
    </div>
  )

}

export default AdminNewArrival