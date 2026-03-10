import express from 'express';
import {createProduct, 
        getProducts,
        getProductById,
        deleteProduct} from '../controllers/productControllers.js';
import { protect, admin} from '../middleware/authMiddleware.js';


const router = express.Router()

router.route('/').post(protect, createProduct)
router.route('/:id').get(getProductById)
router.route('/').get(getProducts)
router.route('/:id').delete(protect, admin, deleteProduct)

export default router;