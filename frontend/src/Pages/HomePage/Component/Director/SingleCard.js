import React from 'react';

const SingleCard = ({image,name,designation}) => {
  return (
    <div className="signleCard">
      <div className="top">
        <div className="image">
            <img src={image} alt={name}/>
        </div>
      </div>
      <h2>{designation}</h2>
      <h3>{name}</h3>
    </div>
  );
}

export default SingleCard;
