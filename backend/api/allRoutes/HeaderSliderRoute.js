const router = require('express').Router();
const HeaderSliderController = require("../controller/HeaderSliderController")
const {upload} = require("../middleware/FIleUploadMiddleware")





router.get("/", HeaderSliderController.getAll)
router.post("/", upload.single("photo"), HeaderSliderController.addImage)
router.delete("/:id", HeaderSliderController.delete)


module.exports = router