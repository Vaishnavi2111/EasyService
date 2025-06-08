/*const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;*/

// routes/authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authController.js'; // ✅ Import real functions

const router = express.Router();

// ✅ Use real controller to save to DB
router.post('/register', register);
router.post('/login', login);

export default router;


