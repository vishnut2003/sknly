import { getServerSession } from "next-auth"
import SignUpPageClient from "./client"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { redirect } from "next/navigation";

const SignupPage = async () => {

  const session = await getServerSession(authOptions);

  if (session && session.user.id) {
    const currentTime = new Date();
    const expiryTime = new Date(session.expires);

    const expired = expiryTime < currentTime;

    if (!expired) {
      redirect("/my-account");
    }
  }

  return (
    <SignUpPageClient />
  )
}

export default SignupPage