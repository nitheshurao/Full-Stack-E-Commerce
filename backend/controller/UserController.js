import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateTogen from '../util/generateToke.js'

// @desc    Auth user and Login 
// @route   POST /api/users/login
// @access  Public
const authUsers = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // res.send({ email, password })

    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateTogen(user.id),
        })
    } else {
        res.status(404)
        throw new Error("invaild user name or password")
    }

})

// @desc    Register a new User
// @route   POST /api/users/
// @access  Public
const registerUsers = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    // res.send({ email, password })

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.send(400)
        throw new Error("User Exists")
    }
    const user = await User.create({
        name, email, password
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateTogen(user.id),
        })
    } else {
        res.status(400)
        throw new Error("invalid Data")
    }

})






// @desc    get user profile
// @route   GET /api/users/profile
// @access  priavte
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)
    // res.send(req.user)
    if (user) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,

        })
    } else {
        res.status(401)
        throw new Error("user not Found")
    }
})
export { authUsers, registerUsers, getUserProfile }

