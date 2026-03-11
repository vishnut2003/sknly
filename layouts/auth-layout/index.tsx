'use client';

import ErrorMessageElement from '@/components/ui-elements/message-elements/error-message';
import { ErrorType } from '@/types/error';
import { RiArrowLeftLine, RiEyeFill, RiEyeOffFill, RiLoaderLine } from '@remixicon/react';
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation';
import { ChangeEvent, Fragment, HTMLInputTypeAttribute, PropsWithChildren, ReactNode, useState } from 'react'
import MobileBannerImage from "./assets/mobile-banner-image.png";
import { useIsMobile } from '@/hooks/use-mobile';

const AuthLayout = ({
    heading,
    description,
    fields,
    image,
    submit,
    afterContent,
    afterFormFields,
    error,
    isLoading,
    imageMobile,    
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
    error?: ErrorType,
    isLoading?: boolean,
    image: StaticImageData,
    imageMobile?: StaticImageData,
}>) => {

    const router = useRouter();
    const isMobile = useIsMobile();

    return (
        <div
            className='flex flex-col-reverse md:flex-row items-stretch md:min-h-screen md:max-h-screen'
        >
            <div
                className='w-full flex text-[#BA131C] md:overflow-auto'
            >
                <div
                    className='w-full flex flex-col gap-5 md:gap-0'
                >

                    <div
                        className='pt-10 pl-5 md:pl-10'
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
                                className='space-y-5 pb-10 md:pb-0'
                            >

                                <form
                                    className='space-y-5'
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        submit.onClick();
                                    }}
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
                                                        disable={isLoading ? true : false}
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

                                    {error && (
                                        <ErrorMessageElement
                                            text={error}
                                        />
                                    )}

                                    <div>
                                        <button
                                            className='py-4 px-5 w-full bg-[#BA131C] rounded-lg text-white cursor-pointer flex items-center justify-center gap-3 font-semibold'
                                        >
                                            {isLoading && (
                                                <RiLoaderLine
                                                    size={20}
                                                    className='shrink-0 animate-spin'
                                                />
                                            )}
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
                className='w-full max-h-80 md:max-h-none overflow-hidden'
            >
                <Image
                    alt='featured Image'
                    src={isMobile && imageMobile ? imageMobile : isMobile ? MobileBannerImage : image}
                    className='w-full h-full object-cover object-center relative md:static bottom-20'
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
    disable: boolean,
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
                    className='outline-none py-3 text-sm w-full disabled:opacity-40'
                    id={props.name}
                    name={props.name}
                    type={props.type === "password" ? showPassword ? "text" : "password" : props.type}
                    disabled={props.disable}
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