import { PropsWithChildren } from 'react'

const DefaultSection = (Props: PropsWithChildren<{
    outerClassName?: string,
    className?: string,
}>) => {
    return (
        <div
            className={`w-full px-3 md:px-5 ${Props.outerClassName}`}
        >
            <div
                className={`w-full max-w-420 mx-auto ${Props.className}`}
            >{Props.children}</div>
        </div>
    )
}

export default DefaultSection