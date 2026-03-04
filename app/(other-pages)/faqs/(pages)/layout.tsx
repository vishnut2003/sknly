import InnerPagesLayout from '@/layouts/inner-pages-layout'
import { PropsWithChildren } from 'react'

const FAQPageRootLayout = ({
    children,
}: PropsWithChildren) => {
    return (
        <InnerPagesLayout>
            {children}
        </InnerPagesLayout>
    )
}

export default FAQPageRootLayout