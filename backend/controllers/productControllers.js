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

const getProducts = asyncHandler ( async (req, res) => {
   const pageSize = 10
   const page = Number(req.query.pageNumber) || 1

   const keyword = req.query.keyword
   ?{
    name: {
        $regex: req.query.keyword,
        $options: 'i',
    }
   }
   :{}

   const count = await Product.countDocuments({ ...keyword})
   const products = await Product.find({ ...keyword})
        .limit(pageSize)
        .skip(pageSize * (page - 1))
    
    res.json({ products, page, pages: Math.ceil(count / pageSize) })
})
export  { createProduct, getProducts};