import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { notFound } from "next/navigation";
import UserModel, { UsersModelInterface } from "@/models/user";
import { dbConnect } from "@/config/database";

async function AdminDashboardRootLayout({
    children,
}: PropsWithChildren) {

    const session = await getServerSession(authOptions);

    if (!session?.user.id) {
        notFound();
    }

    await dbConnect();
    const user = await UserModel.findById(session.user.id) as UsersModelInterface | null;

    if (!user?.role || user.role !== "admin") {
        notFound();
    }

    return children;
}

export default AdminDashboardRootLayout;