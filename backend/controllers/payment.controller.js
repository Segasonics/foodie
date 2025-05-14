import { stripe } from "../utils/stripe.js";

export const createCheckoutSession = async (req, res) => {
    const {priceId}=req.body
    try {
        const session = await stripe.checkout.sessions.create({
            billing_address_collection: 'auto',
            line_items: [
                {
                    price:priceId,
                    quantity: 1,

                },
            ],
            mode: 'subscription',
            success_url: `${process.env.CLIENT_URL}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
            metadata: {
                userId: req.userId._id,
            }
        });

        console.log("session", session);
        res.status(200).json({ id: session.id, })
    } catch (error) {
        console.log("Error processing checkout :", error);
        res.status(500).json({ message: "Error processing checkout :", error: error.message })
    }
}