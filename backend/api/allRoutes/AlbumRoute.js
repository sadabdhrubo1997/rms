const router = require('express').Router();
const AlbumController = require("../controller/AlbumController");
const {upload} = require("../middleware/FIleUploadMiddleware");



router.get('/', AlbumController.getAllAlbum);
router.get('/:id', AlbumController.getSingleAlbum);
router.post('/',upload.single("albumThumbnail"), AlbumController.addAlbum);
router.put('/:id', AlbumController.updateAlbum);
router.delete('/:id', AlbumController.deleteAlbum);




module.exports = router;