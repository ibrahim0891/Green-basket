import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            required: true,
        },
        date: {
            day: {
                type: String,
                required: true,
            },
            month: {
                type: String,
                required: true,
            },
        },
        category: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        comments: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

 
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
