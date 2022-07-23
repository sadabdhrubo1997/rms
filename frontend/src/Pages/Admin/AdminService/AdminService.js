import React, {useState, useEffect} from 'react'
import Sidebar from '../Partials/Sidebar/Sidebar'
import Topbar from '../Partials/Topbar/Topbar'
import './AdminService.scss';
import axios from 'axios'
import {BASE_URL} from '../../../config'

const AdminService = () => {
  const [btnText,
    setbtnText] = useState("Update");
  const [services,
    setservices] = useState('');
  const [bagAndApparel,
    setBagAndApparel] = useState('');
  const [id,
    setId] = useState(null);
  const [isLoading,
    setIsLoading] = useState(true);

  const submitHandler = async() => {
    setbtnText("Updating")
    // setTimeout(() => {     setbtnText("Update") }, 2000); setTimeout(() => {
    // alert("Submit Handler is Working") }, 2100);
    axios
      .put(`${BASE_URL}service/${id}`, {services, bagAndApparel})
      .then(res => {
        if (res.status === 201) {
          setbtnText("Update")
          setTimeout(() => {
            alert("Updated Successfully..")
          }, 500);
        }
      })
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}service/`)
      .then(res => {
        if (res.status === 201) {
          setIsLoading(false)
          setId(res.data[0].id)
          setservices(res.data[0].services)
          setBagAndApparel(res.data[0].bagAndApparel)
        }
      })
  }, []);

  return (
    <div id="admin_services">
      <title>Admin | Services</title>
      <Sidebar/>
      <Topbar pageName="Admin | Services"/>
      {!isLoading && <div className="admin_main_body">
        <h2>Services</h2>
        <textarea
          value={services}
          onChange={e => setservices(e.target.value)}
          cols="30"
          rows="10"/>
        <h2>Bag/Apparel Manufacturing Service</h2>
        <textarea
          value={bagAndApparel}
          onChange={e => setBagAndApparel(e.target.value)}
          cols="30"
          rows="10"/>
        <button onClick={submitHandler} className="update_btn">{btnText}</button>
      </div>}
      {
        isLoading &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
        </div>
      }
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )

}

export default AdminService