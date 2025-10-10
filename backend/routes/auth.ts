import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

const REFRESH_COOKIE = process.env.REFRESH_TOKEN_COOKIE_NAME || "refresh_token";
const ACCESS_EXPIRES_MIN = Number(process.env.ACCESS_TOKEN_EXPIRES_MIN || 15);
const REFRESH_EXPIRES_DAYS = Number(process.env.REFRESH_TOKEN_EXPIRES_DAYS || 30);

// ---------------------------
// Helper functions
// ---------------------------
const generateAccessToken = (userId: number) =>
  jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET || "access_secret", {
    expiresIn: `${ACCESS_EXPIRES_MIN}m`,
  });

const generateRefreshToken = (userId: number) =>
  jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET || "refresh_secret", {
    expiresIn: `${REFRESH_EXPIRES_DAYS}d`,
  });

// ---------------------------
// Routes
// ---------------------------

// Sign-In (password-based)
router.post("/auth/sso-signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  try {
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await prisma.user.create({
        data: { name: "", email, password: hashedPassword },
      });
    }

    if (!user.password || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    res.cookie(REFRESH_COOKIE, refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: REFRESH_EXPIRES_DAYS * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// OAuth-friendly SSO (no password)
router.post("/auth/oauth-signin", async (req: Request, res: Response) => {
  const { email, name } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  try {
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({ data: { email, name: name || "" } });
    }

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    res.cookie(REFRESH_COOKIE, refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: REFRESH_EXPIRES_DAYS * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Refresh token
router.post("/auth/refresh", (req: Request, res: Response) => {
  const token = req.cookies?.[REFRESH_COOKIE];
  if (!token) return res.status(401).json({ message: "No refresh token" });

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET || "refresh_secret"
    ) as any;
    const accessToken = generateAccessToken(payload.userId);
    res.json({ accessToken });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Invalid refresh token" });
  }
});

// Logout
router.post("/auth/logout", (_req: Request, res: Response) => {
  res.clearCookie(REFRESH_COOKIE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.json({ message: "Logged out" });
});

export default router;
