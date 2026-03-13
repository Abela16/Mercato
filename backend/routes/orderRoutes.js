import express from 'express';
import {createOrder, 
        getOrderById,
        updateOrderToDelivery,
        updateOrderToPaid,
        getMyOrders,
        getOrders
} from '../controllers/orderControllers.js';
import {protect, admin} from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/').post(protect, createOrder)
router.route('/:id').get(getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/delivery').put(protect, updateOrderToDelivery)
router.route('/:id/myorders').get(protect, getMyOrders)
router.route('/').get(protect, admin, getOrders)

export default router; 