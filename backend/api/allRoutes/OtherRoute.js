const router = require('express').Router();
const OtherController = require("../controller/OtherController")


router.get("/", OtherController.getAll)
router.put("/:id", OtherController.update)


module.exports = router