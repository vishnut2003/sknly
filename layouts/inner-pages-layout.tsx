import { PropsWithChildren } from 'react'
import Footer from './footer'
import Header from './headers'

const InnerPagesLayout = ({
    children,
}: PropsWithChildren) => {
    return (
        <div
            className='relative'
        >
            <Header
                bgColorClassName='bg-white'
                isHome={false}
            />

            <div>
                {children}
            </div>

            <Footer />

        </div>
    )
}

export default InnerPagesLayout