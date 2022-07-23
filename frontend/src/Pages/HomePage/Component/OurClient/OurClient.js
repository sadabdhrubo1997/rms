import React from 'react';
import './OurClient.scss';
import Image from './client.png';

const OurClient = () => {
    return (
        <div id="our_client" className="container">
            <h2>Our Clients</h2>

            <img src={Image} alt="Our Client"/>
        </div>
    );
}

export default OurClient;
