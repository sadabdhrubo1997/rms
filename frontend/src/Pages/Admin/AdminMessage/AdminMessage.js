import React,{useEffect,useState} from 'react';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './AdminMessage.scss';
import SingleMessage from './SingleMessage';
import {BASE_URL} from '../../../config';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const AdminMessage = () => {
    let history = useHistory();
    const [msg, setMsg] = useState(null);
    const [noData, setNoData] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {   
        axios.get(`${BASE_URL}message`,{
            headers:{
              authorization:localStorage.getItem("token")
            }
          }
        ).then(res=>{     
            if(res.status === 201){
                setMsg(res.data)
                setIsLoading(false)

            }else if(res.status === 202){
                setNoData(true)
                setIsLoading(false)
            }
            else if (res.status ===206){
                localStorage.removeItem("token")
                history.push("/admin/login")
            }         
        })
        .catch(e=>console.log(e))
        
    });
    return (
        <div id="admin_message">
            <title>Admin | Message</title>
            <Sidebar/>
            <Topbar pageName="Message"/>
            {
        isLoading &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
        </div>
      }
      {
        noData &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>No Message Ixists.</h1>
        </div>
      }
            {msg && <div className="admin_main_body">
                <table>
                    <thead>
                        <tr>
                            <th className="serial">Serial</th>
                            <th className="name">Name</th>
                            <th className="email">E-mail</th>
                            <th className="contact">Contact</th>
                            <th className="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {msg &&
                        (msg.map((item,idx)=>{
                            return(
                                <SingleMessage data={item} serial={idx} key={idx}/>
                                )
                        }))
                        }
                        {!msg &&
                        <tr>
                            <td className="noDataExists" colSpan="5">No Message Exixts</td>
                        </tr>
                        }
                        
                    </tbody>
                </table>
            </div>}
        </div>
    );
}

export default AdminMessage;
