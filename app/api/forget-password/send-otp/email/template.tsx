
const ForgetPasswordOtpMailTemplate = ({
    otp,
}: {
    otp: string,
}) => {
    return (
        <div>
            <p>OTP for reset password is <b>{otp}</b></p>
        </div>
    )
}

export default ForgetPasswordOtpMailTemplate