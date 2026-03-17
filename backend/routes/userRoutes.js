import express from 'express'
import { registerUser, 
         authUser, 
         getProfile, 
         getAllUser, 
         updateUserProfile,
         getUserById,
        } from "../controllers/userControllers.js";
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/register').post(registerUser)
router.post('/login', authUser);
router.get('/profile', protect, getProfile)
router.get('/', protect, admin, getAllUser)
router.post('/:id/update', protect, updateUserProfile)
router.get('/:id', getUserById)


export default router;

