// routes/authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authController.js'; // Import real functions

const router = express.Router();

// ✅ Use real controller to save to DB
router.post('/register', register);
router.post('/login', login);

// ✅ Test route to check Axios connection
router.get('/test', (req, res) => {
  res.json({ message: '✅ Axios is working properly with backend!' });
});

export default router;


