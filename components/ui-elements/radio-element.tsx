import React, { ReactNode } from 'react'

const RadioElement = ({
    children,
    isChecked,
    onChange,
    name,
}: {
    isChecked: boolean,
    onChange: (
        isChecked: boolean,
        name?: string,
    ) => void,
    name?: string,
    children?: ReactNode,
}) => {
    return (
        <button
            className='border-b border-[#BA131C60] flex gap-3 w-full outline-none py-3 pr-4 items-center cursor-pointer'
            onClick={() => {
                onChange(!isChecked, name);
            }}
        >
            <div
                className='border border-[#BA131C] p-0.5 w-4 h-4 rounded-full shrink-0'
            >
                {isChecked && (
                    <div
                        className='w-full h-full bg-[#BA131C] rounded-full'
                    />
                )}
            </div>

            <div
                className='w-full text-left'
            >
                {children}
            </div>

        </button>
    )
}

export default RadioElement