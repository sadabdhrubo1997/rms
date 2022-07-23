import React, {useEffect, useState} from 'react';
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import AlbumThumbnails from './AlbumThumbnails';
import './Gallery.scss';
import axios from 'axios'
import {BASE_URL, PUBLIC_URL} from '../../config'

const Gallery = () => {

  const [data,
    setdata] = useState(null);
  const [isLoading,
    setIsLoading] = useState(true);
  const [noData,
    setNoData] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`${BASE_URL}album`)
      .then(res => {
        if (res.status === 201) {
          setdata(res.data);
          setIsLoading(false)
        } else if (res.status === 202) {
          setIsLoading(false)
          setNoData(true)
        }
      })
      .catch(e => console.log(e))
  }, [])
  return (
    <div id="gallery">
      <title>Gallery</title>
      <MenuBar/>

{
  isLoading &&
  <div className="body_height mail_body">
    <div className="container">
      <div className="wrapper">
      <h1
              style={{
              color: "#00609D",
              textAlign: "center"
            }}>Loading...</h1>
      </div>
    </div>
  </div>
}

{
  noData &&
  <div className="body_height mail_body">
    <div className="container">
      <div className="wrapper">
      <h1
              style={{
              color: "#00609D",
              textAlign: "center"
            }}>No Gallery Exists</h1>
      </div>
    </div>
  </div>
}
   

      {data && <div className="body_height main_body">
        <div className="container">
          <div className="wrapper">
            {data && data.map((item, idx) => (<AlbumThumbnails
              key={idx}
              poster={PUBLIC_URL + item.album_thumbnail}
              name={item.album_name}
              id={item.album_id}/>))
}

          </div>
        </div>
      </div>}

      <Footer/>

    </div>
  );
}

export default Gallery;
