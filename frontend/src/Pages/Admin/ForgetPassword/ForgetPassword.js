import React, {useState} from 'react';
import './ForgetPassword.scss';
import {BASE_URL} from '../../../config';
import axios from 'axios';

const ForgetPassword = () => {
  const [isLoading,
    setIsLoading] = useState(false);


  const [email, setEmail] = useState('');  

  const [isInvalidEmail,
    setIsInvalidEmail] = useState(false);

  const [mailSent, setMailSent] = useState(false);  

  const submitHandler = (e) => {
    e.preventDefault()

    setIsLoading(true)

    axios.post(`${BASE_URL}admin/forgetPassword`,{email})
    .then(res=>{
      if (res.status === 202) {
        setIsLoading(false)
        setIsInvalidEmail(true)
      }else{
        if(res.status === 201){
          setIsLoading(false)
          setMailSent(true)
        }
      }
    })



    // setTimeout(() => {
    //   setIsLoading(false)
    //   setMailSent(true)
    // }, 2000);
  }

  return (
    <div id="forgetPassword">
      <title>Forget Password</title>
      {mailSent &&<div className="wrapper">
          <h2 className="mailSent">Please check your Email...</h2>
      </div>}
      {!mailSent &&<div className="wrapper">
        <h1>Forget Password</h1>
        <form onSubmit={submitHandler}>
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"  placeholder="Enter the Email"/> {!isLoading && <button type="submit">Submit</button>
}

          {isLoading && <div className="loading_button">
            <span></span>
          </div>
}
        </form>
       { isInvalidEmail && <h2 className="invalidEmail">Invalid Email Address</h2>}
      </div>}
    </div>
  )

}

export default ForgetPassword