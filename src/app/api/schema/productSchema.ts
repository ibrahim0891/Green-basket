import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        oldPrice: {
            type: Number,
        },
        discount: {
            type: String, 
        },
        stockStatus: {
            type: String,
            enum: ["In Stock", "Out of Stock"],
            default: "In Stock",
        },
        brand: {
            type: String,
        },
        categoryId: {
            type: Number,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        reviews: {
            type: Number,
            default: 0,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);
