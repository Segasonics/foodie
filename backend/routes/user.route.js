import express from "express";
import { checkAuth, forgotPassword, login, logout, resetPassword, signup, verifyEmail } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router =express.Router()

router.route('/check-auth').get(verifyToken,checkAuth)
router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').post(logout)

router.route('/verify-email').post(verifyEmail)
router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password/:token').post(resetPassword)
export default router