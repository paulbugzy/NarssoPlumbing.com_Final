'use server'
import Post from "../models/Post"
import db from "./db"
import { revalidatePath } from "next/cache"
import {redirect} from "next/navigation"


export const addPost = async(FormData) => {
    const {title, srcimg, youtubeCode, description, category, tag, blockquoteTitle, blockquoteText, blockquoteSubTitle, title2, subtext2, title3, subtext3} =
    Object.fromEntries(FormData)
    try {
        db.connect()
        const newPost = new Post({
            title, srcimg, youtubeCode, description, category, tag, blockquoteTitle, blockquoteText, blockquoteSubTitle, title2, subtext2, title3, subtext3
        })
        await newPost.save()
    } catch (error) {
        throw new Error ("Failed To Create Post " + error)
    }
    revalidatePath("/")
    redirect("/dashboard/blog")
}
export const updatePost = async(FormData) => {
    const {id, title, srcimg, youtubeCode, category, tag, description, blockquoteTitle, blockquoteText, blockquoteSubTitle, title2, subtext2, title3, subtext3} =
    Object.fromEntries(FormData)
    try {
        db.connect()
        const updateFields = {
            id, title, srcimg, youtubeCode, category, tag, description, blockquoteTitle, blockquoteText, blockquoteSubTitle, title2, subtext2, title3, subtext3
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])
        await Post.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        throw new Error ("Failed To Update Post " + error)
    }
    revalidatePath("/")
    redirect("/dashboard/blog")
}
export const deletePost = async(FormData) => {
    const {id} = Object.fromEntries(FormData)
    try {
        db.connect()
        await Post.findByIdAndDelete(id);
    } catch (error) {
        throw new Error ("Failed To Delete Post " + error)
    }
    revalidatePath("/")
}