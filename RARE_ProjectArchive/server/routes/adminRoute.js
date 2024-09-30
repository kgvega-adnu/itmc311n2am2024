import express from 'express';
import { register, login, logout } from '../controller/adminController.js';

const router = express.Router();

// register
router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;