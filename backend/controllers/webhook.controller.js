import { User } from "../models/user.model.js";
import { stripe } from "../utils/stripe.js";
import {Subscription} from '../models/subscription.model.js'

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

   try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          { expand: ['line_items'] }//line items are items bought bought by the customer
        );
        console.log("session",session)
        const customerId = session.customer;
        const customerDetails = session.customer_details;

        if (customerDetails?.email) {
          let user = await User.findOne({ email: customerDetails.email });
          if (!user) throw new Error('User not found');

          if (!user.customerId) {//if no customer id it means its users first time for subscribing
            user.customerId = customerId;
            await user.save();
          }

          const lineItems = session.line_items?.data || [];

          for (const item of lineItems) {
            const priceId = item.price?.id;
            const isSubscription = item.price?.type === 'recurring';

            if (isSubscription) {
              let endDate = new Date();
              if (priceId === process.env.STRIPE_YEARLY_PRICE_ID) {
                endDate.setFullYear(endDate.getFullYear() + 1);
              }else {
                throw new Error('Invalid priceId');
              }

              await Subscription.findOneAndUpdate(
                { userId: user._id },
                {
                  userId: user._id,
                  startDate: new Date(),
                  endDate,
                  plan: 'premium',
                },
                { upsert: true, new: true }
              );

              user.isSubscribed = true;
              await user.save();
            }
          }
        }
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = await stripe.subscriptions.retrieve(
          event.data.object.id
        );
        const user = await User.findOne({ customerId: subscription.customer });
        if (user) {
          user.isSubscribed = false;
          await user.save();
        } else {
          console.error('User not found for subscription deleted event.');
          throw new Error('User not found for subscription deleted event.');
        }
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error('Error handling event', error);
    return res.status(400).send('Webhook Error');
  }

  res.status(200).json({ received: true });
};