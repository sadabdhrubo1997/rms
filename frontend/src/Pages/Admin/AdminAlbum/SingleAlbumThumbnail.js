import React from 'react';
import './AdminnAlbum.scss';
import {Link} from 'react-router-dom';
import {PUBLIC_URL} from '../../../config'

const SingleAlbumThumbnail = ({data}) => {
  return (

    <div className="single_album_thumbnail">
      <Link to={`/admin/album/${data.album_id}`}>
        <img src={`${PUBLIC_URL+data.album_thumbnail}`} alt="Album thumnail"/>
        <p>{data.album_name}</p>
      </Link>
    </div>

  );
}

export default SingleAlbumThumbnail;
