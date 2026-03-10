import express from 'express';
import {createProduct, 
        getProducts,
        getProductById} from '../controllers/productControllers.js';
import { protect} from '../middleware/authMiddleware.js';


const router = express.Router()

router.route('/').post(protect, createProduct)
router.route('/:id').get(getProductById)
router.route('/').get(getProducts)

export default router;