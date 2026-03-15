import express from 'express';
import {createProduct, 
        getProducts,
        getProductById,
        deleteProduct,
        updateProduct, } from '../controllers/productControllers.js';
import { protect, admin} from '../middleware/authMiddleware.js';


const router = express.Router()

router.route('/').post(protect, createProduct)
router.route('/:id').get(getProductById)
router.route('/').get(getProducts)
router.route('/:id').delete(protect, admin, deleteProduct)
router.route('/:id/update').put(protect, admin, updateProduct)

export default router;