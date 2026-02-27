import { RiLoaderLine } from '@remixicon/react'

const LoadingElement = () => {
    return (
        <div
            className='w-full flex items-center gap-3 py-3 px-4 min-h-40 justify-center'
        >
            <RiLoaderLine
                size={30}
                className='animate-spin text-[#BA131C]'
            />
            <p
                className='font-semibold'
            >Loading...</p>
        </div>
    )
}

export default LoadingElement