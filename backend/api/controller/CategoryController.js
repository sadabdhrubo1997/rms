const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");
const fs = require("fs");

// get all category
exports.getAllCategory = (req, res) => {
  CategoryModel.getAllCategory((err, result) => {
    if (err) {
      res
        .status(205)
        .json({message: "error occured", err})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .json({message: "No data found"})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// get single category by Id
exports.getCategoryById = (req, res) => {
  CategoryModel.getCategoryByID(req.params.id, (err, result) => {
    if (err) {
      res
        .status(205)
        .json({message: "error occured", err})
    } else {
      if (result.length < 1) {
        let message = `${req.params.id} is not a valid Category ID. This category is not exists`
        res
          .status(202)
          .json({message})
      } else {
        res
          .status(201)
          .json(result)
      }
    }
  })
}

// get category by name

exports.getCategoryByName = (req, res) => {
  CategoryModel.getCategoryByName(req.body.category_name, (err, isCategoryExists) => {
    if (err) {
      res
        .status(204)
        .json({message: "internal server error", error: err})
    } else {
      if (isCategoryExists.length > 0) {
        return res
          .status(203)
          .json({message: "This Category Name is already exists"})
      } else {
        res
          .status(201)
          .json({message: "you can go for the next route"})
      }
    }
  })
}

// add category
exports.addCategory = (req, res) => {
  let imagePath = req
    .file
    .path
    .replace(/\\/g, "/");
  CategoryModel.addCategory(imagePath, req.body, (err, result) => {
    if (err) {
      res
        .status(205)
        .json({message: "error occured", err})
    } else {
      res
        .status(201)
        .json({message: "Category Added Successfully"})
    }
  })
}

// all update controllers update category name
exports.updateCategoryName = (req, res) => {
  CategoryModel.getCategoryByNameNotId(req.body.category_name, req.params.id, (err, result) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result.length) {
        res
          .status(203)
          .json({message: "This Category Name is already exists"})
      } else {
        CategoryModel.updateCategoryName(req.params.id, req.body.category_name, (err, result1) => {
          if (err) {
            return res
              .status(404)
              .json({message: "Internal server error"})
          } else {
            if (!result1.affectedRows) {
              return res
                .status(404)
                .json({message: "Internal server error"})
            } else {
              res
                .status(201)
                .json({message: "Category Name Updated Successfully"})
            }
          }
        })
      }
    }
  })
}

// update category image
exports.updateCategoryImage = (req, res) => {
  let imagePath = req
    .file
    .path
    .replace(/\\/g, "/");

  CategoryModel.getCategoryByID(req.params.id, (err, result1) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result1) {
        fs.unlink(result1[0].category_image, err => {
          if (err) {
            return res
              .status(404)
              .json({message: "Internal server error"})
          } else {
            CategoryModel.updateCategoryImage(req.params.id, imagePath, (err, result2) => {
              if (err) {
                return res
                  .status(404)
                  .json({message: "Internal server error"})
              } else {
                if (!result2.affectedRows) {
                  return res
                    .status(404)
                    .json({message: "Internal server error"})
                } else {
                  res
                    .status(201)
                    .json({message: "Category Image Updated Successfully......"})
                }
              }
            })
          }
        })
      }
    }
  })
}

// update category
exports.updateCategory = (req, res) => {
  let imagePath = req
    .file
    .path
    .replace(/\\/g, "/");

  CategoryModel.getCategoryByNameNotId(req.body.category_name, req.params.id, (err, result1) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (result1.length) {
        fs.unlink(imagePath, err => {
          if (err) {
            return res
              .status(404)
              .json({message: "Internal server error"})
          } else {
            return res
              .status(203)
              .json({message: "This Category Name is already exists"})
          }
        })
      } else {
        CategoryModel.getCategoryByID(req.params.id, (err, result2) => {
          if (err) {
            return res
              .status(404)
              .json({message: "Internal server error"})
          } else {
            fs.unlink(result2[0].category_image, err => {
              if (err) {
                return res
                  .status(404)
                  .json({message: "Internal server error"})
              } else {
                CategoryModel.updateCategory(req.params.id, req.body.category_name, imagePath, (err, result3) => {
                  if (err) {
                    return res
                      .status(404)
                      .json({message: "Internal server error"})
                  } else {
                    if (!result3.affectedRows) {
                      return res
                        .status(404)
                        .json({message: "Internal server error"})
                    } else {
                      res
                        .status(201)
                        .json({message: "Category Updated Successfully"})
                    }
                  }
                })
              }
            })
          }
        })
      }
    }
  })

}
//delete category
exports.deleteCategory = (req, res) => {
  CategoryModel.getCategoryByID(req.params.id, (err, isCategoryExists) => {
    if (err) {
      return res
        .status(404)
        .json({message: "Internal server error"})
    } else {
      if (isCategoryExists.length < 1) {
        res
          .status(202)
          .json({message: "This Category Id is not Exists"})
      } else {
        let filePath = isCategoryExists[0].category_image
        CategoryModel.deleteCategory(req.params.id, (err, result) => {
          if (err) {
            res
              .status(204)
              .json({message: "error occured", err})
          } else {
            fs.unlink(filePath, (err, isDelete) => {
              if (err) {
                res.json({err})
              } else {
                let productsImages;
                ProductModel.getProductsImagesByCategoryId(req.params.id, (err, productsImgs) => {
                  if (err) {
                    res.send(err)
                  } else {
                    if (productsImgs.length > 0) {
                      productsImages = productsImgs;
                      ProductModel.deleteProductByCategory(req.params.id, (err, prodtctDelete) => {
                        if (err) {
                          res.send(err)
                        } else {
                          productsImages.forEach(item => {
                            fs.unlink(item.product_image, (err, deleteDone) => {
                              if (err) {
                                res.send(err)
                              }
                            })
                          })
                          res
                            .status(210)
                            .json({message: "Category Deleted Successfully with all products..."});
                        }
                      })
                    }else{
                      res.status(201).json({message:"Category deleted successfully"})
                    }
                  }
                })
                //~~~~~~~~~~~~~~~//
              }
            })
          }
        })
      }
    }
  })
}
