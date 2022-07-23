const DirectorModel = require("../models/DirectorModel");
const fs = require("fs");

// get all
exports.getAll = (req, res) => {
  DirectorModel.getAll((err, result) => {
    if (err) {
      res
        .status(204)
        .jso({message: "Internal server error"})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "You have no data to show"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// get single by id
exports.getSingleById = (req, res) => {
  DirectorModel.getSingleById(req.params.id, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "this data is not exists"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// add director
exports.addDirector = (req, res) => {

  DirectorModel.addDirector(req.body, req.file.path.replace(/\\/g, "/"), (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (result.affectedRows === 0) {
        res
          .status(203)
          .json({message: "data add failed"})
      } else {
        res
          .status(201)
          .json({message: "added successfully"})
      }
    }
  })
}

// update director with out image
exports.updateDirectorWithOutImage = (req, res) => {
  DirectorModel.updateDirectorWithOutImage(req.params.id, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(204)
        .json({message: "Internal server error."})
    } else {
      if (!(result.affectedRows === 1)) {
        res
          .status(203)
          .json({message: "not updated"})
      } else {
        res
          .status(201)
          .json({message: "updated successfully"})
      }
    }
  })
}





// update director with image
exports.updateDirectorWithImage = (req, res) => {
  DirectorModel.updateDirectorWithImage(req.params.id, req.body,req.file.path.replace(/\\/g, "/"), (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(204)
        .json({message: "Internal server error."})
    } else {
      if (!(result.affectedRows === 1)) {
        res
          .status(203)
          .json({message: "not updated"})
      } else {
        res
          .status(201)
          .json({message: "updated successfully"})
      }
    }
  })
}







// middleware for update director with image
exports.checkDIrectorForUpdateWithImage = (req, res, next) => {  
  DirectorModel.getSingleById(req.params.id, (err, isExists) => {
    if (err) {
      return res
        .status(204)
        .json({message: "error occured"})
    } else {
      if (isExists.length < 1) {
        res
          .status(202)
          .json({message: "Director not exists"})
      } else {
        fs.unlink(isExists[0].image, err => {
          if (err) {
            return res
              .status(204)
              .json({message: "error occured"})
          } else {
            next()
          }
        });
      }
    }
  })
}







// middleware for update director without image
exports.checkDIrectorForUpdateWithOutImage = (req, res, next) => {
  DirectorModel.getSingleById(req.params.id, (err, isExists) => {
    if (err) {
      return res
        .status(204)
        .json({message: "error occured"})
    } else {
      if (isExists.length < 1) {
        res
          .status(202)
          .json({message: "Director not exists"})
      } else { 
            next()
          
        
      }
    }
  })
}

//delete director
exports.deleteDirector = (req, res) => {
  DirectorModel.getSingleById(req.params.id, (err, isExists) => {
    if (err) {     
      res
        .status(204)
        .json({message: "Internal server error."})
    } else {
      if (isExists.length < 1) {
        res
          .status(202)
          .json({messaeg: "This data by Id is not found"})
      } else {
        fs.unlink(isExists[0].image, err => {
          if (err) {
            res
              .status(204)
              .json({message: "Internal server error."})
          } else {
            DirectorModel.deleteDirector(req.params.id, (err, result) => {
              if (err) {
                res
                  .status(204)
                  .json({message: "Internal server error."})
              } else {
                if (!(result.affectedRows === 1)) {
                  res
                    .status(203)
                    .json({message: "not updated"})
                } else {
                  res
                    .status(201)
                    .json({message: "deleted successfully"})
                }
              }
            })
          }
        })

      }
    }
  })
}