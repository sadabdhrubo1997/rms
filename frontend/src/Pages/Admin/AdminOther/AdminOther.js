import React,{useState,useEffect} from 'react'
import Sidebar from '../Partials/Sidebar/Sidebar'
import Topbar from '../Partials/Topbar/Topbar'
import './AdminOther.scss'
import axios from 'axios'
import {BASE_URL} from '../../../config'



const AdminOther = () => {

    const [btnText, setbtnText] = useState("Update");
    const [footerShortDesc, setfooterShortDesc] = useState('');
    const [slogan, setSlogan] = useState('');
    const [heading, setHeading] = useState('');
    const [headerParagraph, setHeaderParagraph] = useState("");
    const [locationAndArea, setLocationAndArea] = useState("");
    const [facilities, setFacilities] = useState("");
    const [id, setid] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const submitHandler = async ()=>{
        setbtnText("Updating")
        await axios.put(`${BASE_URL}other/${id}`,{footerShortDesc,slogan,heading,headerParagraph,locationAndArea,facilities})
        .then(res=>{
            if (res.status === 201) {
                setIsLoading(false)
                setbtnText("Update")
                setTimeout(() => {
                    alert("Updated Successfully..")
                }, 500);
            }
        })
    }

    useEffect(() => {
        axios.get(`${BASE_URL}other`)
        .then(res=>{
            if (res.status === 201) {
                setIsLoading(false)
                setfooterShortDesc(res.data[0].footerShortDesc)
                setSlogan(res.data[0].slogan)
                setHeading(res.data[0].heading)
                setHeaderParagraph(res.data[0].headerParagraph)
                setid(res.data[0].id)
                setLocationAndArea(res.data[0].location_and_area)
                setFacilities(res.data[0].facilities)
            }
        })
    },[]);

  return(
    <div id="admin_other">
              <title>Admin | Other</title>
        <Sidebar/>
        <Topbar pageName="Admin | Other"/>
        {
        isLoading &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
        </div>
      }

        {!isLoading && <div className="admin_main_body">
            <h2>Footer Short Description</h2>
            <textarea onChange={e=>setfooterShortDesc(e.target.value)} cols="30" value={footerShortDesc} rows="10"/>

            <h2>Slogan</h2>
            <textarea value={slogan} onChange={e=>setSlogan(e.target.value)} cols="30" rows="5"></textarea>
            <h2>Heading</h2>
            <textarea value={heading} onChange={e=>setHeading(e.target.value)} cols="30" rows="5"></textarea>
            <h2>Header Paragraph</h2>
            <textarea value={headerParagraph} onChange={e=>setHeaderParagraph(e.target.value)} cols="30" rows="10"></textarea>
            <h2>Factory Location and Area</h2>
            <textarea value={locationAndArea} onChange={e=>setLocationAndArea(e.target.value)} cols="30" rows="5"></textarea>
            <h2>Facilities</h2>
            <textarea value={facilities} onChange={e=>setFacilities(e.target.value)} cols="30" rows="5"></textarea>

            <button onClick={submitHandler} className="update_btn">{btnText}</button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>}
    </div>
   )

 }

export default AdminOther