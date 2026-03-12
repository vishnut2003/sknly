'use client';

import AuthLayout from '@/layouts/auth-layout'
import FeaturedImage from "./assets/featured-image-new.jpg";
import FeaturedImageMobile from "./assets/featured-image-mobile.jpg";
import { useEffect, useState } from 'react';
import { RiGoogleFill } from '@remixicon/react';
import Link from 'next/link';
import { ErrorType } from '@/types/error';
import { handleCatchBlock } from '@/functions/common';
import { SignupUserApiRequestData } from '@/app/api/users/sign-up/route';
import { BackendApiAxio } from '@/config/axios';
import { signIn } from 'next-auth/react';
import { LoginRequestData } from '@/app/api/auth/[...nextauth]/authOptions';
import { useSearchParams } from 'next/navigation';

const SignUpPageClient = () => {

    const searchParams = useSearchParams();

    const [error, setError] = useState<ErrorType>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [submitButtonText, setSubmitButtonText] = useState<"Sign up" | "Creating User..." | "Logging you in...">("Sign up");

    const [formData, setFormData] = useState<{
        name: string,
        email: string,
        phone: string,
        password: string,
        repassword: string,
    }>({
        email: "",
        name: "",
        password: "",
        phone: "",
        repassword: "",
    });

    async function handleFormSubmit() {
        setIsLoading(true);
        setError(null);
        try {

            if (formData.password !== formData.repassword) {
                throw new Error("Password is not matching.")
            }

            const requestData: SignupUserApiRequestData = {
                authType: "manual",
                password: formData.password,
                email: formData.email,
                name: formData.name,
                phone: formData.phone,
            }

            setSubmitButtonText("Creating User...");
            await BackendApiAxio.post(
                "/api/users/sign-up",
                requestData,
            );

            setSubmitButtonText("Logging you in...");

            const LoginRequestData: LoginRequestData = {
                manual: {
                    email: formData.email,
                    password: formData.password,
                },
            }

            await signIn(
                "credentials",
                {
                    requestData: JSON.stringify(LoginRequestData),
                }
            );

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }

        setSubmitButtonText("Sign up");
        setIsLoading(false);
    };

    useEffect(() => {
        const name = searchParams.get("name");
        const email = searchParams.get("email");

        if (name) {
            setFormData(prev => ({
                ...prev,
                name,
            }));
        }

        if (email) {
            setFormData(prev => ({
                ...prev,
                email,
            }))
        }

    }, [searchParams])

    return (
        <AuthLayout
            heading='Welcome to sknly.'
            image={FeaturedImage}
            imageMobile={FeaturedImageMobile}
            submit={{
                text: submitButtonText,
                onClick: handleFormSubmit,
            }}
            fields={[
                {
                    label: "Name:",
                    name: "name",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            name: event.target.value.trim(),
                        }))
                    },
                    placeholder: "Enter your full name",
                    value: formData.name,
                    type: "text",
                },
                {
                    label: "Email:",
                    name: "email",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            email: event.target.value.trim(),
                        }))
                    },
                    placeholder: "Enter your email",
                    value: formData.email,
                    type: "email",
                },
                {
                    label: "Phone:",
                    name: "phone",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            phone: event.target.value.trim(),
                        }))
                    },
                    placeholder: "Enter your phone number",
                    value: formData.phone,
                    type: "text",
                },
                {
                    label: "Create Password:",
                    name: "password",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            password: event.target.value.trim(),
                        }))
                    },
                    placeholder: "Create a password",
                    value: formData.password,
                    type: "password"
                },
                {
                    label: "Confirm Password:",
                    name: "repassword",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            repassword: event.target.value.trim(),
                        }))
                    },
                    placeholder: "Create a password",
                    value: formData.repassword,
                    type: "password",
                    afterContent: (
                        <p
                            className='text-xs'
                        >Must be at least 8 characters</p>
                    )
                },
            ]}
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
                    >Already have an account? <Link href={"/auth/login"} className="underline text-[#0A47FF]">Log in</Link></p>

                </div>
            )}
            error={error}
            isLoading={isLoading}
        />
    )
}

export default SignUpPageClient