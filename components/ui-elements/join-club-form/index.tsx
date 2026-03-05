import React from 'react'
import InputElement from '../input-element'

const JoinClubForm = () => {
    return (
        <div>
            <div
                className='flex flex-col md:flex-row items-center md:items-end gap-3'
            >
                {
                    [
                        {
                            label: "Name",
                            value: ""
                        },
                        {
                            label: "Email",
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
                    className='outline-button'
                >Join</button>
            </div>
        </div>
    )
}

export default JoinClubForm