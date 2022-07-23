import React,{useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Topbar.scss';
import HomeIcon from './home.svg'

const Topbar = ({pageName}) => {

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            location.push("/admin/login")
        }
    });

  const location = useHistory()

  const logoutHandler = () => {
    localStorage.removeItem("token")    
    location.push("/admin/login")
    
  }

  return (
    <div id="topbar">
      <Link exact to="/admin">
        <img src={HomeIcon} alt="Home Button"/>
      </Link>
      <h1>{pageName}</h1>
      <div onClick={logoutHandler} className="logout_btn">Logout</div>
    </div>
  );
}

export default Topbar;
