const dbConn = require('../../dbConfig/dbConfig');

const QuotationModel = (quotation) => {
  this.name = quotation.name;
  this.contact = quotation.contact;
  this.email = quotation.email;
  this.interested_item = quotation.interested_item;
  this.quantity = quotationt.quantity;
}



// get all 
QuotationModel.getAll = (result)=>{
    dbConn.query('SELECT * FROM quotation ORDER BY quotation_id DESC',(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

// send quotation
QuotationModel.sendQuotation = (data,result)=>{
    dbConn.query('INSERT INTO quotation (name,contact,email,interested_item,quantity) VALUES (?,?,?,?,?)',[
        data.name,
        data.contact,
        data.email,
        data.interested_item,
        data.quantity
    ],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


// delete  
QuotationModel.deleteById = (id ,result)=>{
    dbConn.query('DELETE FROM quotation WHERE quotation_id=?',[id],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}




module.exports = QuotationModel;