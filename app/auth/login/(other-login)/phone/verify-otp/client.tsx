'use client';

import AuthLayout from "@/layouts/auth-layout";
import { useState } from "react";
import FeaturedImage from "../assets/featured-image.png";
import OTPInputElement from "@/components/ui-elements/otp-input";

const VerifyPhoneLoginOtpClientPage = ({ phone }: {
    phone: string,
}) => {

    const [otp, setOtp] = useState<string>("");

    function handleFormSubmit() { };

    return (
        <AuthLayout
            heading="OTP code verification"
            image={FeaturedImage}
            submit={{
                text: "Continue",
                onClick: handleFormSubmit,
            }}
            description={(
                <>An OTP has been sent to {phone}. Please verify below:</>
            )}
            afterFormFields={(
                <OTPInputElement
                    onChange={(value) => {
                        setOtp(value)
                    }}
                    value={otp}
                    length={4}
                />
            )}
        />
    )
}

export default VerifyPhoneLoginOtpClientPage