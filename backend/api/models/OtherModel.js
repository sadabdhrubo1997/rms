const dbConn = require('../../dbConfig/dbConfig');

const OtherModel = (other) => {
  this.id = other.id;
  this.footerShortDesc = other.footerShortDesc;
  this.slogan = other.slogan;
  this.heading = other.heading;
  this.headerParagraph = other.headerParagraph;
}

// get all 
OtherModel.getAll = (result)=>{
    dbConn.query('SELECT * FROM other',(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

// update with out image  
OtherModel.update= (id,data,result)=>{
  dbConn.query("UPDATE other SET footerShortDesc = ?,slogan = ?, heading = ?, headerParagraph = ?, location_and_area=?, facilities=? WHERE id = ?",
  [
  data.footerShortDesc,
  data.slogan,
  data.heading,
  data.headerParagraph,
  data.locationAndArea,
  data.facilities,
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





module.exports = OtherModel;
