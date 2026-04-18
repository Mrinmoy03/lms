import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import User from './modles/user.js'

// initialize express

const app =  express()

app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  },
}))

// connect db
await connectDB()

// middlewares

app.use(cors())

// routes

app.post('/webhooks/clerk', clerkWebhooks)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
app.get('/', (req, res)=>  res.send("API WORKING"))


// port

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})