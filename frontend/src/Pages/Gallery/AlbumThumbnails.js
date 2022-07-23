import React from 'react';
import {Link} from 'react-router-dom';

const AlbumThumbnails = ({poster,name,id}) => {
  
//   const albamPoster = poster
  const albamPoster = poster;
 

  return (
    <div className="album">
      <Link to={`/gallery/album/${id}`}>
        <div className="poster">
          {
            albamPoster && <img src={albamPoster} alt="Albam Poster"/>
          }
        </div>
        <h2>{name}</h2>
      </Link>
    </div>
  );
}

export default AlbumThumbnails;
