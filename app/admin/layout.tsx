import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

async function AdminDashboardRootLayout({
    children,
}: PropsWithChildren) {

    const session = await getServerSession(authOptions);

    // if (!session?.user.role) {
    //     notFound();
    // }

    // if (session.user.role !== "admin") {
    //     notFound();
    // }

    return children;
}

export default AdminDashboardRootLayout;