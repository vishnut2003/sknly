'use client';

import { ChangeEvent } from "react";

const InputElement = (data: {
    label: string,
    value: string,
    onChange?: (value: string) => void,
    name: string,
    onChangeWithEvent?: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div
            className="w-full"
        >
            <label
                htmlFor={data.name}
                className="block font-semibold"
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
                className='border-b border-[#BA131C60] block w-full outline-none py-3 px-4'
                name={data.name}
            />
        </div>
    )
}

export default InputElement