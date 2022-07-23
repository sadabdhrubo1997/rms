const PhotoModel = require("../models/PhotoModel");
const dbConn = require("../../dbConfig/dbConfig");
const fs = require("fs")

// get photo by album id
exports.getAllPhotoByAlbumId = (req, res) => {
  PhotoModel.getAllPhotoByAlbumId(req.params.album_id, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal Server Error"})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "No photo found"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// add photo
exports.addPhotoInAlbum = (req, res) => {    
  PhotoModel.addPhotoInAlbum(req.files,req.params.album_id,(err,result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal Server Error."})
    } else {      
      res
        .status(201)
        .json({message: "photo added successfully"})
    }
  })
}

// delete photo
exports.deletePhoto = (req, res) => {
  let image;
  PhotoModel.getSInglePhotoById(req.params.id, (err, result1) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result1.length) {
        image = result1[0].photo
        PhotoModel.deletePhoto(req.params.id, (err, result) => {
          if (err) {
            res
              .status(204)
              .json({message: "Internal server error."})
          } else {
            fs.unlink(image, err => {
              if (err) {
                return res
                  .status(404)
                  .json({message: "Internal server error"})
              } else {
                res
                  .status(201)
                  .json({message: "deleted successfully"})
              }
            })
          }
        })
      }
    }
  })
}

