const AdminModel = require("../models/AdminModel");
const jwt = require('jsonwebtoken')
const env = require("dotenv").config()
const {v4: uuidv4} = require('uuid');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

exports.adminLogin = (req, res) => {

  AdminModel.adminLogin(req.body, (err, result) => {
    if (err) {
      res
        .status(404)
        .json({message: "Internal Server Error"})
    } else {
      if (result.length < 1) {
        res
          .status(202)
          .send("Invalid Credintials")
      } else {
        let token = jwt.sign({
          email: result[0].admin_email,
          id: result[0].id
        }, process.env.JWT_SECRET, {expiresIn: 60*60*24 })
        res
          .status(201)
          .json({message: "login success", token})
      }
    }
  })
}

// this function will send the temporary url parameter to the user email.....
exports.forgetPasswordPost = (req, res) => {
  let email = req.body.email;
  AdminModel.getAdminByEmail(email, (err, isExists) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error.", err})
    } else {
      if (isExists.length < 1) {
        res
          .status(202)
          .json({message: "User Not Exists"})
      } else {
        let ID = isExists[0].id

        const urlParams = (uuidv4() + uuidv4() + uuidv4() + uuidv4())
          .split("-")
          .join('');
        const transporter = nodemailer.createTransport(smtpTransport({
          host: 'mail.sadabdhrubo.me',
          secureConnection: true,
          port: 465,
          secure: true,
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
          },
          auth: {
            user: process.env.WEB_MAIL,
            pass: process.env.WEB_MAIL_PASSWORD
          }
        }));

        let mailOptions = {
          from: 'RMS <contact@sadabdhrubo.me>', // TODO: email sender
          to: email, // TODO: email receiver
          subject: 'Forget Password',
          html: `    
        <div id="customEmailWrapper" style="background:rgba(0,0,0,0.02);padding:20px;border-radius:10px;">    
        <h1 style="color:#000;font-size:30px;margin-bottom:20px">Reset Admin Password</h1>
        <br/>
        <a href="http://localhost:3000/admin/forget/password/${urlParams}">Click Here To Reset Password</a>
        <br/>
        <p style="font-size:18px;color:rgba(0,0,0,0.5);">Thank you</p>
        </div>
        `
        };

        AdminModel.forgetPasswordUrlParamsSet(ID, urlParams, (err, result) => {
          if (err) {
            res
              .status(204)
              .json({message: "Internal Server Errror..", err})
          } else {
            if (result.InsertedId !== 0) {
              transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                  return console.log('Error occurd');
                } else {
                  res
                    .status(201)
                    .json({message: "mail sent", urlParams});
                }
              });
            } else {
              res.send("not sent")
            }
          }
        })
      }
    }
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

exports.forgetPasswordPut = (req, res) => {
  let params = req.params.urlParams;
  let password = req.body.password;
  if (!req.body.password) {
    res.json({message: "Please Enter the password"})
  } else {
    AdminModel.checkForgetPasswordUrlParams(params, (err, result) => {
      if (err) {
        res
          .status(404)
          .json({message: "Internal Server Error.."})
      } else {
        if (result.length) {
          AdminModel.changePasswordByParams(params, password, (err, isChanged) => {
            if (err) {
              res
                .status(404)
                .json({message: "Internal server error"})
            } else {
              if (isChanged.affectedRows === 0) {
                res
                  .status(202)
                  .json({message: "Password not changed."})
              } else {
                res
                  .status(201)
                  .json({message: "password changed."})
              }
            }
          })
        } else {
          res
            .status(203)
            // .json({message: "Wrong Url"})
        }
      }
    })
  }
}



exports.changePassword = (req,res)=>{
  AdminModel.checkOldPassword(req.body.oldPassword,(err,result1)=>{
    if (err) {
      res.end(err)
    }else{
      if (!result1.length) {        
        res.status(202).json({message:"Please enter the correct old password"})
      }else{
        AdminModel.changePassword(req.body.newPassword,(err,result)=>{
          if (err) {
            res.end(err)
          }else{
            if (result.affectedRows) {
              res.status(201).json({message:"Password Changed Successfully"})
            }else{
              res.status(204).json({message:"Password Not Changed."})
            }
          }
        })
      }
    }
  })
}


