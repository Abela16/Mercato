import Product from "../models/productModel.js";
import asyncHandler from 'express-async-handler';


export const createProduct = asyncHandler( async (req, res) => {
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

export const getProducts = asyncHandler ( async (req, res) => {
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

export const getProductById = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404).json({message: "product not found"})
    }
})


export const deleteProduct = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
     await Product.deleteOne()
     res.json({message: "product removed"})   
    }else{
        res.status(404).json("product not found")
    }
})

export const updateProduct = asyncHandler( async (req, res) => {
    const {name, price, image, brand, category, countInStock, description} = req.body;

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name;
        product.price = price;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        product.description = description;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    }else{
        res.status(404).json({message: "product not found"})
    }
})

export const getTopProduct = asyncHandler( async (req, res) => {

    const products = await Product.find({}).sort({ rating: -1 }).limit(3);

    res.json(products);
})