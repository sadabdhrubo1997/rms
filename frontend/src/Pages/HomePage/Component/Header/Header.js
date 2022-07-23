import React, {useState, useEffect} from 'react';
import './Header.scss';
import axios from 'axios'
import {BASE_URL} from '../../../../config'
import BannerSlider from './BannerSlider';

const Header = () => {

  const [slogan,
    setSlogan] = useState('');
  const [heading,
    setHeading] = useState("");
  const [headerParagraph,
    setHeaderParagraph] = useState('');
  const [loading,
    setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}other`)
      .then(res => {
        if (res.status === 201) {
          setSlogan(res.data[0].slogan);
          setHeading(res.data[0].heading)
          setHeaderParagraph(res.data[0].headerParagraph)
          setLoading(false)
        }
      })
  }, []);

  return (
    <div
      className="header"
      id="header"
      style={{
     
    }}>
      {/* <div className="container">
        {!loading && 
        <main>
          <h2>{slogan}</h2>
          <h1>{heading}</h1>
          <p>{headerParagraph}</p>
        </main>}
      </div> */}
      <div className="bg_slider">        
        <BannerSlider/>
      </div>
    </div>
  );
}

export default Header;
