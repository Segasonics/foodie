import { stripe } from "../utils/stripe.js";

export const createCheckoutSession = async (req, res) => {
    const { priceId } = req.body
    console.log("req.userId",req.userId)
    try {
        const session = await stripe.checkout.sessions.create({
            billing_address_collection: 'auto',
            line_items: [
                {
                    price: priceId,
                    quantity: 1,

                },
            ],
            mode: 'subscription',
            success_url: `${process.env.FRONTEND_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}?canceled=true`,
            metadata: {
                userId: req.userId.toString(),
                plan:'1-year-plan'
            }
        });

        console.log("session", session);
        res.status(200).json({ id: session.id, })
    } catch (error) {
        console.log("Error processing checkout :", error);
        res.status(500).json({ message: "Error processing checkout :", error: error.message })
    }
}

export const checkoutSuccess = async (req, res) => {
    const { sessionId } = req.body;
    console.log(sessionId)
    if (!sessionId) {
        return res.status(400).json({ success: false, message: "Session ID is required." });
    }
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        res.status(200).json({
            success: true,
            sessions: session.metadata,
            message: "Payment successful, order created, and coupon deactivated if used.",
        })
    } catch (error) {
        console.log("Error processing successful checkout:", error);
        res.status(500).json({ message: "Error processing successful checkout", error: error.message });
    }
}