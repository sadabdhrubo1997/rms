const router = require('express').Router();
const AboutUsController = require("../controller/AboutUsController")

// localhost:8000/api/aboutUs


router.get("/", AboutUsController.getAll)
router.put("/", AboutUsController.update)



module.exports = router