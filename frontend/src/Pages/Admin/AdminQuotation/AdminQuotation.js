import React, {useEffect, useState} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './../AdminMessage/AdminMessage.scss';
import SingleQuotation from './SingleQuotation';
import {BASE_URL} from '../../../config'
import axios from 'axios';

const AdminQuotation = () => {
  const [compRender,
    setCompRender] = useState(true);
    const [noData, setNoData] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const render = ()=>{
        setCompRender(!compRender)
    }

  const [data,
    setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${BASE_URL}quotation`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(res => {
        if (res.status === 201) {
            setData(res.data)
            setIsLoading(false)
        }else if(res.status === 202){
          setNoData(true)
          setIsLoading(false)
        }
      })
  }, [compRender]);
  return (
    <div id="admin_message">
      <title>Admin | Quotation</title>
      <Sidebar/>
      <Topbar pageName="Quotation"/>
      {
        noData &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>No Quotation Exists.</h1>
        </div>
      }
      {
        isLoading &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
        </div>
      }

      {data && <div className="admin_main_body">
        <table>
          <thead>
            <tr>
              <th className="serial">ID</th>
              <th className="name">Name</th>
              <th className="contact">Contact</th>
              <th className="email">E-mail</th>
              <th className="email">Product Code</th>
              <th className="email">Quantity</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>

            {data && data.map((item, idx) => {
              return <SingleQuotation render={render} data={item} key ={idx}/>
            })
            }
            {!data && 
             <tr>
                  <td colSpan="7" className="noDataExists">No Quotation Exists</td>
              </tr>
            
            }

          </tbody>
        </table>
      </div>}
    </div>
  );
}

export default AdminQuotation;
