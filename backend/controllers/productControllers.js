import Product from "../models/productModel.js";
import asyncHandler from 'express-async-handler';


const createProduct = asyncHandler( async (req, res) => {
    const product = new Product({
        user: req.user._id,
        name: "Sample Product",
        price: 0,
        image: "/images/sample.jpg",
        brand: "Sample Brand",
        category: "Sample Category",
        countInStock: 0,
        description: "Sample description",
        });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
})

export default createProduct;