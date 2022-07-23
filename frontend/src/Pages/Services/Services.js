import React, {useEffect, useState} from 'react';
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import './Services.scss';
import axios from 'axios'
import {BASE_URL} from '../../config'
import IMAGE from './services.jpg'

const Services = () => {

  // const [services,
  //   setServices] = useState('');
  const [bagAndApparel,
    setBagAndApparel] = useState('');
    const [services, setServices] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`${BASE_URL}service`)
      .then(res => {
        if (res.status === 201) {
          // setServices(res.data[0].services);
          setBagAndApparel(res.data[0].bagAndApparel);
          setServices(res.data[0].services)
        }
      })
  }, [])
  return (
    <div id="services">
      <title>Services</title>
      <MenuBar/>

      <div className="main_body body_height container">
           
        <section>
          <h2>Bag/Apparel Manufacturing Service</h2>
          <p>{bagAndApparel}</p>
       </section>      
          
        <div className="box_wrapper larger">
          <div className="box large">
            <div className="crcl">01</div>
            <h3>OEM Services</h3>
            <p>We work closely with our customers to make customized merchandise for their own personal brandings with client’s logos or other specific ornaments on the finished products.</p>
          </div>
          <div className="box large">
            <div className="crcl">02</div>
            <h3>ODM Services</h3>
            <p>We have professional in- house production team creating many unique designs that help our clients leverage their businesses without having to hire their own production team.</p>
          </div>
          <div className="box large">
            <div className="crcl">03</div>
            <h3>Stock Lot</h3>
            <p>If you are not sure about manufacturing from scratch, we can help source ready stock materials and brand the items for you. This is for low amount of orders to start your business.</p>
          </div>
        </div>

    {/* 
        <div className="box_wrapper larger">
          <div className="box large">
            <div className="crcl">01</div>
            <h3>Bangladesh Navy Enlisted Supplier</h3>          
            <p>We are an enlisted supplier to the Bangladesh Navy (NSSD)  where we bid in tenders to compete in sourcing and supplying various items.</p>
          </div>
          <div className="box large">
            <div className="crcl">02</div>
            <h3>Product Sourcing</h3>
            <br /><br />
            <p>We procure range of products in competitive price for our clients to maintain their online business and shops.</p>
          </div>
          <div className="box large">
            <div className="crcl">03</div>
            <h3>Distribution Service</h3>
            <br /><br />
            <p>We assist companies from other countries in exploring Bangladesh market in order to launch their product/services through our distribution network.</p>
          </div>
        </div>
       */}
       <div className="imageWrapper">
         <img src={IMAGE} style={{width:"100%"}}  alt="" />
       </div>

       
       <br /><br /><br /><br /><br />
       <br /><br /><br /><br /><br />
   

        <h2>Our Working Process</h2>
        <div className="box_wrapper">
          <div className="box">
            <div className="crcl">
              01
            </div>
            <h3>CONSULTATION</h3>
            <br/><br/><br/>
            <p>We get together to discuss our client’s vision and design ideas and work on
              creating a unique design for them.
            </p>
          </div>
          <div className="box">
            <div className="crcl">
              02
            </div>
            <h3>SAMPLING</h3>
            <br/><br/><br/>
            <p>Once our client approves the design on paper, we will make life-size sample
              with branding before the final production.
            </p>
          </div>
          <div className="box">
            <div className="crcl">
              03
            </div>
            <h3>BULK PURCHASE MANUFACTURING</h3>
            <p>Upon full confirmation on design, branding and approval of accessories, we
              will proceed with productio.
            </p>
          </div>
          <div className="box">
            <div className="crcl">
              04
            </div>
            <h3>QUALITY CHECK AND DELIVERY</h3>
            <p>After completion of products, we check on defects, thread out and overall
              look/ quality before we sent it out for delivery.
            </p>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default Services;
