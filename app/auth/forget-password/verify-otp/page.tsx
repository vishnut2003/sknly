import React from 'react'
import ForgetPasswordVerifyOtpClientPage from './client'
import { notFound } from 'next/navigation'

type Props = {
    searchParams: Promise<{
        email: string,
    }>
}

const ForgetPasswordVerifyOtp = async ({
    searchParams,
}: Props) => {

    const email = (await searchParams).email;

    if (!email) {
        notFound();
    }

    return (
        <ForgetPasswordVerifyOtpClientPage
            sendTo={email}
        />
    )
}

export default ForgetPasswordVerifyOtp