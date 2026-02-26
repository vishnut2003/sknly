'use client';

import AuthLayout from '@/layouts/auth-layout'
import InnerPagesLayout from '@/layouts/inner-pages-layout'
import FeaturedImage from "./assets/featured-image.png";
import { useState } from 'react';
import { RiAppleFill, RiFacebookCircleFill, RiGoogleFill, RiPhoneFill } from '@remixicon/react';
import Link from 'next/link';

const SignUpPageClient = () => {

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

    function handleFormSubmit() { };

    return (
        <AuthLayout
            heading='Welcome to sknly.'
            image={FeaturedImage}
            submit={{
                text: "Sign up",
                onClick: handleFormSubmit,
            }}
            fields={[
                {
                    label: "Name:",
                    name: "name",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            name: event.target.value,
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
                            email: event.target.value,
                        }))
                    },
                    placeholder: "Enter your email",
                    value: formData.email,
                    type: "email",
                },
                {
                    label: "Create Password:",
                    name: "password",
                    onChange: (event) => {
                        setFormData(prev => ({
                            ...prev,
                            password: event.target.value,
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
                            repassword: event.target.value,
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
                    >Already have an account? <Link href={"/auth/login"} className="underline text-[#0A47FF]">Log in</Link></p>

                </div>
            )}
        />
    )
}

export default SignUpPageClient