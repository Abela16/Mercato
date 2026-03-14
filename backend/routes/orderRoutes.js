import express from 'express';
import {addOrderItems, 
        getOrderById,
        updateOrderToDelivery,
        updateOrderToPaid,
        getMyOrders,
        getOrders
} from '../controllers/orderControllers.js';
import {protect, admin} from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/delivery').put(protect, updateOrderToDelivery)
router.route('/:id/myorders').get(protect, getMyOrders)
router.route('/').get(protect, admin, getOrders)

export default router; 