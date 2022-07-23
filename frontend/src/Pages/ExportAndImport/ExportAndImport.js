import React,{useState,useEffect} from 'react'
import Footer from '../Partials/Footer/Footer'
import MenuBar from '../Partials/MenuBar/MenuBar'
import Illustration from './Images/Illustration.png'
import './ExportAndImport.scss'
import ImageDesktop from './Images/Solution_BG_Large.png'
import ImageMobile from './Images/Solution_BG_Small.png'
import FMCG from './Images/fmcg.png';
import LIFESTYLE from './Images/lifestyle.png';
import ELECTRONICS from './Images/electronics.png';
import CHEMICALS from './Images/chemicals.png';
import {BASE_URL} from './../../config'
import axios from 'axios'

const ExportAndImport = () => {

  const [myData, setMyData] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`${BASE_URL}service`)
      .then(res => {
        if (res.status === 201) {
          setMyData(res.data[0].bagAndApparel);
        }
      })
  }, [])

  return (
    <div id="exportAndImport">
      <title>Export and Import</title>
      <MenuBar/>
      <div className="main_body body_height container">
        <section>
          <h2>International Business Solutions</h2>
          <img src={ImageDesktop} alt="" id="desktop"/>
          <img src={ImageMobile} alt="" id="moblie"/>
        </section>
        <section>
          <h2>Trade Finance Support</h2>
          <p>We provide trade finance services with full documentation like Letter of
            Credit (L/C), Telegraphic Transfer (T/T) and Third Party Insurance to help meet
            your international business challenges.
          </p>
        </section>
        <section id="sectors">
          <h2>Industry Sectors</h2>
          <div className="boxWrapper">
            <div className="singleBox">
              <img src={FMCG} alt=""/>
              <p>FMCG</p>
            </div>
            <div className="singleBox">
              <img src={LIFESTYLE} alt=""/>
              <p>Lifestyle</p>
            </div>
            <div className="singleBox">
              <img src={ELECTRONICS} alt=""/>
              <p>Electronics</p>
            </div>
            <div className="singleBox">
              <img src={CHEMICALS} alt=""/>
              <p>Chemicals</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Inbound Trading and Distribution Services</h2>
          <p>{myData}
          </p>
        </section>

        <section className="setpWrapper">
          <div className="singleStep">
            <div className="circle">01</div>
            <div className="bottom">
              <h2>BANGLADESH NAVY ENLISTED SUPPLIER</h2>
              <p>We are an enlisted supplier to the Bangladesh Navy (NSSD) where we did in
                tenders to compete in sourcing and supplying various items.</p>
            </div>
          </div>
          <div className="singleStep">
            <div className="circle">02</div>
            <div className="bottom">
              <h2>PRODUCTS SOURCING</h2>
              <span>
                <br></br><br/><br/></span>
              <p>We procure range of products in competitive price for our clients to maintain
                their online business and shops.</p>
                <br /><br /><br />
            </div>
          </div>
          <div className="singleStep">
            <div className="circle">03</div>
            <div className="bottom">
              <h2>DISTRIBUTION SERVICE</h2>
              <span>
                <br></br><br/><br/></span>

              <p>We assist companies from other countries in exploring Bangladesh market in
                order to launch their product/services through our distribution network.</p>
            </div>
          </div>

        </section>

      </div>

      <div className="illustration">
        <img src={Illustration} alt="Illustration"/>
      </div>
      <Footer/>
    </div>
  )

}

export default ExportAndImport