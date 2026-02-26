'use client';

import AuthLayout from "@/layouts/auth-layout";
import { ChangeEvent, useState } from "react";
import FeaturedImage from "../assets/featured-image.png";

const ChangeUserPasswordPageClient = () => {

    const [formData, setFormData] = useState<{
        password: string,
        repassword: string,
    }>({
        password: "",
        repassword: "",
    });

    function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    function handleFormSubmit() { };

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
        />
    )
}

export default ChangeUserPasswordPageClient