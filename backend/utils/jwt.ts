import jwt from "jsonwebtoken";

const ACCESS_EXPIRES_MIN = Number(process.env.ACCESS_TOKEN_EXPIRES_MIN || 15);
const REFRESH_EXPIRES_DAYS = Number(process.env.REFRESH_TOKEN_EXPIRES_DAYS || 30);

export const generateAccessToken = (userId: number) => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET || "access_secret", {
    expiresIn: `${ACCESS_EXPIRES_MIN}m`,
  });
};

export const generateRefreshToken = (userId: number) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET || "refresh_secret", {
    expiresIn: `${REFRESH_EXPIRES_DAYS}d`,
  });
};
