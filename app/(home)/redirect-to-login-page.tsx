'use client';

import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectToLoginPageOneTime = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {

            getSession().then((session) => {
                if (!session?.user.id) {

                    const isGuest = localStorage.getItem("isGuest");

                    if (isGuest === "yes") {
                        return;
                    }

                    localStorage.setItem("isGuest", "yes");
                    router.push("/auth/login");
                }
            })

        }, 1000)
    }, [router])

  return <></>
}

export default RedirectToLoginPageOneTime