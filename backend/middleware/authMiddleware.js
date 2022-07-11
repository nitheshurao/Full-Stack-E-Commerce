import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";



const protect = asyncHandler(async (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) try {
        console.log("decoded")
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_S)
        console.log(decoded)
        req.user = await User.findById(decoded.id)
        console.log("rU", req.user)
        next()
    } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Not authorized')
    }

    // if ()



})
export { protect }