import { dbConnect } from "@/config/database";
import { compareHashValue } from "@/functions/bcrypt";
import UserModel, { UsersModelInterface } from "@/models/user";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export interface LoginRequestData {
    manual?: {
        email: string,
        password: string,
    },
    phone?: {
        verifyCode: string,
    },
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {

                try {

                    const data = credentials as any as { requestData: string }

                    if (!data.requestData) {
                        throw new Error("Please add requestData in signing form.")
                    }

                    const body = JSON.parse(data.requestData) as LoginRequestData;

                    await dbConnect();

                    if (body.manual) {

                        console.log(body.manual.email)

                        const user = await UserModel.findOne({ email: body.manual.email }) as UsersModelInterface

                        if (!user) {
                            throw new Error("User not found.")
                        }

                        if (!user.password) {
                            throw new Error("Your are trying wrong login method.");
                        }

                        const passwordMatching = await compareHashValue(body.manual.password, user.password);

                        if (!passwordMatching) {
                            throw new Error("Incorrect password.")
                        }

                        return ({
                            id: user._id.toString(),
                            email: user.email,
                            name: user.name,
                        });

                    }

                    return null;

                } catch (err) {
                    console.error(err);
                    return null;
                }
            }
        }),
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