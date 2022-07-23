import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Sidebar.scss'

const Sidebar = () => {

  
    


    return (
        <div id="sidebar">
            <Link className="adminRootAnchor" to="/admin">Admin</Link>

            <div className="menu">
                <ul>
                    <li><NavLink activeClassName="active" to="/admin/header-slider">Header Slider</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/about-us">About us</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/services">Services</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/other">Other</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/director">Director</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/category">Category</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/product">Product</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/new-arrival">New Arrival</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/album">Album</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/message">Message</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/quotation">Quotation</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/contact">Contact</NavLink></li>
                    <li><NavLink activeClassName="active" to="/admin/setting">Settings</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
