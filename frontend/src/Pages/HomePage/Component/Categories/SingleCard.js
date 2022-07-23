import React from 'react';
import {Link} from 'react-router-dom'
import './Categories.scss'

const SingleCard = ({image, name,id}) => {
  return (
    <div className="single_card">
      <Link to={`/category/${id}`} style={{display:"block"}}>
      <div className="image">
      <img src={image} alt={name}/>
      </div>
      <h2>{name}</h2>
          <Link to={`/category/${id}`}>See Our Product</Link>
      </Link>
     
    </div>
  );
}

export default SingleCard;
