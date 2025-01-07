import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://siderashe:Siderashe123@cluster0.pnadl.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}