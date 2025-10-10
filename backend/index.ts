import path from "path";
import dotenv from "dotenv";

// ✅ Load environment variables early and from the correct root
const envPath = path.resolve(process.cwd(), ".env");
dotenv.config({ path: envPath });

import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

// ✅ Import routes *after* env is loaded
import paymentRoutes from "./routes/payments";
import authRoutes from "./routes/auth";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/", (_, res) => {
  res.json({ status: "ok", message: "Backend is running 🚀" });
});

// Routes
app.use("/api/payments", paymentRoutes);
app.use("/api", authRoutes);

// Global error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌿 Environment loaded from: ${envPath}`);
  console.log(`🔐 Stripe key exists: ${!!process.env.STRIPE_SECRET_KEY}`);
});
