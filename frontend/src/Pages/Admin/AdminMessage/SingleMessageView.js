import React, {useEffect, useState} from 'react';
import {useParams,useHistory} from 'react-router-dom'
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import {BASE_URL} from '../../../config';
import axios from 'axios'

const SingleMessageView = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  let history = useHistory()
  let {id} = useParams();



  useEffect(() => {
 
    axios
    .get(`${BASE_URL}message/${id}`,{
      headers:{
        authorization:localStorage.getItem("token")
      }
    })
    .then(res => {
      if (res.status === 201) {
       setIsLoading(false)
        setData(res.data[0])       
      }

    })

  });

  const deleteHandler = () => {
    let cnfrm = window.confirm("Are you sure?")

    if (cnfrm) {
      axios.delete(`${BASE_URL}message/${id}`,{
        headers:{
          authorization:localStorage.getItem('token')
        }
      })
      .then(res=>{
        if (res.status === 201) {
          history.push('/admin/message')
        }
      })
    }
  }
  return (
    <div>
      <title>Admin | Message</title>
      <Sidebar/>
      <Topbar pageName={`Message from ${ "jhon"}`}/>
      {
        isLoading &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
        </div>
      }
  { !isLoading && <div className="admin_main_body singleMessageView">
        {data &&         
        <div className="left">
          <p className="messageInfo">Name : {data.name}</p>
          <p className="messageInfo">E-mail: {data.email}</p>
          <p className="messageInfo">Phone: {data.contact}</p>
          <br/>
          <p className="messageInfo">Message:</p>
          <p className="messageBody">{data.message}</p>
        </div>}
        {
          !data && 
          <h1>No Data</h1>
        }
        <div className="right">
          <button onClick={deleteHandler} className="deleteMessageButton">Delete This Message</button>
        </div>
      </div>}
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default SingleMessageView;
