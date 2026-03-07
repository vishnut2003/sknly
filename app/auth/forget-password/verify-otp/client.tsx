'use client';

import AuthLayout from '@/layouts/auth-layout'
import FeaturedImage from "../assets/featured-image.png";
import { useState } from 'react';
import OTPInputElement from '@/components/ui-elements/otp-input';
import { ErrorType } from '@/types/error';
import { handleCatchBlock } from '@/functions/common';
import { ForgetPasswordVerifyOtpApiRequestData } from '@/app/api/forget-password/verify-otp/route';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const ForgetPasswordVerifyOtpClientPage = ({ sendTo }: {
    sendTo: string,
}) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null);

    const [otp, setOtp] = useState<string>("");

    async function handlFormSubmit() {
        setIsLoading(true);
        setError(null);
        try {
            if (otp.length !== 4) {
                throw new Error("OTP is required.")
            }

            const email = searchParams.get("email");
            const phone = searchParams.get("phone");

            if (!email && !phone) {
                throw new Error("Email or Phone is required.")
            }

            const requestData: ForgetPasswordVerifyOtpApiRequestData = {
                otp,
                email: email || undefined,
                phone: phone || undefined,
            }

            const {
                data,
            } = await axios.post<{ verifyCode: string }>(
                "/api/forget-password/verify-otp",
                requestData,
            )

            if (!data.verifyCode) {
                throw new Error("Verify code not found.")
            }

            router.push(`/auth/forget-password/change-password?verifyCode=${data.verifyCode}`);

        } catch (err) {
            const message = handleCatchBlock(err);
            setError(message);
        }
        setIsLoading(false);
    }

    return (
        <AuthLayout
            heading='OTP code verification'
            description={(
                <>An OTP has been sent to <b>{sendTo}</b>. Please verify below</>
            )}
            image={FeaturedImage}
            submit={{
                text: "Continue",
                onClick: handlFormSubmit,
            }}
            afterFormFields={(
                <OTPInputElement
                    onChange={(value) => {
                        setOtp(value)
                    }}
                    value={otp}
                    length={4}
                />
            )}
            error={error}            
            isLoading={isLoading}
        />
    )
}

export default ForgetPasswordVerifyOtpClientPage