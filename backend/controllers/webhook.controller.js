import { User } from "../models/user.model.js";
import { stripe } from "../utils/stripe.js";

export const stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('Webhook received:', event.type);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata?.userId;
    console.log("Checkout session completed for user:", userId);

    if (userId) {
      try {
        await User.findByIdAndUpdate(userId, { isSubscribed: true });
        console.log(`Subscription activated for user ${userId}`);
      } catch (err) {
        console.error('Error updating user (checkout.session.completed):', err);
      }
    }
  }

  if (event.type === 'customer.subscription.created') {
    const subscription = event.data.object;
    const customerId = subscription.customer;

    try {
      const customer = await stripe.customers.retrieve(customerId);
      const userId = customer.metadata?.userId;

      if (userId) {
        await User.findByIdAndUpdate(userId, { isSubscribed: true });
        console.log(`Subscription activated via customer.subscription.created for user ${userId}`);
      } else {
        console.warn('No userId in customer metadata');
      }
    } catch (err) {
      console.error('Error updating user (customer.subscription.created):', err);
    }
  }

  res.status(200).json({ received: true });
};