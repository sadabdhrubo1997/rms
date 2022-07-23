require("dotenv").config()
const jwt = require("jsonwebtoken")

const CommonAuthCheck = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (token) {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decode;
      if (decode) {
        res
          .status(201)
          .json({message: "Authentication success"})
      }
    }   
  } catch (e) {
    res
      .status(210)
      .json({message: "Authentication failed"})
  }
}

module.exports = CommonAuthCheck