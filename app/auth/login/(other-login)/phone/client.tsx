'use client';

import AuthLayout from "@/layouts/auth-layout";
import { useState } from "react";
import FeaturedImage from "./assets/featured-image.png";

const PhoneLoginClientPage = () => {

    const [phone, setPhone] = useState<string>("");

    function handleFormSubmit () {};

    return (
        <AuthLayout
            heading="Log in with phone number"
            image={FeaturedImage}
            submit={{
                text: "Get OTP",
                onClick: handleFormSubmit,
            }}
            description="Enter your phone number to receive an OTP for quick verification"
            fields={[
                {
                    label: "Phone No:",
                    name: "phone",
                    onChange: (event) => {
                        setPhone(event.target.value);
                    },
                    placeholder: "Enter your phone number",
                    value: phone,
                    type: "text",
                }
            ]}
        />
    )
}

export default PhoneLoginClientPage