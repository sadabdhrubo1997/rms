require("dotenv").config()
const jwt = require("jsonwebtoken")

const AdminAuthMiddleware = (req, res, next) => {
  try {
    let token = req.headers.authorization
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decode
    next()
  } catch (error) {
    res
      .status(206)
      .json({message: "Authentication failed"})
  }
}

module.exports = AdminAuthMiddleware