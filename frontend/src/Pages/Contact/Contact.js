import React, {useEffect,useState} from 'react';
import './Contact.scss'
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import axios from 'axios'
import {BASE_URL} from '../../config'
import OurClient from '../HomePage/Component/OurClient/OurClient';

const Contact = () => {

  const [message, setmessage] = useState({
    name:'',email:'',contact:'',message:''
  });

  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`${BASE_URL}contact/phone`)
    .then(res=>{
      if (res.status === 201) {
        setphone(res.data);
      }
    })
    axios.get(`${BASE_URL}contact/email`)
    .then(res=>{
      if (res.status === 201) {
        setemail(res.data);
      }
    })
    axios.get(`${BASE_URL}contact/address`)
    .then(res=>{
      if (res.status === 201) {
        setaddress(res.data);
      }
    })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}message`,message)
    .then(res=>{
      if (res.status === 201) {
        setmessage({
          name:'',email:'',contact:'',message:''
        })
        setTimeout(() => {
          alert("Sent successfully..!!")
        }, 200);
      }
    })
    
  }

  const changeHandler = (e)=>{
    setmessage({
      ...message,
      [e.target.name]:e.target.value
    })
    
  }

  return (
    <div id="contact">
      <title>Contact</title>
      <MenuBar/>
      <div className="main_body body_height container">
        <div className="wrapper">
          <div className="left">
            <h2>Reach us at</h2>
            <p>Contact :{phone}</p>
            <p>Email : {email}</p>
            <div className="address">
              <p className="top">
                Corporate Office :</p>
              <p>{address}</p>
            </div>
          </div>
          <div className="right">
            <h2>Get In Touch. </h2>

            <form onSubmit={submitHandler}>
              <input value={message.name} placeholder="Name" onChange={changeHandler} name="name" type="text"/>
              <input value={message.email} placeholder="Email" onChange={changeHandler} name="email" type="text"/>
              <input value={message.contact} placeholder="Contact Number" onChange={changeHandler} name="contact" type="text"/>
              <textarea value={message.message} placeholder="Message" onChange={changeHandler} name="message"></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>

        <div className="map">
          <iframe title="Iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2646051572415!2d90.37795341434816!3d23.737941795170524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf7cbc4697b1%3A0x25ea3cc5a9003fbe!2sRMS%20Corporation!5e0!3m2!1sen!2sbd!4v1615673855169!5m2!1sen!2sbd" width="100%" frameBorder="0" loading="lazy"></iframe>          
        </div>
        <OurClient/>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
