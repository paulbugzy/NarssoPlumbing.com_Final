import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    srcimg: {
        type: String,
        required: false
    },
    youtubeCode: {
        type: String,
        required: false
    },
    description: {
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
    blockquoteTitle: {
        type: String,
        required: false
    },
    blockquoteText: {
        type: String,
        required: false
    },
    blockquoteSubTitle: {
        type: String,
        required: false
    },
    title2: {
        type: String,
        required: false
    },
    subtext2: {
        type: String,
        required: false
    },
    title3: {
        type: String,
        required: false
    },
    subtext3: {
        type: String,
        required: false
    },
}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)