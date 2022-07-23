import React from 'react'
import Sidebar from '../Partials/Sidebar/Sidebar'
import Topbar from '../Partials/Topbar/Topbar'
import './AdminnAlbum.scss'

const AlbumEdit = () => {
    const submitHandler = (e)=>{
        e.preventDefault()
        alert("submit Handler is working.....")
    }
  return (
    <div id="adminCategoryAdd">
      <title>Admin | Edit Album</title>
      <Sidebar/>
      <Topbar pageName="Edit Album"/>
      <div className="admin_main_body addCategoryPage">
      <form autoComplete="off"  onSubmit={submitHandler}>
        <input type="text" name="name" id="name" placeholder="Album name"/>
        <button type="submit">Save</button>

      </form>

      <div className="read_board">
          <p>
            For better view, image size should be :-
            <br/>
            Width =
            <b>200px</b>
            <br/>
            Height =
            <b>200px</b>
          </p>
          
        </div>
      </div>

    </div>
  )

}

export default AlbumEdit