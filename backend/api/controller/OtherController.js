const OtherModel = require("../models/OtherModel")

exports.getAll = (req, res) => {
  OtherModel.getAll((err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      res
        .status(201)
        .json(result)
    }
  })
}

exports.update = (req, res) => {
  OtherModel.update(req.params.id, req.body, (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (!result.affectedRows) {
          console.log(result);
        return res
          .status(404)
          .json({message: "updated Faild"})
      } else {
        res
          .status(201)
          .json({message: "updated successfully"})
      }
    }
  })
}