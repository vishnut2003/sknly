import { PropsWithChildren } from 'react'
import HomeHeader from './headers/home-header'
import Footer from './footer'

const HomeLayout = ({ children }: PropsWithChildren) => {
    return (
        <div
            className='relative'
        >
            <HomeHeader />

            <div>
                {children}
            </div>

            <Footer/>

        </div>
    )
}

export default HomeLayout