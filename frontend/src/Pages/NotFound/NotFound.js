import React, {useEffect} from 'react';
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import './NotFound.scss';

const NotFound = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="not_found">
      <title>Not Found</title>
      <MenuBar/>

      <div className="main_body">

      <h1 style={{
        textAlign: "center"
      }}>
        Not Found

      </h1>
      <br/>
      <div className="body_height" style={{
        textAlign: "justify"
      }}>
        

        <br/><br/>
        
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default NotFound;
