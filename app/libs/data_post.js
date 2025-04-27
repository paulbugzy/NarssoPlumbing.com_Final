'use server'
import db from "./db"
import Post from "../models/Post"

export const getPosts = async() => {
    try {
        db.connect()
        const posts = await Post.find({})
        return posts
    } catch (error) {
        throw new Error ("Failed To Get Contacts " + error)
    }
}

export const getPost = async (id) => {
    try {
        db.connect()
        const post = await Post.findById(id)
        return post
    } catch (error) {
        throw new Error ("Failed To Get Post " + error)
    }
}