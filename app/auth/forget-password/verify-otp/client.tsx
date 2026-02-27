'use client';

import AuthLayout from '@/layouts/auth-layout'
import FeaturedImage from "../assets/featured-image.png";
import { useState } from 'react';
import OTPInputElement from '@/components/ui-elements/otp-input';

const ForgetPasswordVerifyOtpClientPage = ({ sendTo }: {
    sendTo: string,
}) => {

    const [otp, setOtp] = useState<string>("");

    function handlFormSubmit() { }

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
        />
    )
}

export default ForgetPasswordVerifyOtpClientPage