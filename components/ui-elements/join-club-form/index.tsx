import React, { useState } from 'react'
import InputElement from '../input-element'
import { useRouter } from 'next/navigation';

const JoinClubForm = () => {

    const router = useRouter();

    const [formData, setFormData] = useState<{
        name: string,
        email: string,
    }>({
        email: "",
        name: "",
    });

    function onSubmit() {
        const url = `/auth/sign-up?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`;
        router.push(url);
    }

    return (
        <div>
            <div
                className='flex flex-col md:flex-row items-center md:items-end gap-9 md:gap-3'
            >
                {
                    [
                        {
                            label: "Name:",
                            value: formData.name,
                            name: "name",
                        },
                        {
                            label: "Email:",
                            value: formData.email,
                            name: "email",
                        },
                    ].map((field, index) => (
                        <div
                            key={index}
                            className='w-full'
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
                    ))
                }

                <button
                    className='outline-button w-50 md:w-100'
                    onClick={onSubmit}
                >Join</button>
            </div>
        </div>
    )
}

export default JoinClubForm