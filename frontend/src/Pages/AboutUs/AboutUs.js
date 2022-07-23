import React, {useEffect, useState} from 'react';
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import icon1 from './icons/1.png';
import icon2 from './icons/2.png';
import icon3 from './icons/3.png';
import {BASE_URL} from '../../config'
import axios from 'axios'
import './AboutUs.scss'
import About_Us from './img/AboutUsImage.jpg';
import HowItBegan from './img/HowItBegan.jpg';
import OurCoreValues from './img/OurCoreValues.jpg';
import OurMission from './img/OurMission.jpg';
import OurVision from './img/OurVision.jpg';

const AboutUs = () => {
  const [aboutUs,
    setaboutUs] = useState('');
  const [howItBegan,
    sethowItBegan] = useState('');
  const [ourCoreValues,
    setourCoreValues] = useState('');
  const [ourMission,
    setourMission] = useState('');
  const [ourVision,
    setourVision] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`${BASE_URL}aboutUs`)
      .then(res => {
        if (res.status === 201) {
          setaboutUs(res.data[0].aboutUs);
          sethowItBegan(res.data[0].howItBegan);
          setourCoreValues(res.data[0].ourCoreValues);
          setourMission(res.data[0].ourMission);
          setourVision(res.data[0].ourVision);
        }

      })
  }, [])
  return (
    <div id="about_us">
      <title>About Us</title>
      <MenuBar/>

      <div className="main_body body_height">
        <div className="container">
          <section>
            <div>
              <h2>About Us</h2>
              <p>{aboutUs}</p>
            </div>
            <div className="image">
              <img src={About_Us} alt="person"/>
            </div>
          </section>
          <section>
            <div>
              <h2>How It Began</h2>
              <p className="narrow">{howItBegan}</p>
            </div>
            <div className="image">
              <img src={HowItBegan} alt="person"/>

            </div>

          </section>
          <section>
            <div>
              <h2>Our Core Values</h2>
              <p className="narrow">{ourCoreValues}</p>
            </div>
            <div className="image">
              <img src={OurCoreValues} alt="person"/>

            </div>

          </section>

          <div className="icon_box_wrapper">
            <div className="icon_box">
              <img src={icon1} alt=""/>
              <p>FULL CUSTOMIZATION</p>
            </div>
            <div className="icon_box">
              <img src={icon2} alt=""/>
              <p>QUALITY GRANTED</p>
            </div>
            <div className="icon_box">
              <img src={icon3} alt=""/>
              <p>VALUE FOR MONEY</p>
            </div>

          </div>

          <section>
            <div>
              <h2>Our Mission</h2>
              <p>{ourMission}</p>
            </div>
            <div className="image">
              <img src={OurMission} alt="person"/>

            </div>

          </section>
          <section>
            <div>
              <h2>Our Vision</h2>
              <p className="narrow">{ourVision}</p>
            </div>
            <div className="image">
              <img src={OurVision} alt="person"/>

            </div>

          </section>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default AboutUs;
