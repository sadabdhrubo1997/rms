const QuotationModel = require('../models/QuotationModel');

// get all
exports.getAll = (req, res) => {
  QuotationModel.getAll((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "No Quotation Found"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// send quotation
exports.sendQuotation=(req,res)=>{
    QuotationModel.sendQuotation(req.body,(err,result)=>{
        if (err) {
            res.status(204).json({message:"Internal server error"})
        }else{
            res.status(201).json({
                message:"Quotation Sent Successfully......"
            })
        }
    })
}

//delete by id
exports.delete = (req, res) => {
  
  QuotationModel.deleteById(req.params.id, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      res
        .status(201)
        .json({message: "Quotation deleted successfully"})

    }
  })
}
