const ProductModel = require("../models/ProductModel");
const fs = require("fs");

exports.getAllProduct = (req, res) => {
  ProductModel.getAllProduct((err, products) => {
    if (err) {
      res.status(404).send(err)
    } else {      
      if(products.length < 1){
       return res.status(202).json({message:"No Product Exists"})
      }else{
        res.status(201).json(products)
      }
    }
  })
}

// get product by category 
exports.getProductByCategory = (req,res)=>{
  ProductModel.getProductByCategory(req.params.id,(err,result)=>{
    if (err) {
      return res.status(404).json({message:"Internal server error"})
    }else{
      if (!result.length) { 
        res.status(202).json({message:"No product exists"})
      }else{
        res.status(201).json(result)
      }
    }
  })
}

// this methos is not neccesary for the project
exports.getSIngleProduct = (req, res) => {
  ProductModel.getSingleProduct(req.params.id, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      if (result.length < 1) {
        return res.json({message: "This product is not exists"})
      }else{
        res.status(201).json(result)
      }
      
    }
  })
}

exports.addProduct = (req, res) => {
  let filePath = req
    .file
    .path
    .replace(/\\/g, "/")
  ProductModel.addProduct(req.body, req.file.path.replace(/\\/g, "/"), (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res
        .status(201)
        .json({message: "Product added successfully"})
    }
  })
}

// update product
exports.updateProduct = (req, res) => {
  ProductModel.getSingleProduct(req.params.id, (err, isExists) => {
    if (err) {
      res.send(err)
    } else {
      if (isExists.length < 1) {
        res.json({message: "This product is not exists"})
      } else {
        ProductModel.updateProduct(req.params.id, req.body, (err, result) => {
          if (err) {
            res.send(err)
          } else {
            res.json({message: "Product Updated successfully"})
          }
        })
      }
    }
  })
}


// update product with out image 
exports.updateProductWithOutImage = (req,res)=>{
  ProductModel.updateProductWithOutImage(req.params.id,req.body,(err,result)=>{
    if (err) {
     return res.status(404).json({messages:"internal server error"})
    }else{
      res.status(201).json({message:"Updated successfully"})
    }
  })
}



exports.updateProductWithImage = (req,res)=>{
  let image = req
  .file
  .path
  .replace(/\\/g, "/")
  ProductModel.getSingleProduct(req.params.id,(err,result1)=>{
    if (err) {
     return res.status(404).json({message:"Internal server error"})
    }else{
      if (result1) {
        fs.unlink(result1[0].product_image,err=>{
          if (err) {
            return res.status(404).json({message:"Internal server error"})
          }else{
            ProductModel.updateProductWithImage(req.params.id,req.body,image,(err,result2)=>{
              if (err) {
                return res.status(404).json({message:"Internal server error"})
              }else{
                res.status(201).json({message:"Updated successfully with image..."})
              }
            })
          }
        })
      }
    }
  })

}

// delete product

exports.deleteProduct = (req, res) => {
  ProductModel.getSingleProduct(req.params.id, (err, isExists) => {
    if (err) {
      res.send(err)
    } else {
      if (isExists.length < 1) {
        res.json({message: "This product is not exists"})
      } else {
        ProductModel.deleteProduct(req.params.id, (err, result) => {
          if (err) {
            res.send(err)
          } else {
            fs.unlink(isExists[0].product_image, err => {
              if (err) {
                return res
                  .status(404)
                  .json({message: "Internal server error"})
              } else {
                res
                  .status(201)
                  .json({message: "Product Deleted Successfully"})
              }
            })
          }
        })
      }
    }
  })
}