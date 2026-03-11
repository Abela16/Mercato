import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

const createOrder = asyncHandler( async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if (!orderItems || orderItems.length === 0) {
        res.status(400).json({ message: "No order items" })

    }else{
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
    const creatOrder = await order.save()

    res.status(201).json(creatOrder)
    }

})

export default createOrder;