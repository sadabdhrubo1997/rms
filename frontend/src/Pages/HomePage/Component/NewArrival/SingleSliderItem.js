import React from 'react';
import './NewArrival.scss';

const SingleSliderItem = ({image, name}) => {
    return (
        <div>
             <div className="singleSliderItemWrapper">
                <div className="singleSliderItem">
                  <div className="image">
                      <img src={image} alt={name}/>
                  </div>
                  <p>{name}</p>
                </div>
              </div>
        </div>
    );
}

export default SingleSliderItem;
