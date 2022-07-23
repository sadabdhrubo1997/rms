const dbConn = require('../../dbConfig/dbConfig');

const ServiceModel = (service) => {
  this.id = service.id;
  this.services = service.services;
  this.bagAndApparel = service.bagAndApparel;
}

// get all 
ServiceModel.getAll = (result)=>{
    dbConn.query('SELECT * FROM service',(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

// update with out image  
ServiceModel.update= (id,data,result)=>{
  dbConn.query("UPDATE service SET services = ?, bagAndApparel = ? WHERE id = ?",
  [
  data.services,
  data.bagAndApparel,
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





module.exports = ServiceModel;
