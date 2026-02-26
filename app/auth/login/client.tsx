'use client';

import AuthLayout from "@/layouts/auth-layout";
import Link from "next/link";
import { useState } from "react";
import FeaturedImage from "./assets/featured-image.png";
import { RiAppleFill, RiFacebookCircleFill, RiGoogleFill, RiPhoneFill } from "@remixicon/react";

const LoginPageClientSide = () => {

    const [formData, setFormData] = useState<{
        email: string,
        password: string,
    }>({
        email: "",
        password: "",
    })

    function handleFormSubmit() { }

    return (
        <AuthLayout
            heading='Log in to your account'
            submit={{
                text: "Log in",
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
                                        onClick: () => { },
                                    },
                                    {
                                        icon: RiPhoneFill,
                                        onClick: () => { },
                                    },
                                    {
                                        icon: RiAppleFill,
                                        onClick: () => { },
                                    },
                                    {
                                        icon: RiFacebookCircleFill,
                                        onClick: () => { },
                                    }
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#BA131C] text-white"
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
                    >No account? No worries! <Link href={"/auth/sign-up"} className="underline text-[#0A47FF]">Sign up</Link> or <Link href={"/"} className="underline text-[#0A47FF]">Continue as Guest</Link> </p>

                </div>
            )}
        >
            Content
        </AuthLayout>
    )
}

export default LoginPageClientSide