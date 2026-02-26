import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email/Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async () => {

                try {

                    return null;

                } catch (err) {
                    console.error(err);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/login",
    },
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            // Runs at login
            if (user) {
                token.id = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}