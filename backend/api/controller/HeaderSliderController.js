const HeaderSliderModel = require("../models/HeaderSliderModel")
const fs = require("fs")

exports.getAll = (req, res) => {
  HeaderSliderModel.getAll((err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (!result.length) {
        res
          .status(202)
          .json({message: "No Slider Image Exists"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

exports.addImage = (req, res) => {
  let file = req
    .file
    .path
    .replace(/\\/g, "/")
  HeaderSliderModel.add(file, (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal Server Eror", err})
    } else {
      if (!result.affectedRows) {
        return res
          .status(404)
          .json({message: "Not uploaded"})
      } else {
        res
          .status(201)
          .json({message: "Added Successfully."})
      }
    }
  })

}

exports.delete = (req, res) => {
  let imagePath
  HeaderSliderModel.getSingle(req.params.id, (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (!result.length) {
        res
          .status(202)
          .json({message: "Image Not Exists"})
      } else {
        imagePath = (result[0].image)
        HeaderSliderModel.delete(req.params.id, (err, result) => {
          if (err) {
            return res
              .status(404)
              .json({message: "Internal Server Error", err})
          } else {
            if (!result.affectedRows) {
              return res
                .status(404)
                .json({message: "Delete Failed"})
            } else {
              fs.unlink(imagePath, (err) => {
                if (err) {
                  return res
                    .status(404)
                    .json({message: "Delete Failed"})
                } else {
                  res
                    .status(201)
                    .json({message: "Deleted successfully."})
                }
              })
            }
          }
        })
      }
    }
  })

}