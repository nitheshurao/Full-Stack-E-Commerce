import express from "express";
import Color from "color";
import dotenv from "dotenv";
import product from './date/products.js'


dotenv.config()




const app = express()

app.use(express.json())

app.get('/api/product/', (req, res) => {
    // res.send("API is running--")
    res.json(product)
    // const
})
app.get('/api/product/:id', (req, res) => {
    // console.log("___", req)
    // res.send("API is running--", req)
    const pr = product.find(p => p._id === req.params.id)
    // res.send("API is running--")
    res.json(pr)
    // const
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server is running--"))