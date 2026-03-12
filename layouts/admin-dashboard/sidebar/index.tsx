import { adminSidebarMenuItems } from './menu'
import AdminDashboardSidebarMenuItems from './menu-item'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import { MOBILE_BREAKPOINT } from '@/hooks/use-mobile'

const AdminDashboardSidebar = ({ setSidebarOpen, isMobile }: {
    setSidebarOpen: Dispatch<SetStateAction<boolean>>,
    isMobile: boolean,
}) => {

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                window.innerWidth < (MOBILE_BREAKPOINT)
            ) {
                setSidebarOpen(false)
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }

    }, [setSidebarOpen])

    return (
        <motion.div
            className='bg-background shrink-0 w-full max-w-60 flex flex-col justify-start border-r border-gray-200 fixed md:static top-0 left-0 h-full md:h-auto z-10'
            ref={sidebarRef}
            initial={{ x: isMobile ? '-100%' : 0 }}
            animate={{ x: 0 }}
            exit={{ x: isMobile ? '-100%' : 0 }}
            transition={{
                type: "spring",
                bounce: 0,
                duration: 0.6,
            }}
        >
            <div
                className='py-4 px-5'
            >
                <p
                    className='font-glamour text-3xl text-[#BA131C]'
                >Sknly.</p>
            </div>
            <div
                className='max-h-full pr-5 pb-6 overflow-auto'
            >
                <div
                    className='space-y-0.5 min-h-max'
                >
                    {adminSidebarMenuItems.map((menu, index) => {
                        if (typeof menu === "string") {
                            return (
                                <h2
                                    key={index}
                                    className='text-sm font-bold underline px-5 py-2'
                                >{menu}</h2>
                            )
                        }

                        return (
                            <AdminDashboardSidebarMenuItems
                                menuItem={menu}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default AdminDashboardSidebar