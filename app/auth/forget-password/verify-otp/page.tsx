import React from 'react'
import ForgetPasswordVerifyOtpClientPage from './client'
import { notFound } from 'next/navigation'

type Props = {
    searchParams: Promise<{
        sendTo: string,
    }>
}

const ForgetPasswordVerifyOtp = async ({
    searchParams,
}: Props) => {

    const sendTo = (await searchParams).sendTo;

    if (!sendTo) {
        notFound();
    }

    return (
        <ForgetPasswordVerifyOtpClientPage
            sendTo={sendTo}
        />
    )
}

export default ForgetPasswordVerifyOtp