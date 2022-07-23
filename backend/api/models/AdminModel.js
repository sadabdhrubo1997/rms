const dbConn = require("../../dbConfig/dbConfig")

const AdminModel = (admin) => {
  this.admin_email = admin.admin_email;
  this.admin_password = admin.admin_password;
  this.admin_forget_password_url_params = admin.admin_forget_password_url_params;
}

AdminModel.adminLogin = (data, result) => {
  dbConn.query("SELECT id, admin_email,admin_password FROM admin WHERE admin_email=? AND admin_p" +
      "assword=?",
  [
    data.admin_email, data.admin_password
  ], (err, res) => {
    if (err) {
      console.log(err);
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

AdminModel.getAdminByEmail = (email, result) => {
  dbConn.query("SELECT id from admin WHERE admin_email=?", [email], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

AdminModel.checkOldPassword = (oldPassword,result) => {
  dbConn.query("SELECT id from admin WHERE admin_password=?",[oldPassword],(err,res)=>{
    if (err) {
      result(err,null)
    }else{
      result(null,res)
    }
  })
}

AdminModel.forgetPasswordUrlParamsSet = (id, urlParams, result) => {
  dbConn.query("UPDATE admin SET admin_forget_password_url_params = ? WHERE id=?", [
    urlParams, id
  ], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

AdminModel.changePassword = (password,result)=>{
  dbConn.query("UPDATE admin SET admin_password=?",[password],(err,res)=>{
    if (err) {
      result(err,null)
    }else{
      result(null,res)
    }
  })
}

AdminModel.changePasswordById = (id, password, result) => {
  dbConn.query("UPDATE admin SET admin_password=?, admin_forget_password_url_params='' WHERE id=?",[password,'',id],(err,res)=>{
      if (err) {
          result(err,null)
      }else{
          result(null,res)
      }
  })
}

AdminModel.changePasswordByParams = (params, password, result) => {
  dbConn.query("UPDATE admin SET admin_password=?, admin_forget_password_url_params=? WHERE admin_forget_password_url_params=?",[password,'',params],(err,res)=>{
      if (err) {
          result(err,null)   
        }else{
          result(null,res)
      }
  })
}

AdminModel.clearParams = (params,result)=>{
    dbConn.query("UPDATE admin SET admin_forget_password_url_params='' WHERE admin_forget_password_url_params=?",[params],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}


AdminModel.checkForgetPasswordUrlParams = (params,result)=>{
    dbConn.query("SELECT admin_forget_password_url_params FROM admin WHERE admin_forget_password_url_params=?",[params],(err,res)=>{
        if (err) {
            result(err,null)
        }else{
            result(null,res)
        }
    })
}

module.exports = AdminModel