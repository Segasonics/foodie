import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { checkoutSuccess, createCheckoutSession } from '../controllers/payment.controller.js';

const router =express.Router();

router.route('/create-checkout-session').post(verifyToken,createCheckoutSession)
router.route('/checkout-success').post(verifyToken,checkoutSuccess)


export default router