# Backend (Express + Stripe)

## Setup
1. cd backend
2. npm install
3. Create .env with:
   - PORT=5000
   - STRIPE_SECRET_KEY=sk_test_xxxx
   - STRIPE_PUBLISHABLE_KEY=pk_test_xxxx
4. Run locally:
   npm run dev

## Endpoints
- GET / → Health check
- POST /api/payments/create-payment-intent
- POST /api/payments/checkout-session