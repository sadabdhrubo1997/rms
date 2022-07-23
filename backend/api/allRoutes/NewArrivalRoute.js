const router = require("express").Router();
const NewArrivalController = require("../controller/NewArrivalController")
const {upload} = require("../middleware/FIleUploadMiddleware")


router.get("/", NewArrivalController.getAll)
router.get("/:id", NewArrivalController.getSingleById)

router.post("/", upload.single("image"), NewArrivalController.add)

router.put("/name/:id", NewArrivalController.updateName)
router.put("/image/:id", upload.single("image") ,NewArrivalController.updateImage)
router.put("/:id",upload.single("image") ,NewArrivalController.update)

router.delete("/:id", NewArrivalController.delete)


module.exports = router