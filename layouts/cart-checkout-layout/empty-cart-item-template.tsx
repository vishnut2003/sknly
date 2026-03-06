import Link from 'next/link'
import EmptyCartIcon from "./assets/empty-cart.png";
import Image from 'next/image';

const EmptyCartItemTemplate = () => {
  return (
    <div>
        <div
            className='flex flex-col items-center gap-5 py-10 min-h-100 justify-center'
        >

            <div
                className='bg-[#FCDFE2] w-20 h-20 rounded-full flex items-center justify-center'
            >
                <Image
                    alt='Empty Cart'
                    src={EmptyCartIcon}
                    className='w-10'
                />
            </div>

            <h1
                className='text-[#BA131C] font-glamour text-2xl'
            >Your next shower crush is waiting...</h1>
            <Link
                className='outline-button'
                href={"/shower-foams"}
            >Continue Shopping</Link>
        </div>
    </div>
  )
}

export default EmptyCartItemTemplate