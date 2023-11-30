const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('POST /api/books', bookController.createBook);
router.get('GET /api/books', bookController.getAllBooks);
router.get('GET /api/books/:id', bookController.getBookById);
router.put('PUT /api/books/:id', bookController.updateBook);
router.delete('DELETE /api/books/:id', bookController.deleteBook);

module.exports = router;
