import express from 'express';
import controller from '../controllers/book'

const router =  express.Router();

router.post('/create', controller.createBook);
router.get('/get', controller.getAllBooks);
router.put('/update', controller.updateBook);

export = router;