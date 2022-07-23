const dbConn = require('../../dbConfig/dbConfig');

const AlbumModel = function (album) {
    this.album_name = album.album_name;
    this.album_thumbnail = album.album_thumbnail;
}




// get all albums
AlbumModel.getAllAlbum = (result) => {
    dbConn.query('SELECT * FROM album ORDER BY album_id DESC', (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res)
        }
    })
}


//get single album by id
AlbumModel.getSingleAlbum = (id, result) => {
    dbConn.query("SELECT * FROM album WHERE album_id = ?", [id], (err, res) => {
        if (err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}


//get single album by album name
AlbumModel.getSingleAlbumByAlbumName = (data, result) => {
    dbConn.query("SELECT * FROM album WHERE album_name = ?", [data.album_name], (err, res) => {
        if (err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}





// create album 
AlbumModel.addAlbum = (data,image, result) => {
    dbConn.query("INSERT INTO album (album_name, album_thumbnail) VALUES (?, ?)", [
        data.album_name,
        image
    ], (err, res) => {
        if (err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}


//update album 
AlbumModel.updateAlbum = (id, data, result) => {
    dbConn.query("UPDATE album SET album_name=?, album_thumbnail=? WHERE album_id=?", [data.album_name, data.album_thumbnail, id], (err, res) => {
        if (err) {
            result(err, null)
        } else {
            result(null, res)
        }
    })
}


//delete album
AlbumModel.deleteAlbum = (id,result)=>{
    dbConn.query('DELETE FROM album WHERE album_id=?',[id],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}




module.exports = AlbumModel