import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './MenuBar.scss'
import axios from 'axios'
import {BASE_URL} from '../../../config'
import Logo from './resources/icon/logo.svg'
import SearchIcon from './resources/icon/search_icon.svg'
import CloseIcon from './resources/icon/hambargerClose.svg';
import OpenIcon from './resources/icon/hambargeropen.svg';

const MenuBar = () => {
  const [categories,
    setCategories] = useState(null);

  const [mobileMenuToggle,
    setMobileMenuToggle] = useState(false);
  const [subMenuToggler,
    setSubMenuToggler] = useState(false);

  const mobileMenuToggleHandler = () => {
    setMobileMenuToggle(!mobileMenuToggle)

    if (!mobileMenuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

  }

  // const removeMobileMenuToggle = () => {   setMobileMenuToggle(false) }

  const submenuToggler = () => {
    setSubMenuToggler(!subMenuToggler)

  }

  const [search,
    setSearch] = useState('')

  const searchHandler = (e) => {
    setSearch(e.target.value)

  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}category`)
      .then(res => {
        if (res.status === 201) {
          setCategories(res.data)
        }
      })
  }, []);

  return (
    <div id="MenuBar">
      <div id="largeDevice">
        <div className="top container">

          <Link to="/">
            <img className="logo" src={Logo} alt="Logo"/>
          </Link>

          <div className="searchBox">
            <input
              autoComplete="off"
              placeholder="Search Product"
              type="text"
              value={search}
              name="search"
              onChange={searchHandler}/>
            <img className="search_icon" src={SearchIcon} alt="Search Icon"/>
          </div>

          <Link to="/get-a-quotation" className="GAQ">
            GET A QUOTATION
          </Link>

          <div id="hambargerIconWrapper" onClick={mobileMenuToggleHandler}>
            <img
              src={CloseIcon}
              alt="Close Icon"
              className={mobileMenuToggle
              ? 'active'
              : ''}/>

            <img
              src={OpenIcon}
              alt="Open Icon"
              className={!mobileMenuToggle
              ? 'active'
              : ''}/>
          </div>

        </div>

        <div className="bottom">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
            Services
                <ul className="exceptional">
                 <li><Link to="/services">BAG MANUFACTURING SERVICE</Link></li>
                 <li><Link to="/export-and-import">EXPORT AND IMPORT</Link></li>
               </ul>
            </li>
            <li>categories
              <ul>
                {categories && categories.map((item, idx) => (
                  <li key={idx} >
                    <Link to={`/category/${item.category_id}`}>{item.category_name}</Link>
                  </li>
                ))
}
              </ul>
            </li>
            <li>
              <Link to="/gallery">gallery</Link>
            </li>
            <li>
              <Link to="/about-us">about us</Link>
            </li>
            <li>
             our companies
             <ul className="exceptional">
                 <li>
                 <Link to="/our-companies">RMS LIFESTYLE INDUSTRIES</Link></li>
               </ul>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        <div
          className={mobileMenuToggle
          ? 'active sm_menu'
          : 'sm_menu'}>
          <div className="wrapper">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                Services
                <ul className="exceptional">
                 <li><Link to="/services">BAG MANUFACTURING SERVICE</Link></li>
                 <li><Link to="/export-and-import">EXPORT AND IMPORT</Link></li>
               </ul>

              </li>
              <li onClick={submenuToggler}>categories {subMenuToggler
                  ? '-'
                  : '+'}
                {subMenuToggler && <ul>
                  {categories && categories.map((item, idx) => (
                    <li key={idx}>
                      <Link to={`/category/${item.category_id}`}>{item.category_name}</Link>
                    </li>
                  ))
}
                </ul>
}
              </li>
              <li>
                <Link to="/gallery">gallery</Link>
              </li>
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>               
               our companies
               <ul>
                 <li>
                 <Link to="/our-companies">RMS LIFESTYLE INDUSTRIESn</Link></li>
               </ul>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuBar;