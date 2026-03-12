'use client';

import { PropsWithChildren, useEffect, useState } from 'react'
import AdminDashboardHeader from './header'
import AdminDashboardSidebar from './sidebar'
import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatePresence } from 'framer-motion';
import DefaultSection from '@/layouts/default-section';

const AdminDashboardLayout = ({
    children,
}: PropsWithChildren) => {

    const isMobile = useIsMobile();
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(isMobile);

    useEffect(() => {
        (() => setSidebarOpen(!isMobile))()

        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = "auto";
        }

    }, [isMobile])

    return (
        <div>
            <div
                className='min-h-dvh max-h-dvh flex items-stretch bg-gray-100'
            >

                <AnimatePresence>
                    {sidebarOpen && (
                        <AdminDashboardSidebar
                            setSidebarOpen={setSidebarOpen}
                            isMobile={isMobile}
                        />
                    )}
                </AnimatePresence>

                <div
                    className='w-full flex flex-col'
                >
                    <AdminDashboardHeader
                        setSidebarOpen={setSidebarOpen}
                    />
                    <div
                        className='h-full overflow-auto'
                    >
                        <div
                            className='min-h-max'
                        >
                            <DefaultSection
                                outerClassName='py-3'
                            >
                                {children}
                            </DefaultSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardLayout