const router = require('express').Router();
const MessageController = require("../controller/MessageController");
const AdminAuthMiddleware = require("../middleware/AdminAuthMiddleware")





router.get('/', AdminAuthMiddleware ,MessageController.getAll);
router.get('/:id', MessageController.getSingleMessage);
router.post('/', MessageController.sendMessage)
router.delete('/:id', MessageController.delete);









module.exports = router;