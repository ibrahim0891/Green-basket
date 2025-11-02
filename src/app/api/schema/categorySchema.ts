import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        id: {
            type: String,  
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        productCount: {
            type: Number,
            default: 0,
        },
        image: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
 
export default mongoose.models.Category ||
    mongoose.model("category", CategorySchema);
