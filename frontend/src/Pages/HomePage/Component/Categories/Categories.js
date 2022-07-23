import React,{useState,useEffect} from 'react';
import SingleCard from './SingleCard';
import {BASE_URL,PUBLIC_URL} from '../../../../config';
import axios from 'axios'

const Categories = () => {

  const [data, setdata] = useState(null);


  useEffect(() => {
    axios.get(`${BASE_URL}category`)
    .then(res=>{
      if (res.status === 201) {
        setdata(res.data);
      }else{
        setdata(null)
      }
    })
  },[]);

  return (
    <div id="all_categories" className="container">
      <h2>All Categories</h2>
     <br />
      
      { data &&<div className="wrapper">
        {data.length && 
        data.map((item,idx)=>(
          <SingleCard key={idx} image={PUBLIC_URL+item.category_image} id={item.category_id} name={item.category_name}/>
        ))
        }
        
        
      </div>}
      {
          !data &&
          <h1 style={{textAlign:"center"}}>No Category Exists</h1>
        }
    </div>
  );
}

export default Categories;
