import React, {useState, useEffect} from 'react'
import './AdminAboutUs.scss'
import {useHistory} from 'react-router-dom';
import Sidebar from '../Partials/Sidebar/Sidebar'
import Topbar from '../Partials/Topbar/Topbar'
import axios from 'axios'
import {BASE_URL} from "../../../config"

const AdminNewArrival = () => {
  let history = useHistory();
  const [render, setRender] = useState(false);
  const [loading,
    setLoading] = useState(true);
  const [aboutUs,
    setAboutUs] = useState("Loading......");
  const [howItBegan,
    setHowItBegan] = useState("Loading......");
  const [ourCoreValues,
    setOurCoreValues] = useState("Loading......");
  const [ourMission,
    setOurMission] = useState("Loading......");
  const [ourVision,
    setOurVision] = useState("Loading......");
  const [btnText, setBtnText] = useState("Update");

  const submitHandler = () => {
    setBtnText("Updating..")
    axios.put(`${BASE_URL}/aboutUs`,{aboutUs,howItBegan,ourCoreValues,ourMission,ourVision})
    .then(res=>{
      if (res.status === 201) {
        setRender(!render)
        setBtnText("Update")     
        setTimeout(()=>{
          alert("Updated Successfully")
        },200)   
        window.scrollTo(0,0)
      }
    })
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}aboutUs`)
      .then(res => {
        if (res.status === 201) {
          setLoading(false)
          setAboutUs(res.data[0].aboutUs)
          setHowItBegan(res.data[0].howItBegan)
          setOurCoreValues(res.data[0].ourCoreValues)
          setOurMission(res.data[0].ourMission)
          setOurVision(res.data[0].ourVision)
        }
      })
  }, [render]);

  return (
    <div id="adminAboutUs">
      <title>Admin | About Us</title>
      <Sidebar/>
      <Topbar pageName="About Us"/> {loading && <div className="admin_main_body" id="admin_about_us">
        <h1 className="loading">Loading........</h1>
      </div>
}
      {!loading && <div className="admin_main_body" id="admin_about_us">
        <h2>About Us</h2>
        <textarea
          onChange={(e) => setAboutUs(e.target.value)}
          value={aboutUs}
          rows="7"/>
        <h2>How It Began</h2>
        <textarea
          onChange={(e) => setHowItBegan(e.target.value)}
          value={howItBegan}
          rows="7"/>
        <h2>Our Core Values</h2>
        <textarea
          onChange={(e) => setOurCoreValues(e.target.value)}
          value={ourCoreValues}
          rows="7"/>
        <h2>Our Mission</h2>
        <textarea
          onChange={(e) => setOurMission(e.target.value)}
          value={ourMission}
          rows="7"/>
        <h2>Our Vision</h2>
        <textarea
          onChange={(e) => setOurVision(e.target.value)}
          value={ourVision}
          rows="7"/>
        <br/><br/><br/><br/><br/>
        <button onClick={submitHandler} className="update_btn">{btnText}</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>}
    </div>
  )

}

export default AdminNewArrival