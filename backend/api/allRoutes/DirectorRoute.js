const router = require("express").Router();
const DirectorController = require("../controller/DirectorController")
const {upload} = require("../middleware/FIleUploadMiddleware")

router.get("/", DirectorController.getAll);
router.get("/:id", DirectorController.getSingleById);
router.post("/", upload.single("directorImage"), DirectorController.addDirector);

router.put("/withImage/:id", DirectorController.checkDIrectorForUpdateWithImage, upload.single("directorImage"), DirectorController.updateDirectorWithImage);

router.put("/withOutImage/:id", DirectorController.
checkDIrectorForUpdateWithOutImage, DirectorController.updateDirectorWithOutImage);

router.delete("/:id", DirectorController.deleteDirector);

module.exports = router;
