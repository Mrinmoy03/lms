import mongoose from "mongoose";

// conntect to the database

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console.log("database connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/lmsdb`)
}

export default connectDB