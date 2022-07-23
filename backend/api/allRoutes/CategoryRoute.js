const router = require('express').Router();
const CategoryController = require("../controller/CategoryController");
const {upload} = require('../middleware/FIleUploadMiddleware');

// router.use('/api', adminRoutes);

router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getCategoryById);
router.post('/c', CategoryController.getCategoryByName);
router.post('/', upload.single('category'), CategoryController.addCategory);
router.put('/name/:id', CategoryController.updateCategoryName)
router.put('/image/:id', upload.single("category"), CategoryController.updateCategoryImage)
router.put('/:id', upload.single("category"), CategoryController.updateCategory)
router.delete('/:id', CategoryController.deleteCategory);



module.exports = router