const dbConn = require("../../dbConfig/dbConfig")

const DirectorModel = (director) => {
  this.name = director.name;
  this.designation = director.designation;
  this.image = director.image;
}

// get all
DirectorModel.getAll = (result) => {
  dbConn.query("SELECT * FROM director ORDER BY director_id DESC", (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get single by Id
DirectorModel.getSingleById = (id, result) => {
  dbConn.query("SELECT * FROM director WHERE director_id=?", [id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// add director
DirectorModel.addDirector = (data,image, result) => {
  dbConn.query("INSERT INTO director (name,designation,image) VALUES (?,?,?)", [
    data.name, data.designation, image
  ], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}


// update director with out image
DirectorModel.updateDirectorWithOutImage = (id,data,result)=>{
    dbConn.query("UPDATE director SET name=?,designation=? WHERE director_id=?",[data.name,data.designation,id],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

// update director with image
DirectorModel.updateDirectorWithImage = (id,data,image,result)=>{
    dbConn.query("UPDATE director SET name=?,designation=?,image=? WHERE director_id=?",[data.name,data.designation,image,id],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

//delete director
DirectorModel.deleteDirector = (id,result)=>{
    dbConn.query("DELETE FROM director WHERE director_id = ?",[id],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}




module.exports = DirectorModel;