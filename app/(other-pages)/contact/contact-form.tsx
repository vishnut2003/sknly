'use client';

import InputElement from "@/components/ui-elements/input-element";
import { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState<{
        fname: string,
        lname: string,
        email: string,
        phone: string,
        message: string,
    }>({
        email: "",
        fname: "",
        lname: "",
        message: "",
        phone: "",
    });

    const fieldsData: {
        label: string,
        value: string,
        name: string,
        required: boolean,
    }[] = [
            {
                label: "First Name*",
                value: formData.fname,
                name: "fname",
                required: true,
            },
            {
                label: "Last Name",
                value: formData.message,
                name: "lname",
                required: false,
            },
            {
                label: "Email*",
                name: "email",
                required: true,
                value: formData.email,
            },
            {
                label: "Phone*",
                name: "phone",
                required: true,
                value: formData.phone,
            },
            {
                label: "Enter your message",
                name: "message",
                required: false,
                value: formData.message,
            },
        ]

    return (
        <form>
            <div
                className="grid grid-cols-2 gap-7"
            >
                {fieldsData.map((field, index) => {
                    if ((fieldsData.length - 1) !== index) {
                        return (
                            <div
                                key={index}
                            >
                                <InputElement
                                    label={field.label}
                                    name={field.name}
                                    value={field.value}
                                    onChangeWithEvent={(event) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            [event.target.name]: event.target.value,
                                        }))
                                    }}
                                />
                            </div>
                        )
                    } else {
                        return (
                            <div
                                className="col-span-2 flex flex-col gap-3"
                                key={index}
                            >
                                <label
                                    htmlFor={field.name}
                                    className="font-semibold"
                                >{field.label}</label>
                                <textarea
                                    className="border w-full outline-none p-4"
                                    id={field.name}
                                    value={field.value}
                                    required={field.required}
                                    rows={6}
                                ></textarea>
                            </div>
                        )
                    }
                })}

                <div
                    className="flex items-center justify-center col-span-2"
                >
                    <button
                        className="outline-button py-3! px-16! rounded-none!"
                    >Submit</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm