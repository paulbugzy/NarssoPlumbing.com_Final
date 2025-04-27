import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    srcimg: {
        type: String,
        required: false
    },
    srcimg_for_stripe: {
        type: String,
        required: false
    },
    label: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    tag: {
        type: String,
        required: false
    },
    sku: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    price__old: {
        type: Number,
        required: false
    },
    price__new: {
        type: Number,
        required: false
    },
    count: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
}, {timestamps: true})

export default mongoose?.models?.Contact || mongoose.model("Contact", ContactSchema)