const router = require("express").Router();
const PhotoController = require("../controller/PhotoController");
const {upload} = require("../middleware/FIleUploadMiddleware")

router.get('/:album_id', PhotoController.getAllPhotoByAlbumId)
router.post('/:album_id', upload.array("photos"), PhotoController.addPhotoInAlbum)
router.delete('/:id', PhotoController.deletePhoto)

module.exports = router