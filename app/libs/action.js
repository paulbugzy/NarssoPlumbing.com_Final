'use server'
import Contact from "../models/Contact"
import db from "./db"
import { revalidatePath } from "next/cache"
import {redirect} from "next/navigation"


export const addContact = async(FormData) => {
    const {title, srcimg, srcimg_for_stripe, label, category, tag, sku, rating, price, price__old, price__new, count, description} =
    Object.fromEntries(FormData)
    try {
        db.connect()
        const newContact = new Contact({
            title, srcimg, srcimg_for_stripe, label, category, tag, sku, rating, price, price__old, price__new, count, description
        })
        await newContact.save()
    } catch (error) {
        throw new Error ("Failed To Create Contact " + error)
    }
    revalidatePath("/")
    redirect("/dashboard/products")
}
export const updateContact = async(FormData) => {
    const {id, title, srcimg, srcimg_for_stripe, label, category, tag, sku, rating, price, price__old, price__new, count, description} =
    Object.fromEntries(FormData)
    try {
        db.connect()
        const updateFields = {
            title, srcimg, srcimg_for_stripe, label, category, tag, sku, rating, price, price__old, price__new, count, description
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])
        await Contact.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        throw new Error ("Failed To Update Contact " + error)
    }
    revalidatePath("/")
    redirect("/dashboard/products")
}
export const deleteContact = async(FormData) => {
    const {id} = Object.fromEntries(FormData)
    try {
        db.connect()
        await Contact.findByIdAndDelete(id);
    } catch (error) {
        throw new Error ("Failed To Delete Contact " + error)
    }
    revalidatePath("/")
}
