'use client';

import AuthLayout from "@/layouts/auth-layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import FeaturedImage from "./assets/featured-image-new.jpg";
import featuredImageMobile from "./assets/featured-image-mobile.jpg";
import { RiAppleFill, RiFacebookCircleFill, RiGoogleFill, RiPhoneFill } from "@remixicon/react";
import { ErrorType } from "@/types/error";
import { handleCatchBlock } from "@/functions/common";
import { signIn } from "next-auth/react";
import { LoginRequestData } from "@/app/api/auth/[...nextauth]/authOptions";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPageClientSide = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [error, setError] = useState<ErrorType>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState<{
        email: string,
        password: string,
    }>({
        email: "",
        password: "",
    })


    useEffect(() => {
        const error = searchParams.get("error");

        if (error) {
            setError("Login Failed.")
        }

    }, [searchParams])

    async function handleFormSubmit() {
        setIsLoading(true);
        setError(null);
        try {

            if (!formData.email || !formData.password) {
                throw new Error("Please fill the required fields.")
            }

            const requestData: LoginRequestData = {
                manual: formData,
            }

            await signIn(
                "credentials",
                {
                    requestData: JSON.stringify(requestData),
                },
            )

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    return (
        <AuthLayout
            heading='Log in to your account'
            submit={{
                text: isLoading ? "Logging you in..." : "Log in",
                onClick: handleFormSubmit,
            }}
            fields={[
                {
                    label: "Email:",
                    name: "email",
                    placeholder: "Enter your email",
                    value: formData.email,
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            email: event.target.value,
                        }))
                    },
                    type: "email",
                },
                {
                    label: "Password:",
                    name: "password",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            password: event.target.value,
                        }))
                    },
                    placeholder: "Enter your password",
                    value: formData.password,
                    type: "password",
                    afterContent: (
                        <div
                            className="flex justify-end"
                        >
                            <Link
                                href={"/auth/forget-password"}
                                className="text-sm font-semibold underline"
                            >Forgot Password?</Link>
                        </div>
                    ),
                }
            ]}
            image={FeaturedImage}
            imageMobile={featuredImageMobile}
            afterContent={(
                <div
                    className="space-y-10"
                >
                    <div
                        className="space-y-5"
                    >
                        <div
                            className="flex items-center gap-3"
                        >
                            <div
                                className="w-full border-t opacity-30"
                            ></div>
                            <p
                                className="text-sm font-medium min-w-max"
                            >or continue with</p>
                            <div
                                className="w-full border-t opacity-30"
                            ></div>
                        </div>

                        <div
                            className="flex items-center gap-4 justify-center"
                        >
                            {
                                [
                                    {
                                        icon: RiGoogleFill,
                                        onClick: () => {
                                            signIn("google");
                                        },
                                    },
                                    // {
                                    //     icon: RiPhoneFill,
                                    //     onClick: () => { },
                                    // },
                                    // {
                                    //     icon: RiAppleFill,
                                    //     onClick: () => { },
                                    // },
                                    // {
                                    //     icon: RiFacebookCircleFill,
                                    //     onClick: () => { },
                                    // }
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#BA131C] text-white cursor-pointer"
                                        onClick={action.onClick}
                                    >
                                        <action.icon
                                            size={15}
                                        />
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <p
                        className="text-sm text-center"
                    >No account? No worries! <Link href={"/auth/sign-up"} className="underline text-[#0A47FF]">Sign up</Link> or <button onClick={() => {
                        localStorage.setItem("isGuest", "yes");
                        router.push("/");
                    }} className="underline text-[#0A47FF] cursor-pointer">Continue as Guest</button> </p>

                </div>
            )}
            error={error}
            isLoading={isLoading}
        >
            Content
        </AuthLayout>
    )
}

export default LoginPageClientSide