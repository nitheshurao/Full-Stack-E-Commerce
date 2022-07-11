import express from 'express'
import { authUsers, getUserProfile, registerUsers } from '../controller/UserController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()



router.route('/').post(registerUsers)
router.post('/login', authUsers)
router.route('/profile').get(protect, getUserProfile)

// router.get('/:id', getProductById)


export default router