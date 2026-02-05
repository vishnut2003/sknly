import { PropsWithChildren } from 'react'
import HomeHeader from './headers/home-header'

const HomeLayout = ({ children }: PropsWithChildren) => {
    return (
        <div
            className='relative'
        >
            <HomeHeader />

            <div>
                {children}
            </div>

        </div>
    )
}

export default HomeLayout