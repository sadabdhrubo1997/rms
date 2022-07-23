import React,{useState,useEffect} from 'react';
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import './Quotation.scss';
import {BASE_URL} from '../../config'
import axios from 'axios';

const Quotation = () => {  
  useEffect(() => {
    window.scrollTo(0, 0)    
  }, [])

  const [formData, setFormData] = useState({
    name:'',
    contact:'',
    email:'',
    interested_item:'',
    quantity:'',

  });

    const submiHandler = (e)=>{
        e.preventDefault()
        axios.post(`${BASE_URL}quotation`,formData)
        .then(res=>{
          if (res.status === 201) {
            setFormData({
              name:'',
              contact:'',
              email:'',
              interested_item:'',
              quantity:'',          
            })
            setTimeout(() => {
              alert("Quotation Submission Successfull...!")
            }, 200);
          }
        })
    }

    const changeHandler = (e)=>{
      setFormData({
        ...formData,
        [e.target.name] : e.target.value
      })
    }

  return (
    <div id="quotation">
      <MenuBar/>
      <title>Get A Quotation</title>
      <div className="main_body body_height">
        <div className="container">
          <h2>Get a Quotation</h2>
          <form onSubmit={submiHandler} autoComplete="off">
              <input onChange={changeHandler} placeholder=" Your Name" type="text" name="name" id="" value={formData.name}/>
              <input onChange={changeHandler} placeholder=" Your Contact Number" type="text" name="contact" id="" value={formData.contact}/>
              <input onChange={changeHandler} placeholder=" Your Email" type="email" name="email" id="" value={formData.email}/>

              <div className="bottom">
              <input onChange={changeHandler} placeholder="Item interested / Product Code" type="text" name="interested_item" id="" value={formData.interested_item}/>
              <input onChange={changeHandler} placeholder=" Quantity" min="50" type="number" name="quantity" id="" value={formData.quantity}/>
              </div>

              <button type="submit">Submit</button>
          </form>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Quotation;
