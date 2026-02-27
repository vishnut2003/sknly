import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react"

const LoginPagesLayout = async ({ children }: PropsWithChildren) => {

    const session = await getServerSession(authOptions);

    if (session) {
        const currentTime = new Date();
        const sessionExpiryTime = new Date(session.expires)

        const expired = sessionExpiryTime < currentTime

        if (!expired) {
            redirect("/my-account");
        }

    }

    return children;
}

export default LoginPagesLayout