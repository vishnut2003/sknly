import React from 'react'

const JoinClubForm = () => {
  return (
    <div>
        <div
            className='flex items-end gap-3'
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
                        <label
                            className='text-[#BA131C] font-semibold w-full'
                        >{field.label}</label>
                        <input
                            className='border-b border-[#BA131C] block w-full'
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