import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './Dashboard.scss'
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import axios from "axios"
import {BASE_URL} from '../../../config'

const Dashboard = () => {
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${BASE_URL}admin/authCheck`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
      .then(res => {
        if (res.status === 201) {
          history.push('/admin');
        } else if(res.status === 210) {                
          localStorage.removeItem('token')
          history.push('/admin/login');
        }
      })
      .catch(err => console.log(err))

  },[history]);
  return (
    <div id="dashboard">
      <title>Admin | Dashboard</title>
      <Sidebar/>
      <Topbar pageName="Dashboard"/>

      <div className="admin_main_body">
        <div className="wrapper">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
