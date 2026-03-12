import { dbConnect } from "@/config/database";
import { compareHashValue } from "@/functions/bcrypt";
import { addUser, AddUserRequestData } from "@/functions/users/add";
import UserModel, { UsersModelInterface } from "@/models/user";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

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

                    // eslint-disable-next-line
                    const data = credentials as any as { requestData: string }

                    if (!data.requestData) {
                        throw new Error("Please add requestData in signing form.")
                    }

                    const body = JSON.parse(data.requestData) as LoginRequestData;

                    await dbConnect();

                    if (body.manual) {

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
                            role: user.role,
                        });

                    }

                    return null;

                } catch (err) {
                    console.error(err);
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile: async (profile: GoogleProfile) => {
                await dbConnect();

                const user = await UserModel.findOne({ email: profile.email }) as UsersModelInterface | null
                console.log("User Data", user);

                if (user) {
                    return ({
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                        role: user.role,
                    })
                } else {

                    const requestData: AddUserRequestData = {
                        name: profile.name,
                        authType: "google",
                        email: profile.email,
                    };

                    await addUser(requestData);

                    const user = await UserModel.findOne({ email: profile.email }) as UsersModelInterface | null;

                    if (!user) {
                        throw new Error("User not found;")
                    }

                    return ({
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                        role: user.role,
                    })

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
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role;
            }

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}