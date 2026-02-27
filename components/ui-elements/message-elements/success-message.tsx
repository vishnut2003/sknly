import { RiCheckboxCircleFill } from '@remixicon/react'
import React from 'react'

const SuccessMessageElement = ({
    text
}: {
    text: string,
}) => {
    return (
        <div
            className='flex items-start gap-3 bg-green-200 py-2 px-3 rounded-lg shadow-sm'
        >
            <RiCheckboxCircleFill
                size={20}
                className='relative top-0.5'
            />
            <p>{text}</p>
        </div>
    )
}

export default SuccessMessageElement