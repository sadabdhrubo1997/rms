const dbConn = require('../../dbConfig/dbConfig');

const CategoryModel = function (category) {
    this.category_name = category.category_name;
    this.category_image = category.category_image;
}


// get all Categories
CategoryModel.getAllCategory = (result) => {
    dbConn.query('SELECT * FROM category ORDER BY category_id DESC', (err, res) => {
        if (err) {
            console.log('Error while fetching categories', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


// get single Category by Id
CategoryModel.getCategoryByID = (id, result) => {
    dbConn.query('SELECT * FROM category WHERE category_id=?', [id], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
}



// get category by name
CategoryModel.getCategoryByName = (categoryName, result) => {
    dbConn.query("SELECT * FROM category WHERE category_name=?", [
        categoryName
    ], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res)
        }
    })
}


// add new Category 
CategoryModel.addCategory = (image,data, result) => {
    dbConn.query("INSERT INTO category (category_name, category_image) VALUES (?, ?)", [
        data.category_name, image
    ], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

//get category name with name where id is not === req.params.id
CategoryModel.getCategoryByNameNotId = (name,id,result)=>{
    dbConn.query("SELECT * FROM category WHERE category_name =? AND category_id !=?",[name,id],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


// update category With Image
CategoryModel.updateCategoryImage = (id, image, result) => {
    dbConn.query("UPDATE category SET category_image = ? WHERE category_id = ?", [
        image,
        id
    ], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res)
        }
    })
}


// update category With Out Image
CategoryModel.updateCategoryName = (id, name, result) => {
    dbConn.query("UPDATE category SET category_name = ? WHERE category_id = ?", [
        name,
        id
    ], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res)
        }
    })
}


// update category 
CategoryModel.updateCategory = (id,name,image,result)=>{
    dbConn.query("UPDATE category SET category_name = ?,category_image=? WHERE category_id = ?", [
        name,
        image,
        id
    ], (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res)
        }
    })}


// delete category
CategoryModel.deleteCategory = (id,result)=>{
    dbConn.query("DELETE FROM category WHERE category_id=?",[id],(err,res)=>{
        if (err) {
            result(null,err)
        }else{
            result(null, res)
        }
    })
}




module.exports = CategoryModel;