import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'

// initialize express

const app =  express()

// connect db
await connectDB()

// middlewares

app.use(cors())

// routes

app.get('/', (req, res)=>  res.send("API WORKING"))


// port

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})