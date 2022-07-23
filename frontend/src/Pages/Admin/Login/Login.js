import React,{useState,useEffect} from 'react';
import {useHistory,Link} from 'react-router-dom';
import axios from 'axios';
import './Login.scss';
import {BASE_URL} from '../../../config'

const Login = () => {

  const history = useHistory()

  const [invalidCredintials, setInvalidCredintials] = useState(false);

  const [isLoginLoading, setIsLoginLoading] = useState(false)
 
  const [loginInfo, setLoginInfo] = useState({
    admin_email:null,
    admin_password:null
  });

  useEffect(() => {       
    let token = localStorage.getItem('token')
    if (token) {
      history.push("/admin")
    }
  });
  


  const changeHandler = (e)=>{
    setLoginInfo({
      ...loginInfo,
      [e.target.name]:e.target.value
    })
  }




    const submitHandler =async (e)=>{
        e.preventDefault()
        setIsLoginLoading(true)
        await axios
        .post(`${BASE_URL}admin/login`, loginInfo)
        .then(res => {          
            if (res.status === 201) {
            localStorage.setItem("token", res.data.token)
            history.push('/admin');
          } else if (res.status === 202) {
            setInvalidCredintials(true)
            setIsLoginLoading(false)
          }
        })
        .catch(err => console.log(err))
    }
  return (
    <div id="admin_login">
      <title>Admin | Login</title>

      <div className="wrapper">
       

        <h1>Admin Login</h1>

        <form autoComplete="off" onSubmit={submitHandler}>
          <input placeholder="Enter The Email" type="email" onChange={changeHandler} name="admin_email" />
          <input placeholder="Enter The Password" type="password" onChange={changeHandler} name="admin_password" />
          { !isLoginLoading &&
            <button type="submit">Login</button>
          }
          
          { isLoginLoading && 
            <div className="loading_button"><span></span></div>
          }
        </form>
        <div className="forgetPasswordButtonArea">
          <Link to="/admin/forget/password">Forget Password ?</Link>
        </div>

      </div>

<br/><br/><br/>
      {invalidCredintials && <h2>Email or Password is wrong</h2>}

    </div>
  );
}

export default Login;
