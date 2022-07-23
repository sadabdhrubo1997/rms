import React, {useState, useEffect} from 'react';
import './Director.scss';
import SingleCard from './SingleCard';
import axios from 'axios'
import {BASE_URL, PUBLIC_URL} from '../../../../config'

const Director = () => {
  const [data,
    setdata] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}director`)
      .then(res => {
        if (res.status === 201) {
          setdata(res.data);
        }else{
            setdata(null)
        }

      })
  }, []);
  return (
    <div id="director" className="container">
      <h2>Board Of Directors</h2>

      <div className="main">
       {data && <div className="wrapper">
          {data && data.map((item, idx) => (<SingleCard
            key={idx}
            image={PUBLIC_URL + item.image}
            name={item.name}
            designation={item.designation}/>))
}
         
        </div>}
        {!data && <h1 style={{
            textAlign: "center"
          }}>No Director Exists</h1>
}

      </div>
    </div>
  );
}

export default Director;
