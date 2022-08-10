import express from "express";
import Color from "color";
import dotenv from "dotenv";
import connectDB from './config/db.js'
import product from './data/products.js'
// import product from "./models/productModel.js";
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import ProductRouters from './routes/ProductRoutes.js'
import UserRouter from './routes/UserRoutes.js'
import cors from 'cors'


dotenv.config()
connectDB()




const app = express()
app.use(cors)
app.use(express.json())

app.use('/api/product/', ProductRouters)
app.use('/api/users/', UserRouter)
// app.get('/api/product/', (req, res) => {
//     res.send("API is running--")

//     res.json(product)
//     // const
// })
app.get('/api/product/:id', (req, res) => {
    // console.log("___", req)
    // res.send("API is running--", req)
    const pr = product.find(p => p._id === req.params.id)
    // res.send("API is running--")
    res.json(pr)
    // const
})
app.use(notFound, errorHandler)
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server is running--"))