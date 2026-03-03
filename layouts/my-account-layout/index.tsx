'use client';

import { PropsWithChildren } from "react"
import DefaultSection from "../default-section"
import Image from "next/image"
import { signOut, useSession } from "next-auth/react";
import SignoutIcon from "./assets/log-out.svg";
import Link from "next/link";

const MyAccountLayout = ({
    page,
    children,
}: PropsWithChildren<{
    page: "personal-information" | "my-orders" | "wishlist",
}>) => {

    const session = useSession();

    return (
        <div
            className="text-[#BA131C]"
        >
            <DefaultSection
                outerClassName="py-7"
                className="flex items-center"
            >
                <div
                    className="w-full"
                >
                    <div
                        className="flex items-center gap-3"
                    >
                        <Image
                            alt="Avatar"
                            src={"/images/placeholder-images/avatar.png"}
                            width={200}
                            height={200}
                            className="w-12 h-12 object-cover rounded-full shrink-0"
                        />
                        <h2
                            className="whitespace-nowrap text-2xl font-semibold"
                        >{session.data?.user.name},</h2>
                    </div>
                </div>
                <div
                    className="flex items-center justify-end w-full"
                >

                    <button
                        className="font-semibold flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                            signOut();
                        }}
                    >
                        <Image
                            alt="Signout Icon"
                            src={SignoutIcon}
                            className="w-5"
                        />
                        <p>Log Out</p>
                    </button>
                </div>
            </DefaultSection>

            <div
                className="py-3 bg-[#EFE0EB]"
            >
                <DefaultSection
                    className="flex items-center gap-10"
                >
                    {
                        [
                            {
                                slug: "personal-information",
                                label: "Personal Information",
                                href: "/my-account"
                            },
                            {
                                slug: "my-orders",
                                label: "My Orders",
                                href: "/my-account/orders",
                            },
                            {
                                slug: "wishlist",
                                label: "Wishlist",
                                href: "/my-account/wishlist"
                            }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block ${item.slug === page && "font-bold"}`}
                            >{item.label}</Link>
                        ))
                    }
                </DefaultSection>

            </div>

            <DefaultSection
                outerClassName="py-10"
            >
                {children}
            </DefaultSection>

        </div>
    )
}

export default MyAccountLayout