import { User } from "../models/user.model.js";
import { stripe } from "../utils/stripe.js";

export const stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  console.log("Stripe Signature:", sig);
  console.log("Raw Body:", req.body);
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  console.log('Webhook received:', event.type);
  // Handle checkout.session.completed
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log("Checkout session completed:", session);
    try {
      const userId = session.metadata.userId;

      await User.findByIdAndUpdate(userId, {
        isSubscribed: true,
      });

      console.log(`Subscription activated for user ${userId}`);
    } catch (err) {
      console.error('Error updating user subscription:', err);
    }
  }

  res.status(200).json({ received: true });
};
