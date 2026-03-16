import express from 'express'
import { registerUser, authUser, getProfile, getAllUser} from "../controllers/userControllers.js";
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/register').post(registerUser)
router.post('/login', authUser);
router.get('/profile', protect, getProfile)
router.get('/', protect, admin, getAllUser)

export default router;


















