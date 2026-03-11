'use client';

import { ChangeEvent, HTMLInputTypeAttribute } from "react";

const InputElement = (data: {
    label: string,
    value: string,
    onChange?: (value: string) => void,
    name: string,
    onChangeWithEvent?: (event: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
}) => {
    return (
        <div
            className="w-full"
        >
            <label
                htmlFor={data.name}
                className="block font-semibold text-[15px] md:text-[18px]"
            >{data.label}</label>
            <input
                value={data.value}
                onChange={(event) => {
                    if (data.onChange) {
                        data.onChange(event.target.value);
                    } else if (data.onChangeWithEvent) {
                        data.onChangeWithEvent(event);
                    }
                }}
                placeholder={data.placeholder}
                className='border-b border-[#BA131C] block w-full outline-none py-3 px-4'
                name={data.name}
                type={data.type}
            />
        </div>
    )
}

export default InputElement