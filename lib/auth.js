import { getServerSession } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "discord") {
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (existingUser) {
          // User already exists, just let them log in
        } else {
          // User does not exist, save them to the database
          await prisma.user.create({
            data: { email: user.email, discordId: profile.id, role: user.role },
          });
        }
      }
      return true; // Return true to successfully complete the sign in
    },
    async session({ session, token, user }) {
      if (user.discordId) {
        session.user.discordId = user.discordId;
        session.user.role = user.role;
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
