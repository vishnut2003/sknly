'use client';

import AuthLayout from "@/layouts/auth-layout";
import FeaturedImage from "./assets/featured-image.png";
import { useState } from "react";

const ForgetPasswordPageClient = () => {
    
    const [emailOrPhone, setEmailOrPassword] = useState<string>("");

    function handlFormSubmit () {}

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
                label: "Email or Phone Number:",
                name: "email",
                onChange: (event) => {
                    setEmailOrPassword(event.target.value);
                },
                placeholder: "Enter your email or phone number",
                value: emailOrPhone,
                type: "text",
            },
        ]}
    />
  )
}

export default ForgetPasswordPageClient