import React, {useState} from 'react'
import './ForgetPassword.scss';
import {useParams,useHistory} from 'react-router-dom';
import {BASE_URL} from '../../../config';
import axios from 'axios';

const ResetForgottedPassword = (props) => {

  let {params} = useParams();
  let history = useHistory()
  
  



  const [isLoading,
    setIsLoading] = useState(false);

  const [isInvalidParams,
    setIsInvalidParams] = useState(false);

  const [passwordNotChanged, setPasswordNotChanged] = useState(false);  

  const [pwdNotMatched,
    setPwdNotMatched] = useState(false);

  const [cPassword,
    setCpassword] = useState('');
  const [password,
    setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (!(cPassword === password)) {
      setPwdNotMatched(true)
    } else {
      setPwdNotMatched(false)
      axios.put(`${BASE_URL}admin/forgetPassword/${params}`,{password})
      .then(res=>{
        if(res.status === 203){
          setIsInvalidParams(true)
          setIsLoading(false)
        }else{
          if (res.status === 201) {
            setCpassword('')
            setPassword('')
            let cnfrm = window.confirm("password Changed Successfully")
            if (cnfrm) {
             history.push('/admin/login')            }

          }else{
            setIsLoading(false)
            setPasswordNotChanged(true)
          }
        }
      })
    }

    // setIsLoading(true) setTimeout(() => {   setIsLoading(false)
    // setIsPasswordChanged(true) }, 1000);
  }

  return (
    <div>
      <title>Reset Password</title>
      <div id="resetPassword">
     {pwdNotMatched && <h2 className="invalidEmail">Password and Confirm Password Doesn't Match.</h2>}
     {passwordNotChanged && <h2 className="pwdChanged">Password Not Changed. Please Try again.</h2>}

        <div className="wrapper">
          <h1>Reset Password</h1>
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => {
              setCpassword(e.target.value)
            }}
              name="password"
              placeholder="New Password"
              type="password"/>
            <input
              onChange={(e) => {
              setPassword(e.target.value)
            }}
              name="c_password"
              placeholder="Confirm New Password"
              type="password"/> {!isLoading && <button>Submit</button>}
            {isLoading && <div className="loading_button">
              <span></span>
            </div>
}
          </form>
          {isInvalidParams && <h2 className="invalidEmail">Invalid Url</h2>}
        </div>
      </div>
    </div>
  )

}

export default ResetForgottedPassword