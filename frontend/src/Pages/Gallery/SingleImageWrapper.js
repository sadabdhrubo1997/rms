import React from 'react';
import {PUBLIC_URL} from '../../config'

const SingleImageWrapper = ({data}) => {
    return (
        <div>
            <div className="singleImageWrapper">
                  <img src={PUBLIC_URL+data.photo} alt={data.idx} key={data.idx}/>
                </div>
        </div>
    );
}

export default SingleImageWrapper;
