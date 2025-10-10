import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Called whenever session is checked
    async session({ session, token }) {
      return session;
    },
    async signIn({ user }) {
      // Allow sign in
      return true;
    },
  },
  events: {
    async signIn({ user }) {
      // On sign-in, send user info to Express backend to create tokens
      try {
        await fetch(`${process.env.BACKEND_URL}/auth/oauth-signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // ensures refresh token cookie is set
          body: JSON.stringify({
            email: user.email,
            name: user.name,
          }),
        });
      } catch (err) {
        console.error("Error calling backend /auth/oauth-signin:", err);
      }
    },
  },
});

export { handler as GET, handler as POST };
