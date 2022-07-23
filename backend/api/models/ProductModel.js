const dbConn = require('../../dbConfig/dbConfig');

const ProductModel = (product) => {
  this.cat_id = product.cat_id;
  this.product_no = product.product_no;
  this.primaty_material = product.primary_material;
  this.dimension = product.dimension;
  this.warrenty = product.warrenty;
  this.price = product.price;
  this.product_image = product.product_image;
}

// get all product
ProductModel.getAllProduct = (result) => {
  dbConn.query("SELECT product.product_id, product.cat_id, product.product_no, product.primary_material, product.dimension, product." +
      "warrenty, product.price, product.product_image, category.category_name FROM prod" +
      "uct LEFT JOIN category ON product.cat_id = category.category_id ORDER BY product" +
      ".product_id DESC",
  (err, res) => {
    if (err) {
      console.log("error while fatching all product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })
}




// get product by category id
ProductModel.getProductByCategory = (id, result) => {
  dbConn.query("SELECT product.product_id, product.cat_id, product.product_no, product.primary_material, product.dimension, product." +
  "warrenty, product.price, product.product_image, category.category_name FROM prod" +
  "uct LEFT JOIN category ON product.cat_id = category.category_id WHERE cat_id=? ORDER BY product.product_id DESC", [id], (err, res) => {
    if (err) {
      console.log("error while fatching all product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })
}


// get product image by category id
ProductModel.getProductsImagesByCategoryId = (id, result) => {
  dbConn.query("SELECT product_image FROM product WHERE cat_id=?", [id], (err, res) => {
    if (err) {
      console.log("error while fatching all product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })
}


// this methos is not neccesary for direct use in the project
ProductModel.getSingleProduct = (id, result) => {
  dbConn.query("SELECT * FROM product WHERE product_id=?", [id], (err, res) => {
    if (err) {
      console.log("error while fatching all product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })
}


// add product
ProductModel.addProduct = (data, image, result) => {
 
  dbConn.query("INSERT INTO product (cat_id, product_no, primary_material,dimension,warrenty,price,product_i" +
      "mage) VALUES (?, ?,?,?,?,?,?)",
  [
    Number(data.cat_id),
    data.product_no,
    data.primary_material,
    data.dimension,
    data.warrenty,
    data.price,
    image
  ], (err, res) => {
    if (err) {
      console.log("error while adding single product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

// update product
ProductModel.updateProduct = (id, data, result) => {
  dbConn.query("UPDATE product SET cat_id = ?, product_no=? ,primary_material = ?,dimension=?,warrenty=?,price=" +
      "?,product_image=? WHERE product_id = ?",
  [
    Number(data.cat_id),
    data.product_no,
    data.primary_material,
    data.dimension,
    data.warrenty,
    data.price,
    data.product_image,
    id
  ], (err, res) => {
    if (err) {
      console.log("error while adding single product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })
}


// update with out image  
ProductModel.updateProductWithOutImage = (id,data,result)=>{
  dbConn.query("UPDATE product SET cat_id = ?, product_no=?,primary_material = ?,dimension=?,warrenty=?,price=" +
      "? WHERE product_id = ?",
  [
    Number(data.cat_id),
    data.product_no,
    data.primary_material,
    data.dimension,
    data.warrenty,
    data.price,
    id
  ], (err, res) => {
    if (err) {
      console.log("error while adding single product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })  
}




// update with image  
ProductModel.updateProductWithImage = (id,data,image,result)=>{
  dbConn.query("UPDATE product SET cat_id = ?,product_image=?,primary_material = ?,dimension=?,warrenty=?,price=" +
      "? WHERE product_id = ?",
  [
    Number(data.cat_id),
    image,
    data.primary_material,
    data.dimension,
    data.warrenty,
    data.price,
    id
  ], (err, res) => {
    if (err) {
      console.log("error while adding single product", err);
      result(null, err)
    } else {
      result(null, res)
    }
  })  
}




// delete product
ProductModel.deleteProduct= (id,result)=>{
    dbConn.query("DELETE FROM product WHERE product_id=?",[id],(err,res)=>{
        if (err) {
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

// delete product by category id
ProductModel.deleteProductByCategory= (id,result)=>{
    dbConn.query("DELETE FROM product WHERE cat_id=?",[id],(err,res)=>{
        if (err) {
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

module.exports = ProductModel;
