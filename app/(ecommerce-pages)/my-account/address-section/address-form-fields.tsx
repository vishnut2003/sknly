import InputElement from '@/components/ui-elements/input-element';
import React, { ChangeEvent } from 'react'

const AddressFormFields = ({
    onChange,
    value,
}: {
    value: {
        line1: string,
        line2: string,
        city: string,
        pincode: string,
        state: string,
    },
    onChange: {
        line1: (value: string) => void,
        line2: (value: string) => void,
        city: (value: string) => void,
        pincode: (value: string) => void,
        state: (value: string) => void,
    },
}) => {
    return (
        <div
            className='space-y-5'
        >
            {
                [
                    {
                        label: "Address Line 1:",
                        value: value.line1,
                        onChange: (event: ChangeEvent<HTMLInputElement>) => {
                            onChange.line1(event.target.value);
                        },
                        name: "line1",
                    },
                    {
                        label: "Address Line 2:",
                        value: value.line2,
                        onChange: (event: ChangeEvent<HTMLInputElement>) => {
                            onChange.line2(event.target.value);
                        },
                        name: "line2",
                    },
                ].map((field, index) => (
                    <InputElement
                        key={index}
                        label={field.label}
                        name={field.name}
                        value={field.value}
                        onChangeWithEvent={field.onChange}
                        type='text'
                    />
                ))
            }

            <div
                className='grid grid-cols-2 gap-5'
            >
                {
                    [
                        {
                            label: "City",
                            value: value.city,
                            onChange: (event: ChangeEvent<HTMLInputElement>) => {
                                onChange.city(event.target.value);
                            },
                            name: "city",
                        },
                        {
                            label: "Pincode",
                            value: value.pincode,
                            onChange: (event: ChangeEvent<HTMLInputElement>) => {
                                onChange.pincode(event.target.value);
                            },
                            name: "pincode",
                        },
                        {
                            label: "State",
                            value: value.state,
                            onChange: (event: ChangeEvent<HTMLInputElement>) => {
                                onChange.state(event.target.value);
                            }
                        }
                    ].map((field, index) => (
                        <InputElement
                            label={field.label}
                            name={field.name || ""}
                            value={field.value}
                            onChangeWithEvent={field.onChange}
                            type='text'
                            key={index}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default AddressFormFields