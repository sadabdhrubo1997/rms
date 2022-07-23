const ServiceModel = require("../models/ServiceModel")

exports.getAll = (req, res) => {
  ServiceModel.getAll((err, result) => {
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
  ServiceModel.update(req.params.id, req.body, (err, result) => {
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