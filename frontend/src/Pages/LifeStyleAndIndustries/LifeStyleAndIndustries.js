import React,{useState,useEffect} from 'react';
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import './LifeStyleAndIndustries.scss';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import axios from 'axios';
import {BASE_URL} from '../../config'

const LifeStyleAndIndustries = () => {
  const [locataionAndArea, setLocataionAndArea] = useState('');
  const [facilities, setFacilities] = useState('');

  useEffect(() => {
   axios.get(`${BASE_URL}other`)
   .then(res => {
     if (res.status === 201) {
       setLocataionAndArea(res.data[0].location_and_area)     
       setFacilities(res.data[0].facilities)  
     }

   })
  }, []);

  return (
    <div id="lifeStyleAndIndustries">
      <MenuBar/>
      <title>Our Companies</title>
      <div className="main_body body_height">
        <div className="container">
          <h1>RMS LIFESTYLE INDUSTRIES</h1>
          <section>
            <h2>Factory Location and Area</h2>
            <p>{locataionAndArea}</p>
          </section>
          <section>
            <h2>Facilities</h2>
            <p>{facilities}</p>
          </section>
          <section>
            <div className="bulletWrapper">
              <div className="single">
                <span></span>
                <p>SAMPLE DEVELOPMENT
                </p>
              </div>
              <div className="single">
                <span></span>
                <p>PRODUCTION</p>
              </div>
              <div className="single">
                <span></span>
                <p>QUALITY CHECK</p>
              </div>
            </div>
          </section>
          <div id="imageWrapper">
            <div className="top">
              <div className="left">
                <img src={one} alt="ONE" />
              </div>
              {/* <div className="middle">
                <div className="TOP"></div>
                <div className="BOTTOM"></div>
              </div> */}
              <div className="right">
                <img src={two} alt="TWO" />
              </div>
            </div>
            <div className="bottom">
              <img src={three} alt="THREE" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )

}

export default LifeStyleAndIndustries