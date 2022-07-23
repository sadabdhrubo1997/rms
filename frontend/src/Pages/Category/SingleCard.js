import React from 'react';
import './Category.scss';
import {PUBLIC_URL} from '../../config'


const SingleCard = ({data}) => {
    return (
        <div className="singleCard">
           
            <img src={PUBLIC_URL+data.product_image} alt="Category"/>
            <h4>Code</h4>
            <p> <b>{data.product_no}</b></p>
            <h4>Material</h4>
            <p>{data.primary_material}</p>
            <h4>Size</h4>
            <p>{data.dimension}</p>
                
            
        </div>
    );
}

export default SingleCard;
