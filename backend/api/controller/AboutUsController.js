const AboutUsModel = require("../models/AboutUsModel")



exports.getAll = (req, res) => {
  AboutUsModel.getAll((err, result) => {
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
  AboutUsModel.update(req.body, (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (!result.affectedRows) {
        return res
          .status(404)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated successfully"})
      }
    }
  })
}