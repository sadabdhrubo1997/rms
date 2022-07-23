const AlbumModel = require("../models/AlbumModel")
const PhotoModel = require("../models/PhotoModel")
const fs = require("fs");

//get all album
exports.getAllAlbum = (req, res) => {
  AlbumModel.getAllAlbum((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error."})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "Nothing Found"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// get single album
exports.getSingleAlbum = (req, res) => {
  AlbumModel.getSingleAlbum(req.params.id, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal Server Error"})
    } else {
      if (result.length < 1) {
        res
          .status(203)
          .json({message: "Not Exists"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

//add album
exports.addAlbum = (req, res) => {
  AlbumModel.addAlbum(req.body, req.file.path.replace(/\\/g, "/"), (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error."})
    } else {
      if (result.insertId) {
        res
          .status(201)
          .json({message: "Album Created Successfully"})
      } else {
        res
          .status(203)
          .json({message: "Album Not Created........ Please Try Again."})
      }
    }
  })
}

//update album
exports.updateAlbum = (req, res) => {
  AlbumModel.getSingleAlbum(req.params.id, (err, isExists) => {
    if (err) {
      res
        .status(204)
        .json({message: "internal Server Error."})
    } else {
      if (isExists.length < 1) {
        res
          .status(202)
          .json({message: "Album not exists"})
      } else {
        AlbumModel.updateAlbum(req.params.id, req.body, (err, result) => {
          if (err) {
            res
              .status(204)
              .json({message: "Internal server error."})
          } else {
            if (result.affectedRows) {
              res
                .status(201)
                .json({message: "Album Updated Successfully"})
            } else {
              res
                .status(202)
                .json({message: "Album Not Found"})
            }
          }
        })
      }
    }
  })

}

//album delete
exports.deleteAlbum = (req, res) => {
  let albumThumbnail;
  let photos;

  AlbumModel.getSingleAlbum(req.params.id, (err, result1) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error."})
    } else {
      albumThumbnail = result1[0].album_thumbnail
      AlbumModel.deleteAlbum(req.params.id, (err, result2) => {
        if (err) {
          return res
            .status(404)
            .json({message: "Internal server error."})
        } else {
          fs.unlink(albumThumbnail, err => {
            if (err) {
              return res
                .status(404)
                .json({message: "Internal server error."})
            } else {
              PhotoModel.getAllPhotoByAlbumId(req.params.id, (err, result3) => {
                if (err) {
                  return res
                    .status(404)
                    .json({message: "Internal server error."})
                } else {
                  if (!result3.length) {
                    res
                      .status(201)
                      .json({message: "Album deleted successfully without photos"})
                    
                  } else {
                    photos = result3
                    PhotoModel.deletePhotoByAlbumId(req.params.id, (err, result4) => {
                      if (err) {
                        console.log(err);
                        return res
                          .status(404)
                          .json({message: "Internal server error"})
                      } else {
                        photos.forEach((item) => {
                          fs.unlink(item.photo, err => {
                            if (err) {
                              return res
                                .status(404)
                                .json({message: "internal server error"})
                            }
                          })
                        })
                        res
                          .status(201)
                          .json({message: "Album Deleted successfully"})
                      }
                    })
                  }
                }
              })
            }
          })
        }
      })
    }
  })
}