import express from 'express';
import {createOrder, 
        getOrderById,
        updateOrderToDelivery,
        updateOrderToPaid,
} from '../controllers/orderControllers.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/').post(protect, createOrder)
router.route('/:id').get(getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/delvery').put(protect, updateOrderToDelivery)

export default router; 