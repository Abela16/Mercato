import express from 'express';
import {createProduct, getProducts} from '../controllers/productControllers.js';
import { protect} from '../middleware/authMiddleware.js';


const router = express.Router()

router.route('/').post(protect, createProduct)
router.route('/products').get(getProducts)

export default router;