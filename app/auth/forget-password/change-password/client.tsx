'use client';

import AuthLayout from "@/layouts/auth-layout";
import { ChangeEvent, useState } from "react";
import FeaturedImage from "../assets/featured-image.png";
import { ErrorType } from "@/types/error";
import { handleCatchBlock } from "@/functions/common";
import { ForgetPasswordChangePasswordApiRequestData } from "@/app/api/forget-password/change-password/route";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const ChangeUserPasswordPageClient = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [formData, setFormData] = useState<{
        password: string,
        repassword: string,
    }>({
        password: "",
        repassword: "",
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    async function handleFormSubmit() {
        setIsLoading(true);
        setError(null);
        try {

            if (formData.password.trim() !== formData.repassword.trim()) {
                throw new Error("Password is not matching.")
            }

            if (!formData.password) {
                throw new Error("New password is required.")
            }

            const verifyCode = searchParams.get("verifyCode");

            if (!verifyCode) {
                throw new Error("verifyCode is required.")
            }

            const requestData: ForgetPasswordChangePasswordApiRequestData = {
                password: formData.password,
                verifyCode,
            }

            await axios.post(
                '/api/forget-password/change-password',
                requestData,
            );

            router.push("/auth/login");

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    };

    return (
        <AuthLayout
            heading="Create new password"
            image={FeaturedImage}
            submit={{
                text: "Reset Password",
                onClick: handleFormSubmit,
            }}
            description={"Your new password must be different from your previous used passwords and must be at least 8 characters"}
            fields={[
                {
                    label: "New password:",
                    name: "password",
                    onChange: handleInputChange,
                    placeholder: "Enter your new password",
                    value: formData.password,
                    type: "password",
                },
                {
                    label: "Confirm Password:",
                    name: "repassword",
                    onChange: handleInputChange,
                    placeholder: 'Re-enter the new password',
                    value: formData.repassword,
                    type: "password",
                },
            ]}
            error={error}
            isLoading={isLoading}
        />
    )
}

export default ChangeUserPasswordPageClient