'use client';

import { RiArrowLeftLine, RiEyeFill, RiEyeOffFill } from '@remixicon/react';
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation';
import { ChangeEvent, Fragment, HTMLInputTypeAttribute, PropsWithChildren, ReactNode, useState } from 'react'

const AuthLayout = ({
    heading,
    description,
    fields,
    image,
    submit,
    afterContent,
    afterFormFields,
}: PropsWithChildren<{
    heading: string,
    description?: string | ReactNode,
    fields?: {
        name: string,
        label: string,
        placeholder: string,
        value: string,
        onChange: (event: ChangeEvent<HTMLInputElement>) => void,
        type?: HTMLInputTypeAttribute,
        afterContent?: ReactNode,
    }[],
    submit: {
        text: string,
        onClick: () => void,
    },
    afterContent?: ReactNode,
    afterFormFields?: ReactNode,
    image: StaticImageData,
}>) => {

    const router = useRouter();

    return (
        <div
            className='flex items-stretch max-h-screen'
        >
            <div
                className='w-full flex text-[#BA131C] overflow-auto'
            >
                <div
                    className='w-full flex flex-col'
                >

                    <div
                        className='pt-10 pl-10'
                    >
                        <button
                            className='flex items-center gap-2 cursor-pointer'
                            onClick={() => {
                                router.back();
                            }}
                        >
                            <RiArrowLeftLine
                                size={15}
                            />
                            <p>Back</p>
                        </button>
                    </div>

                    <div
                        className='w-full h-full flex items-center justify-center'
                    >
                        <div
                            className='max-w-100 w-full p-3 space-y-10'
                        >
                            <div
                                className='space-y-2'
                            >
                                <h1
                                    className='text-3xl font-glamour'
                                >{heading}</h1>
                                {description && (
                                    <p
                                        className='text-[13px]'
                                    >{description}</p>
                                )}
                            </div>

                            <div
                                className='space-y-5'
                            >

                                <form
                                    className='space-y-5'
                                >
                                    {fields && (
                                        <div
                                            className='space-y-5'
                                        >
                                            {fields.map((field, index) => (
                                                <Fragment
                                                    key={index}
                                                >
                                                    <InputField
                                                        label={field.label}
                                                        name={field.name}
                                                        onChange={field.onChange}
                                                        placeholder={field.placeholder}
                                                        type={field.type || "text"}
                                                        value={field.value}
                                                    />

                                                    {field.afterContent && field.afterContent}
                                                </Fragment>
                                            ))}
                                        </div>
                                    )}

                                    {afterFormFields && (
                                        <div
                                            className='pb-5'
                                        >
                                            {afterFormFields}
                                        </div>
                                    )}

                                    <div>
                                        <button
                                            className='py-4 px-5 w-full bg-[#BA131C] rounded-lg text-white cursor-pointer'
                                        >
                                            {submit.text}
                                        </button>
                                    </div>

                                </form>

                                {afterContent && (
                                    <div>{afterContent}</div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div
                className='w-full'
            >
                <Image
                    alt='featured Image'
                    src={image}
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}

function InputField(props: {
    label: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    type: HTMLInputTypeAttribute,
}) {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div
            className='border-b border-[#BA131CB0]'
        >
            <label
                htmlFor={props.name}
                className='font-bold'
            >{props.label}</label>
            <div
                className='flex items-center'
            >
                <input
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    className='outline-none py-3 text-sm w-full'
                    id={props.name}
                    name={props.name}
                    type={props.type === "password" ? showPassword ? "text" : "password" : props.type}
                />

                {
                    props.type === "password" && (
                        <button
                            type='button'
                            className='cursor-pointer'
                            onClick={() => {
                                setShowPassword(prev => !prev)
                            }}
                        >
                            {showPassword ? (
                                <RiEyeOffFill
                                    size={20}
                                />
                            ) : (
                                <RiEyeFill
                                    size={20}
                                />
                            )}
                        </button>
                    )
                }

            </div>
        </div>
    )
}

export default AuthLayout