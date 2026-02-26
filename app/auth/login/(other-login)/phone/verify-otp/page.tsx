import { notFound } from "next/navigation";
import VerifyPhoneLoginOtpClientPage from "./client"

type Props = {
    searchParams: Promise<{
        phone: string,
    }>
}

const VerifyPhoneLoginOtpPage = async ({ searchParams }: Props) => {

    const phone = (await searchParams).phone;

    if (!phone) {
        notFound();
    }

    return (
        <VerifyPhoneLoginOtpClientPage
            phone={phone}
        />
    )
}

export default VerifyPhoneLoginOtpPage