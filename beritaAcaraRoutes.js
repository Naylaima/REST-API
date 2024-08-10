const express = require('express');
const router = express.Router();
const beritaAcaraController = require('../controllers/beritaAcaraController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, beritaAcaraController.getAllItems);
router.get('/:id', authMiddleware, beritaAcaraController.getItemById);
router.post('/', authMiddleware, beritaAcaraController.createItem);
router.put('/:id', authMiddleware, beritaAcaraController.updateItem);
router.delete('/:id', authMiddleware, beritaAcaraController.deleteItem);

module.exports = router;