import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './AdminnAlbum.scss';
import SingleAlbumThumbnail from './SingleAlbumThumbnail';
import {BASE_URL, PUBLIC_URL} from '../../../config'
import axios from 'axios'

const AdminAlbum = () => {

  const [compRender,
    setCompRender] = useState(false);
  const [data,
    setData] = useState(null);
  const [noData,
    setNoData] = useState(false);
  const [isLoading,
    setIsLoading] = useState(true);

  const render = () => {
    setCompRender(!compRender);
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}album`)
      .then(res => {
        if (res.status === 201) {
          setIsLoading(false)
          setData(res.data)
        } else if (res.status === 202) {
          setIsLoading(false)
          setNoData(true)
        }
      })
  }, [compRender]);

  return (
    <div id="admin_album">
      <title>Admin | Album</title>
      <Sidebar/>
      <Topbar pageName="Album"/> {isLoading && <div className="admin_main_body">
        <h1
          style={{
          color: "#00609D",
          textAlign: "center"
        }}>Loading...</h1>
      </div>
}
      {noData && <div className="admin_main_body">
        <h1
          style={{
          color: "#00609D",
          textAlign: "center"
        }}>No Album Exists</h1>
      </div>
}
      <div className="admin_main_body">
        <Link className="createAlbumButton" to="/admin/album/create">Create Album</Link>
        {data && <div className="album_thumbnail_wrapper">
          {data && data.map((item, idx) => (<SingleAlbumThumbnail data={item} key={idx}/>))
}
          {!data && <h2 className="noDataExists">No Album Exists</h2>
}

        </div>}
        <br/><br/><br/><br/><br/>
      </div>
    </div>
  );
}

export default AdminAlbum;
