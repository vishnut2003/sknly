import React from 'react'
import InputElement from '../input-element'

const JoinClubForm = () => {
    return (
        <div>
            <div
                className='flex flex-col md:flex-row items-center md:items-end gap-9 md:gap-3'
            >
                {
                    [
                        {
                            label: "Name:",
                            value: ""
                        },
                        {
                            label: "Email:",
                            value: "",
                        }
                    ].map((field, index) => (
                        <div
                            key={index}
                            className='w-full'
                        >
                            <InputElement
                                label={field.label}
                                name={field.label}
                                value={field.value}
                            />
                        </div>
                    ))
                }

                <button
                    className='outline-button w-50 md:w-100'
                >Join</button>
            </div>
        </div>
    )
}

export default JoinClubForm