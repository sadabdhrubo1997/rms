const router = require('express').Router();
const AdminController = require("../controller/AdminController")
const CommonAuthCheck = require("../middleware/CommonAuthCheck");

router.get('/authCheck', CommonAuthCheck)
router.post('/login', AdminController.adminLogin);
router.put('/changePassword', AdminController.changePassword);
router.post('/forgetPassword', AdminController.forgetPasswordPost);
router.put('/forgetPassword/:urlParams', AdminController.forgetPasswordPut);




module.exports = router