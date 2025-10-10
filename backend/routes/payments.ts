import { Router, Request, Response } from "express";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables");
}

// ⚠️ Using your original API version intentionally
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-09-30.clover",
});

const router = Router();

// Create PaymentIntent
router.post("/create-payment-intent", async (req: Request, res: Response) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency || isNaN(Number(amount))) {
      return res.status(400).json({ error: "Valid amount and currency required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: "Payment processing failed" });
  }
});

export default router;
