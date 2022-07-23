const NewArrivalModel = require("../models/NewArrivalModel")
const fs = require("fs")

exports.getAll = (req, res) => {
  NewArrivalModel.getAll((err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result.length < 1) {
        return res
          .status(202)
          .json({message: "No New Arrival Product Exists."})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

exports.add = (req, res) => {
  let imagePath = req
    .file
    .path
    .replace(/\\/g, "/");

  NewArrivalModel.add(req.body, imagePath, (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (!result.affectedRows) {
        return res
          .status(404)
          .json({message: "Inserting faild"})
      } else {
        res
          .status(201)
          .json({message: "added successfully."})
      }
    }
  })
}

exports.getSingleById = (req, res) => {
  NewArrivalModel.getSingleById(req.params.id, (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result.length < 1) {
        return res
          .status(202)
          .json({message: "This content is not exists."})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

exports.update = (req,res)=>{
    NewArrivalModel.getSingleById(req.params.id, (err, result1) => {
        if (err) {
          return res
            .status(404)
            .json({message: "Internal server error"})
        } else {
          if (result1.length) {
            fs.unlink(result1[0].image, err => {
              if (err) {
                return res
                  .status(404)
                  .json({message: "Internal server error"})
              } else {
                let image = req.file.path.replace(/\\/g, "/");
                NewArrivalModel.update(req.params.id,req.body.name, image, (err, result2) => {
                  if (err) {
                    return res
                      .status(404)
                      .json({message: "Internal server error"})
                  }else{
                      if (!result2.affectedRows) {
                          return res.status(404).json({message:"Update failed"})
                      }else{
                          res.status(201).json({message:"updated successfully...."})
                      }
                  }
                })
              }
            })
          }
        }
      })
}

exports.updateName = (req, res) => {
  NewArrivalModel.updateName(req.params.id, req.body.name, (err, result1) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      res
        .status(201)
        .json({message: "Name updated successfully."})
    }
  })
}

exports.updateImage = (req, res) => {
  NewArrivalModel.getSingleById(req.params.id, (err, result1) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result1.length) {
        fs.unlink(result1[0].image, err => {
          if (err) {
            return res
              .status(404)
              .json({message: "Internal server error"})
          } else {
            let image = req.file.path.replace(/\\/g, "/");
            NewArrivalModel.updateImage(req.params.id, image, (err, result2) => {
              if (err) {
                return res
                  .status(404)
                  .json({message: "Internal server error"})
              }else{
                  if (!result2.affectedRows) {
                      return res.status(404).json({message:"Update failed"})
                  }else{
                      res.status(201).json({message:"Image updated successfully...."})
                  }
              }
            })
          }
        })
      }
    }
  })
}

exports.delete = (req, res) => {
  let image;
  NewArrivalModel.getSingleById(req.params.id, (err, result1) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result1.length < 1) {
        return res
          .status(202)
          .json({message: "This content is not exists."})
      } else {
        image = result1[0].image;
        NewArrivalModel.delete(req.params.id, (err, result) => {
          if (err) {
            return res
              .status(404)
              .json({message: "Internal server error"})
          } else {
            if (!result.affectedRows) {
              return res
                .status(202)
                .json({message: "Delete Failed"})
            } else {
              fs.unlink(image, err => {
                if (err) {
                  return res
                    .status(404)
                    .json({message: "Internal server error"})
                } else {
                  res
                    .status(201)
                    .json({message: "Deleted successfully"})
                }
              })
            }
          }
        })

      }
    }
  })

}