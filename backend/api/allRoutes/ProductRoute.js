const router = require('express').Router();
const ProductController = require('./../controller/ProductController');
const {upload} = require('../middleware/FIleUploadMiddleware');
const AdminAuthMiddleware = require("../middleware/AdminAuthMiddleware")

router.get("/", ProductController.getAllProduct);
router.get("/category/:id", ProductController.getProductByCategory);
router.get("/:id", ProductController.getSIngleProduct);
router.post("/", upload.single("productImage"), ProductController.addProduct);
router.put("/withOutImage/:id", ProductController.updateProductWithOutImage);
router.put("/withImage/:id", upload.single("productImage"), ProductController.updateProductWithImage);
router.delete("/:id", AdminAuthMiddleware, ProductController.deleteProduct);

module.exports = router;