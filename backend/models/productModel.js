import mongoose from 'mongoose';

export const productSchema = mongoose.Schema({
        name:{
            type: String,
            required: true,
        },
        describtion:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true
        },
        image:{
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        countInStock: {
            type: Number,
            required: true,
        },

    }, {
        timestamps: true
})

export default mongoose.model('Product', productSchema)


