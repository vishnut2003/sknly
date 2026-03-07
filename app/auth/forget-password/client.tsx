'use client';

import AuthLayout from "@/layouts/auth-layout";
import FeaturedImage from "./assets/featured-image.png";
import { useState } from "react";
import { ErrorType } from "@/types/error";
import { handleCatchBlock } from "@/functions/common";
import { ForgetPasswordSendMailApiRequestData } from "@/app/api/forget-password/send-otp/email/route";
import { BackendApiAxio } from "@/config/axios";
import { useRouter } from "next/navigation";

const ForgetPasswordPageClient = () => {

    const router = useRouter();

    const [error, setError] = useState<ErrorType>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");

    async function handlFormSubmit() {
        setIsLoading(true);
        setError(null);
        try {

            if (!email) {
                throw new Error("Email is required.")
            }

            const requestData: ForgetPasswordSendMailApiRequestData = {
                email,
            }

            await BackendApiAxio.post(
                "/api/forget-password/send-otp/email",
                requestData,
            )

            router.push(`/auth/forget-password/verify-otp?email=${email}`);

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    return (
        <AuthLayout
            heading="Forgot Password"
            image={FeaturedImage}
            submit={{
                text: "Get OTP",
                onClick: handlFormSubmit,
            }}
            description="Enter you email or phone number to receive an OTP in the next step to reset your password"
            fields={[
                {
                    label: "Email Address:",
                    name: "email",
                    onChange: (event) => {
                        setEmail(event.target.value);
                    },
                    placeholder: "Enter your Email address",
                    value: email,
                    type: "text",
                },
            ]}
            error={error}
            isLoading={isLoading}
        />
    )
}

export default ForgetPasswordPageClient