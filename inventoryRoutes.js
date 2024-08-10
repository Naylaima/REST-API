const express = require('express');
const router = express.Router();
const cors = require('cors');
const inventoryController = require('../controllers/inventoryController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(cors());
router.get('/', inventoryController.getAllItems);
router.get('/:id', authMiddleware, inventoryController.getItemById);
router.post('/', authMiddleware, inventoryController.createItem);
router.put('/:id', authMiddleware, inventoryController.updateItem);
router.delete('/:id', authMiddleware, inventoryController.deleteItem);

module.exports = router;