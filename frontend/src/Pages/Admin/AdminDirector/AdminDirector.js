import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AdminDirectorSingle from './AdminDirectorSingle';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './AdminDIrector.scss';
import axios from 'axios';
import {BASE_URL} from '../../../config'

const AdminDirector = () => {

  const [comp,
    setComp] = useState(false);
  const [data,
    setData] = useState(null);
  const [noData,
    setNoData] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

  const render = () => {
    (setComp(!comp))
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}director`)
      .then(res => {
        if (res.status === 410) {
          setIsLoading(false)
          console.log("410 is real");
        } else if (res.status === 202) {
          setIsLoading(false)

          setNoData(true)
          setData(null)
          setTimeout(() => {
            render()
          }, 100);
        } else {
          setIsLoading(false)

          setData(res.data);
        }
      })
      .catch(e => {
        setIsLoading(false)

        console.log(e)
      })
  }, [comp, data]);
  return (
    <div id="admin_director">
      <title>Admin | Director</title>
      <Sidebar/>
      <Topbar pageName="Board Of Director"/>
      {
        isLoading &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
        </div>
      }
      {!isLoading && <div className="admin_main_body">
        <Link className="add_btn_common" to="/admin/director/add">Add Director</Link>
        <div className="wrapper">

          
            <table>
            <thead>
              <th className="image">Image</th>
              <th className="name">Name</th>
              <th className="designation">Designation</th>
              <th className="action">Action</th>
            </thead>
            <tbody>
              {data && data.map((item, idx) => (<AdminDirectorSingle render={render} data={item} key={idx}/>))
}
              {noData && <tr>
                <td
                  colspan="4"
                  style={{
                  textAlign: "center"
                }}>No Director Exists</td>
              </tr>
}

            </tbody>
          </table>
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>}
    </div>
  );
}

export default AdminDirector;
