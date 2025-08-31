import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { saveEmailToLocalStorage, saveNameToLocalStorage } from "@/app/lib/storage";
import { saveNameEmailToDatabase } from "@/app/lib/saveNameEmail";

let userId="";
let userName="";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        userId = user.id;
        userName = user.name ?? "";
        saveNameEmailToDatabase(user.email!);
        saveNameToLocalStorage(user.name ?? "");
        saveEmailToLocalStorage(user.email ?? "");
        
        token.id = userId;
        token.userName = userName;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
