import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './SingleAlbum.scss';
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import Masonry from 'react-masonry-css';
import SingleImageWrapper from './SingleImageWrapper';
import axios from 'axios';
import {BASE_URL} from '../../config';

const SingleAlbum = () => {
  let {id} = useParams()

  const [data, setdata] = useState(null);
  const [name, setname] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [noData, setNoData] = useState(false);


  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    576: 1
  };


  useEffect(() => {
    axios.get(`${BASE_URL}photo/${id}`)
    .then(res=>{
      if (res.status === 201) {
        setIsLoading(false)
        setdata(res.data)
      }else if(res.status === 202){
        setIsLoading(false)
        setNoData(true)
      }
    })
    axios.get(`${BASE_URL}album/${id}`)
    .then(res=>{
      if (res.status === 201) {
        setname(res.data[0].album_name);
      }
    })
  });

  return (
    <div id="single_album">
      <title>Album | {name}</title>
      <MenuBar/>
      <div className="main_body body_height">
        <div className="container">
          {
                data &&
                <h1>Album Name : {name}</h1>
              }
          <div className="wrapper">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column">
              { data &&
              data.map((data, idx) => (
                <SingleImageWrapper data={data} key={idx}/>
              ))}             
            </Masonry>
          </div>
          {
                noData &&
                <h1 style={{color:"red"}}>There is no photo in this album.</h1>
              }
          {
                isLoading &&
                <h1 style={{color:"#00609D"}}>Loading...</h1>
              }
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SingleAlbum;
