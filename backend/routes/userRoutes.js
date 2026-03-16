import express from 'express'
import { registerUser, 
         authUser, 
         getProfile, 
         getAllUser, 
         updateUserProfile} from "../controllers/userControllers.js";
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/register').post(registerUser)
router.post('/login', authUser);
router.get('/profile', protect, getProfile)
router.get('/', protect, admin, getAllUser)
router.post('/:id/update', protect, updateUserProfile)

export default router;


















