const router = require('express').Router();
const QuotationController = require('../controller/QuotationController')
const AdminAuthMiddleware = require('../middleware/AdminAuthMiddleware')

router.get('/', AdminAuthMiddleware, QuotationController.getAll)
router.post('/', QuotationController.sendQuotation)
router.delete('/:id', QuotationController.delete)

module.exports = router;