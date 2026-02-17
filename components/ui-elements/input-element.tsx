'use client';

const InputElement = (data: {
    label: string,
    value: string,
    onChange: (value: string) => void,
    name: string,
}) => {
  return (
    <div
        className="w-full"
    >
        <label
            htmlFor={data.name}
            className="block"
        >{data.label}</label>
        <input
            value={data.value}
            onChange={(event) => {
                data.onChange(event.target.value);
            }}
            className='border-b border-[#BA131C] block w-full outline-none py-3 px-4'
        />
    </div>
  )
}

export default InputElement