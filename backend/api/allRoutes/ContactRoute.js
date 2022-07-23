const router = require('express').Router();
const ContactController = require('../controller/ContactController');
const AdminAuthMiddleware = require("../middleware/AdminAuthMiddleware")

router.get('/address', ContactController.getAddress);
router.put('/address', ContactController.editAddress);

router.get('/phone', ContactController.getPhone);
router.put('/phone', ContactController.editPhone);

router.get('/email', ContactController.getEmail);
router.put('/email', ContactController.editEmail);

router.get('/facebook', ContactController.getFacebook);
router.put('/facebook', ContactController.editFacebook);

router.get('/googlePlus', ContactController.getGooglePlus); 
router.put('/googlePlus', ContactController.editGooglePlus);

router.get('/twitter', ContactController.getTwitter);
router.put('/twitter', ContactController.editTwitter);

router.get('/whatsapp', ContactController.getWhatsapp);
router.put('/whatsapp', ContactController.editWhatsapp);

router.get('/youtube', ContactController.getYoutube);
router.put('/youtube', ContactController.editYoutube);

router.get('/instagram', ContactController.getInstagram);
router.put('/instagram', ContactController.editInstagram);

module.exports = router;