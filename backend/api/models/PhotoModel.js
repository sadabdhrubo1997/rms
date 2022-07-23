const dbConn = require('../../dbConfig/dbConfig');

const PhotoModel = (photo) => {
  this.albm_id = photo.albm_id;
  this.photo = photo.photo;
}

// get all photo by album id
PhotoModel.getAllPhotoByAlbumId = (id, result) => {
  dbConn.query("SELECT * FROM photo WHERE albm_id=?", [id], (err, res) => {
    if (err) {
      console.log("error while fatching all photo", err);
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get photo by id
PhotoModel.getSInglePhotoById = (id, result) => {
  dbConn.query("SELECT * FROM photo WHERE photo_id=?", [id], (err, res) => {
    if (err) {
      console.log("error while fatching all photo", err);
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// this methos is not neccesary for direct use in the project
PhotoModel.getSinglePhoto = (id, result) => {
  dbConn.query("SELECT * FROM photo WHERE photo_id=?", [id], (err, res) => {
    if (err) {
      console.log("error while fatching single photo", err);
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// add product

PhotoModel.addPhotoInAlbum = (data, album, result) => {

  let sqlQuery = '';

  for (let i = 0; i < data.length; i++) {
    let tmpPath = data[i]
      .path
      .replace(/\\/g, "/")
    sqlQuery += `('${tmpPath}', '${album}'),`
  }

  let actualSql = sqlQuery.slice(0, -1);
  //  return console.log(actualSql);
  dbConn.query(`INSERT INTO photo (photo,albm_id) VALUES ${actualSql}`, (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// delete product
PhotoModel.deletePhoto = (id, result) => {
  dbConn.query("DELETE FROM photo WHERE photo_id=?", [id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}


PhotoModel.deletePhotoByAlbumId = (id,result)=>{
  dbConn.query("DELETE FROM photo WHERE albm_id=?", [Number(id)], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

//delete photo by album id

module.exports = PhotoModel;
