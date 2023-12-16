import { getServerSession } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/connect";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      scope: "identify email",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
if (account?.provider === "discord") {
        token.discordId = account.providerAccountId;  // Use providerAccountId as the Discord ID
      }
      return token;
    },
    async session({ session, token }) {
      session.user.discordId = token.discordId; 
      return session;
    },
  },
};


export const getAuthSession = () => getServerSession(authOptions);
