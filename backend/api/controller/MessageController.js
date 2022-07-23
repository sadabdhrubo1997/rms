const MessageModel = require("../models/MessageModel");

// get all
exports.getAll = (req, res) => {

  
  MessageModel.getAll((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error..."})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "You have no message to show"})
      } else {

        res
          .status(201)
          .json(result)
      }
    }
  })
}

// get single message by id
exports.getSingleMessage = (req, res) => {
  MessageModel.getSingleMessage(req.params.id, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "No message found."})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// send message
exports.sendMessage = (req, res) => {
  MessageModel.sendMessage(req.body, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (result.insertId !== 0) {
        res
          .status(201)
          .json({message: "Message sent successfully"})
      } else {
        res
          .status(203)
          .json({message: "Message sending failed....."})
      }
    }
  })
}

// delete by message id
exports.delete = (req, res) => {  
  MessageModel.delete(req.params.id, (err, reseult) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      res
        .status(201)
        .json({message: "Message Deleted Successfully...."})
    }
  })
}