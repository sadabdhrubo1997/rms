const router = require('express').Router();
const ServiceController = require("../controller/ServiceController")


router.get("/", ServiceController.getAll)
router.put("/:id", ServiceController.update)


module.exports = router