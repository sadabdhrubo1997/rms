import React, {useState, useEffect} from 'react'
import Sidebar from '../Partials/Sidebar/Sidebar'
import Topbar from '../Partials/Topbar/Topbar'
import './AdminHeaderSlider.scss'
import HeaderSingleSliderItem from './HeaderSingleSliderItem'
import axios from 'axios'
import {BASE_URL, PUBLIC_URL} from '../../../config';

const AdminHeaderSlider = () => {

  const [data,
    setData] = useState(null);
  const [submitting,
    setSubmitting] = useState(false);
  const [compRender,
    setCompRender] = useState(false);
  const [loading,
    setLoading] = useState(true);
  const [noData,
    setNoData] = useState(false);

  const rndr = () => {
    setCompRender(!compRender)
  }

  const [image,
    setImage] = useState(null);
  const [imageBase64,
    setImageBase64] = useState(null);

  const fileChangeHandler = (e) => {
    let file = e.target.files[0];
    setImage(file)

    if (file) {
      let reader = new FileReader();

      reader.onload = () => {
        setImageBase64(reader.result)
      };
      reader.readAsDataURL(file);

    }

  }

  const submitHandler = async ()=>{
    const formData = new FormData();
    formData.append("photo", image)
    setSubmitting(true)
    await axios.post(`${BASE_URL}header-slider`,formData,{
      headers:{
        authorization:localStorage.getItem("token")
      }
    }).then(res=>{
      setImage(null)
      setImageBase64(null)
      setSubmitting(false)
      if (res.status === 201) {
        setCompRender()
        setTimeout(() => {
          alert("Uploaded Successfully")
        }, 100);
      }
    }).catch(e=>console.log(e))
    
}

  useEffect(() => {
    axios
      .get(`${BASE_URL}header-slider`)
      .then(res => {
        if (res.status === 202) {
          setLoading(false)
          setNoData(true)
          setData(null)
        } else if (res.status === 201) {
          setLoading(false)
          setData(res.data)
          setNoData(false)
        }else if(res.status === 404){
          setLoading(false)
        }
      })
  }, [compRender]);

  return (
    <div id="admin_header_slider">
      <title>Admin | Header Slider</title>
      <Sidebar/>
      <Topbar pageName="Admin | Header Slider"/>
      <div className="admin_main_body admin_header_slider">
        <div className="top">
          <div className="left">
            <label htmlFor="sliderImage">
              {imageBase64
                ? "Change Image"
                : "Upload Image"}
              <input
                type="file"
                onChange={fileChangeHandler}
                name="sliderImage"
                id="sliderImage"
                style={{
                display: "none"
              }}/>
            </label>
            <br/><br/><br/><br/> {imageBase64 && <div>
              <img
                style={{
                width: "80%"
              }}
                src={imageBase64}
                alt="Banner Image"/>
              <br/><br/><br/><br/>
              <button onClick={() => (setImageBase64(null) && setImage(null))}>Cancel</button>
              <button onClick={submitHandler}>{submitting
                  ? "Processing"
                  : "Submit"}</button>
            </div>
}

          </div>
          <div className="right">
            <div className="read_board">
              <p>
                For better view, image size should be :-
                <br/>
                Width =
                <b>1347px</b>
                <br/>
                Height =
                <b>484px</b>
              </p>
            </div>
          </div>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="bottom">
          <table>
            <thead>
              <th>Serial</th>
              <th>Slider Image</th>
              <th>Action</th>
            </thead>
            <tbody>
              {data && data.map((item, idx) => (<HeaderSingleSliderItem setCompRender={rndr} serial={idx} key={idx} data={item}/>))
}

            </tbody>

          </table>
          {noData && <h1 style={{
            textAlign: "center",
            color:"#00609D"
          }}>No Slider Image Exists</h1>
          }
          {loading && <h1 style={{
            textAlign: "center",
            color:"#00609D"
          }}>Loading...</h1>
          }
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )

}

export default AdminHeaderSlider