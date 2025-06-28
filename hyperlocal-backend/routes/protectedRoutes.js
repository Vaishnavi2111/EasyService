import express from 'express';
import { authenticate, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected route accessed!', user: req.user });
});

export default router;
