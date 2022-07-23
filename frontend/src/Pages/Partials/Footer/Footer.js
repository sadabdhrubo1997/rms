import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './Footer.scss';
import Logo from './footer_logo.svg';
import Profile from './profile.png';
import Email from './email.png';
import Location from './location.png';
import axios from 'axios'
import {BASE_URL} from '../../../config'

const Footer = () => {

  const [phone,
    setphone] = useState('');
  const [email,
    setemail] = useState('');
  const [address,
    setaddress] = useState('');
  const [fb,
    setfb] = useState('');
  const [gp,
    setgp] = useState('');
  const [twtr,
    settwtr] = useState('');
  const [whtsap,
    setwhtsap] = useState('');
  const [ytb,
    setytb] = useState('');
  const [insta,
    setinsta] = useState('');
  const [footerShortDesc,
    setfooterShortDesc] = useState('');

  const topScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}contact/phone`)
      .then(res => {
        if (res.status === 201) {
          setphone(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/email`)
      .then(res => {
        if (res.status === 201) {
          setemail(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/address`)
      .then(res => {
        if (res.status === 201) {
          setaddress(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/facebook`)
      .then(res => {
        if (res.status === 201) {
          setfb(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/googlePlus`)
      .then(res => {
        if (res.status === 201) {
          setgp(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/twitter`)
      .then(res => {
        if (res.status === 201) {
          settwtr(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/whatsapp`)
      .then(res => {
        if (res.status === 201) {
          setwhtsap(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/youtube`)
      .then(res => {
        if (res.status === 201) {
          setytb(res.data);
        }
      })
    axios
      .get(`${BASE_URL}contact/instagram`)
      .then(res => {
        if (res.status === 201) {
          setinsta(res.data);
        }
      })
    axios
      .get(`${BASE_URL}other`)
      .then(res => {
        if (res.status === 201) {
          setfooterShortDesc(res.data[0].footerShortDesc)
        }
      })

  }, []);

  return (
    <div id="footer">
      <div className="top">
        <div className="container">
          <div className="main">
            <div className="left">
              <img className="footerLogo" src={Logo} alt="Logo"/>
              <p className="shortDesc">
                {footerShortDesc}
              </p>
            </div>

            <div className="contact">
              <h2>Contact Info</h2>
              <div className="address">
                <div className="icon">
                  <img src={Location} alt="Location"/>
                </div>
                <p>{address}</p>
              </div>
              <div className="phone">
                <div className="icon">
                  <img src={Profile} alt="Location"/>
                </div>
                <p>{phone}</p>
              </div>
              <div className="email">
                <div className="icon">
                  <img src={Email} alt="Location"/>
                </div>
                <p>{email}</p>
              </div>
            </div>

            <div className="links">
              <h2>Quick Links</h2>

              <div className="main">
                <div className="left">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Service</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="services">
              <h2>Our Services</h2>
              <ul>
                <li>
                  Bag Manufacturing
                </li>
                <li>
                  Import / Export
                </li>
                <li>
                  Trade Distribution
                </li>
                <li>
                  Government Tenders
                </li>

              </ul>
            </div>

          </div>
          <div className="social">
            <a href={fb} rel="noreferrer" target="_blank">
              {/* <img src={Facebook} alt="Facebook"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.394"
                height="23.394"
                viewBox="0 0 23.394 23.394">
                <g id="Group_117" data-name="Group 117" transform="translate(-262 -4295.579)">
                  <path
                    id="facebook_1_"
                    data-name="facebook (1)"
                    d="M0,0V23.394H12.459V14.357H9.413V10.668h3.046V7.57a4.08,4.08,0,0,1,4.08-4.08h3.184V6.808H17.444a1.3,1.3,0,0,0-1.3,1.3v2.564h3.517l-.486,3.689H16.148v9.037h7.246V0Z"
                    transform="translate(262 4295.579)"/>
                </g>
              </svg>

            </a>
            <a href={gp} rel="noreferrer" target="_blank">
              {/* <img src={GooglePlus} alt="GooglePlus"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.394"
                height="23.394"
                viewBox="0 0 23.394 23.394">
                <g
                  id="Group_116"
                  data-name="Group 116"
                  transform="translate(-295.394 -4295.579)">
                  <path
                    id="google-plus_1_"
                    data-name="google-plus (1)"
                    d="M0,0V23.394H23.394V0ZM13.638,12.681a4.677,4.677,0,0,1-4.9,4.135,5.161,5.161,0,1,1,0-10.323,4.9,4.9,0,0,1,3.467,1.346L10.727,9.321a2.724,2.724,0,0,0-1.985-.775A3.1,3.1,0,0,0,5.7,11.654a3.063,3.063,0,0,0,3.038,3.068,2.594,2.594,0,0,0,2.779-2.041H8.742V10.608h4.883a6.048,6.048,0,0,1,.088,1.046A6.812,6.812,0,0,1,13.638,12.681Zm6.2-.643H18.027v1.808H16.743V12.038H14.934V10.753h1.809V8.944h1.285v1.809h1.809Z"
                    transform="translate(295.394 4295.579)"/>
                </g>
              </svg>

            </a>
            <a href={twtr} rel="noreferrer" target="_blank">
              {/* <img src={Twitter} alt="Twitter"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.394"
                height="23.394"
                viewBox="0 0 23.394 23.394">
                <g
                  id="Group_115"
                  data-name="Group 115"
                  transform="translate(-328.788 -4295.579)">
                  <rect
                    id="Rectangle_28"
                    data-name="Rectangle 28"
                    width="23.394"
                    height="23.394"
                    transform="translate(328.788 4295.579)"/>
                  <path
                    id="Path_25"
                    data-name="Path 25"
                    d="M60.359,108.452a10.072,10.072,0,0,0,15.454-8.512q0-.208-.008-.414a7.914,7.914,0,0,0,1.75-1.8,8.169,8.169,0,0,1-2,.519H75.55l.005,0a3.744,3.744,0,0,0,1.537-1.961A12.268,12.268,0,0,1,75.377,97c-.166.055-.339.109-.518.159a3.534,3.534,0,0,0-6.022,3.214,10.641,10.641,0,0,1-7.253-3.666s-1.689,2.306,1.006,4.677a3.631,3.631,0,0,1-1.526-.455,3.358,3.358,0,0,0,2.793,3.508,3.233,3.233,0,0,1-1.559.065,3.483,3.483,0,0,0,3.248,2.468,6.787,6.787,0,0,1-5.189,1.483Z"
                    transform="translate(271.528 4204.468)"
                    fill="#fff"/>
                </g>
              </svg>

            </a>
            <a href={whtsap} rel="noreferrer" target="_blank">
              {/* <img src={Whatsapp} alt="Whatsapp"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.394"
                height="23.394"
                viewBox="0 0 23.394 23.394">
                <g
                  id="Group_114"
                  data-name="Group 114"
                  transform="translate(-362.182 -4295.579)">
                  <rect
                    id="Rectangle_29"
                    data-name="Rectangle 29"
                    width="23.394"
                    height="23.394"
                    transform="translate(362.182 4295.579)"/>
                  <g id="Group_53" data-name="Group 53" transform="translate(365.698 4299.086)">
                    <path
                      id="Path_26"
                      data-name="Path 26"
                      d="M68.494,84.7l1.146-4.07a8.167,8.167,0,1,1,3.051,2.989Zm4.412-2.567.25.153a6.783,6.783,0,1,0-2.184-2.135l.168.262-.66,2.344Z"
                      transform="translate(-68.494 -68.321)"
                      fill="#fff"/>
                    <path
                      id="Path_27"
                      data-name="Path 27"
                      d="M149.434,152.855l-.53-.029a.641.641,0,0,0-.456.156,2.415,2.415,0,0,0-.794,1.217,3.689,3.689,0,0,0,.856,2.892,8.6,8.6,0,0,0,4.637,3.371,2.26,2.26,0,0,0,1.914-.237,1.711,1.711,0,0,0,.745-1.086l.085-.4a.275.275,0,0,0-.154-.307l-1.792-.826a.275.275,0,0,0-.332.082l-.7.912a.2.2,0,0,1-.226.067,5.508,5.508,0,0,1-2.981-2.551.2.2,0,0,1,.026-.227l.672-.778a.275.275,0,0,0,.045-.288l-.772-1.807A.275.275,0,0,0,149.434,152.855Z"
                      transform="translate(-143.537 -148.487)"
                      fill="#fff"/>
                  </g>
                </g>
              </svg>

            </a>
            <a href={ytb} rel="noreferrer" target="_blank">
              {/* <img src={Youtube} alt="Youtube"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.394"
                height="23.394"
                viewBox="0 0 23.394 23.394">
                <g
                  id="Group_113"
                  data-name="Group 113"
                  transform="translate(-395.576 -4295.579)">
                  <g id="Group_111" data-name="Group 111">
                    <rect
                      id="Rectangle_30"
                      data-name="Rectangle 30"
                      width="23.394"
                      height="23.394"
                      transform="translate(395.576 4295.579)"/>
                    <g id="Group_54" data-name="Group 54" transform="translate(400.307 4298.817)">
                      <path
                        id="Path_28"
                        data-name="Path 28"
                        d="M100.942,213.547a.738.738,0,0,0-.059-.26.28.28,0,0,0-.252-.172.438.438,0,0,0-.343.129.228.228,0,0,0-.057.086l0,2.77v.068l.027.036a.55.55,0,0,0,.293.18.284.284,0,0,0,.375-.224.673.673,0,0,0,.015-.14C100.945,215.2,100.946,214.372,100.942,213.547Zm0,0a.738.738,0,0,0-.059-.26.28.28,0,0,0-.252-.172.438.438,0,0,0-.343.129.228.228,0,0,0-.057.086l0,2.77v.068l.027.036a.55.55,0,0,0,.293.18.284.284,0,0,0,.375-.224.673.673,0,0,0,.015-.14C100.945,215.2,100.946,214.372,100.942,213.547Zm3.1-4.178q-4.918-.105-9.838,0a2.093,2.093,0,0,0-2.047,2.092v5.121a2.093,2.093,0,0,0,2.047,2.093q4.919.105,9.838,0a2.093,2.093,0,0,0,2.048-2.093v-5.121A2.093,2.093,0,0,0,104.044,209.369Zm-8.875,7.68h-.946V211.7h-.979v-.894H96.15v.892h-.981Zm3.384-2.219v2.219h-.837v-.507l-.063.068a1.536,1.536,0,0,1-.645.463.783.783,0,0,1-.392.035.482.482,0,0,1-.379-.3,1.172,1.172,0,0,1-.087-.483c0-.611,0-3.844,0-3.875h.835c0,.028,0,2.349.005,3.481a.925.925,0,0,0,.013.185.2.2,0,0,0,.294.164.913.913,0,0,0,.4-.317.146.146,0,0,0,.016-.085v-3.433l.838,0Zm3.185,1.776a.687.687,0,0,1-.713.5.946.946,0,0,1-.714-.326l-.081-.086v.35h-.839v-6.24h.839v2.054a.843.843,0,0,1,.09-.143.963.963,0,0,1,.483-.307.727.727,0,0,1,.87.4,1.621,1.621,0,0,1,.133.7q0,1.308,0,2.616A1.531,1.531,0,0,1,101.738,216.606Zm3.1-.175a1.026,1.026,0,0,1-.886.726,1.4,1.4,0,0,1-.8-.082,1.11,1.11,0,0,1-.634-.808,2.436,2.436,0,0,1-.061-.521c-.007-.683,0-1.367,0-2.05a1.38,1.38,0,0,1,.331-.96,1.221,1.221,0,0,1,1.045-.4,1.463,1.463,0,0,1,.364.066,1.016,1.016,0,0,1,.692.822,2.476,2.476,0,0,1,.046.465c.007.364,0,1.168,0,1.168h-1.606v1.151a.374.374,0,1,0,.748,0v-.592h.863A4.182,4.182,0,0,1,104.836,216.431Zm-.766-2.937a.374.374,0,1,0-.748,0v.646h.748Zm-3.186-.206a.28.28,0,0,0-.252-.172.438.438,0,0,0-.343.129.228.228,0,0,0-.057.086l0,2.77v.068l.027.036a.55.55,0,0,0,.293.18.284.284,0,0,0,.375-.224.673.673,0,0,0,.015-.14c0-.825,0-1.649,0-2.474A.737.737,0,0,0,100.884,213.288Z"
                        transform="translate(-92.159 -201.809)"
                        fill="#fff"/>
                      <path
                        id="Path_29"
                        data-name="Path 29"
                        d="M259.155,94.99v4.633H258.3v-.5c-.095.093-.176.181-.265.259a1.159,1.159,0,0,1-.546.284.545.545,0,0,1-.7-.371,1.224,1.224,0,0,1-.056-.346V94.99h.852v3.533a.8.8,0,0,0,.012.14.194.194,0,0,0,.274.165.916.916,0,0,0,.412-.317.153.153,0,0,0,.013-.086V94.99Z"
                        transform="translate(-248.287 -93.351)"
                        fill="#fff"/>
                      <path
                        id="Path_30"
                        data-name="Path 30"
                        d="M136.868,65.514c-.186-.785-.577-2.444-.577-2.444h-.977s.75,2.489,1.086,3.6a.443.443,0,0,1,.018.126V69.34h.9V66.795a.442.442,0,0,1,.018-.126c.336-1.11,1.086-3.6,1.086-3.6h-.977s-.39,1.658-.577,2.444Z"
                        transform="translate(-133.099 -63.07)"
                        fill="#fff"/>
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M196.037,92.731h0a1.229,1.229,0,0,0-1.229,1.229v2.405a1.229,1.229,0,0,0,1.229,1.229h0a1.229,1.229,0,0,0,1.229-1.229V93.96A1.229,1.229,0,0,0,196.037,92.731Zm.355,3.683a.355.355,0,1,1-.709,0v-2.5a.355.355,0,1,1,.709,0Z"
                        transform="translate(-189.539 -91.208)"
                        fill="#fff"/>
                    </g>
                  </g>
                </g>
              </svg>

            </a>
            <a href={insta} rel="noreferrer" target="_blank">
              {/* <img src={Instagram} alt="Instagram"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.394"
                height="23.394"
                viewBox="0 0 23.394 23.394">
                <g
                  id="Group_112"
                  data-name="Group 112"
                  transform="translate(-428.971 -4295.579)">
                  <path
                    id="instagram_1_"
                    data-name="instagram (1)"
                    d="M11.7,9.371A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm0,0A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm3.876-3.793H7.822A2.246,2.246,0,0,0,5.578,7.822v7.751a2.246,2.246,0,0,0,2.244,2.244h7.751a2.246,2.246,0,0,0,2.244-2.244V7.822A2.246,2.246,0,0,0,15.572,5.578ZM11.7,15.726A4.029,4.029,0,1,1,15.726,11.7,4.034,4.034,0,0,1,11.7,15.726ZM15.855,8.5a.953.953,0,1,1,.953-.953A.954.954,0,0,1,15.855,8.5Zm-4.158.87A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm3.876-3.793H7.822A2.246,2.246,0,0,0,5.578,7.822v7.751a2.246,2.246,0,0,0,2.244,2.244h7.751a2.246,2.246,0,0,0,2.244-2.244V7.822A2.246,2.246,0,0,0,15.572,5.578ZM11.7,15.726A4.029,4.029,0,1,1,15.726,11.7,4.034,4.034,0,0,1,11.7,15.726ZM15.855,8.5a.953.953,0,1,1,.953-.953A.954.954,0,0,1,15.855,8.5Zm-4.158.87A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371ZM0,0V23.394H23.394V0ZM19.518,15.572a3.95,3.95,0,0,1-3.946,3.946H7.822a3.95,3.95,0,0,1-3.946-3.946V7.822A3.95,3.95,0,0,1,7.822,3.876h7.751a3.95,3.95,0,0,1,3.946,3.946ZM15.572,5.578H7.822A2.246,2.246,0,0,0,5.578,7.822v7.751a2.246,2.246,0,0,0,2.244,2.244h7.751a2.246,2.246,0,0,0,2.244-2.244V7.822A2.246,2.246,0,0,0,15.572,5.578ZM11.7,15.726A4.029,4.029,0,1,1,15.726,11.7,4.034,4.034,0,0,1,11.7,15.726ZM15.855,8.5a.953.953,0,1,1,.953-.953A.954.954,0,0,1,15.855,8.5Zm-4.158.87A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm0,0A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm0,0A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm3.876-3.793H7.822A2.246,2.246,0,0,0,5.578,7.822v7.751a2.246,2.246,0,0,0,2.244,2.244h7.751a2.246,2.246,0,0,0,2.244-2.244V7.822A2.246,2.246,0,0,0,15.572,5.578ZM11.7,15.726A4.029,4.029,0,1,1,15.726,11.7,4.034,4.034,0,0,1,11.7,15.726ZM15.855,8.5a.953.953,0,1,1,.953-.953A.954.954,0,0,1,15.855,8.5Zm-4.158.87A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm0,0A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm0,0A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Zm3.876-3.793H7.822A2.246,2.246,0,0,0,5.578,7.822v7.751a2.246,2.246,0,0,0,2.244,2.244h7.751a2.246,2.246,0,0,0,2.244-2.244V7.822A2.246,2.246,0,0,0,15.572,5.578ZM11.7,15.726A4.029,4.029,0,1,1,15.726,11.7,4.034,4.034,0,0,1,11.7,15.726ZM15.855,8.5a.953.953,0,1,1,.953-.953A.954.954,0,0,1,15.855,8.5Zm-4.158.87A2.326,2.326,0,1,0,14.023,11.7,2.329,2.329,0,0,0,11.7,9.371Z"
                    transform="translate(428.971 4295.579)"/>
                </g>
              </svg>

            </a>
          </div>
        </div>
        <div id="arrowToTop" onClick={topScroll}>

          <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 240.835 240.835">
            <g>
              <path
                id="Expand_Less"
                d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155
		c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155
		L129.007,57.819z"/>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

        </div>
      </div>

      <div className="bottom">
        <div className="container">
          <div className="main">
            <p>Copyright © {new Date().getFullYear()}
              RMS Corporation</p>
            <p>Powered by RMS Corporation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
