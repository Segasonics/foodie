import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { createCheckoutSession } from '../controllers/payment.controller.js';

const router =express.Router();

router.route('/create-checkout-session').post(verifyToken,createCheckoutSession)


export default router