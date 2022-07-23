import React, {useState, useEffect} from 'react';
import {Link, useParams,useHistory} from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import AdminSingleImageWrapper from './AdminSingleImageWrapper';
import './AdminnAlbum.scss';
import axios from "axios"
import {PUBLIC_URL, BASE_URL} from '../../../config'

const AdminSingleAlbum = () => {

  let history = useHistory()
  let {id} = useParams();
  const [deleting, setDeleting] = useState(false);
  const [isRender, setIsRender] = useState(true);
  const [albumname, setAlbumname] = useState("...");
  const [isLoading, setIsLoading] = useState(true);
  const [noData, setNoData] = useState(false);

  const render = ()=>{
    setIsRender(!isRender)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const [images,
    setImages] = useState(null);


  const breakpointColumnsObj = {
    default: 5,
    768: 4,
    576: 2
  };

  const deleteHandler = () => {
    let cnfrm = window.confirm("Are you sure?..")
        if (cnfrm) {
          setDeleting(true)
            axios.delete(`${BASE_URL}album/${id}`)
            .then(res=>{
              if (res.status === 201) {
                history.push("/admin/album")
              }
            })
        }
  }


  useEffect(() => {
    axios
      .get(`${BASE_URL}photo/${id}`)
      .then(res => {
        if (res.status === 201) {
          setImages(res.data)
          setIsLoading(false)
        }else if(res.status === 202){
          setIsLoading(false)
          setNoData(true)
        }
      })

    axios.get(`${BASE_URL}album/${id}`)  
    .then(res=>{
      if (res.status === 201) {
        setAlbumname(res.data[0].album_name);
      }
    })

  }, [render]);

  return (
    <div>
      <title>Admin | Album</title>
      <Sidebar/>
      <Topbar pageName={"Album Name : "+albumname}/>
      <div className="admin_main_body">
        <div className="btn_wrapper">
          <div className="div">
            <Link className="add_btn_common" to={`/admin/album/upload/${id}`}>Upload Images</Link>
         
          </div>
          <button onClick={deleteHandler} className="delete_btn_common album">{deleting?"Deleting":" Delete Album"}</button>
        </div>

        <br/><br/>
        <br/><br/>
        
        
        {
          isLoading &&
          <h1>Loading...</h1>
        }
        {
          noData &&
          <h1>No Images</h1>
        }

         {images && <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column">
          {images.map((data, idx) => (<AdminSingleImageWrapper render= {render} data={data} key={idx}/>))}
        </Masonry>
}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  );
}

export default AdminSingleAlbum;
