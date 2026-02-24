import Link from 'next/link'

const EmptyCartItemTemplate = () => {
  return (
    <div>
        <div
            className='flex flex-col items-center gap-5 py-10 min-h-100 justify-center'
        >
            <h1
                className='text-[#BA131C] font-glamour text-4xl'
            >The Cart is Empty</h1>
            <Link
                className='outline-button'
                href={"/shower-foams"}
            >Continue Shopping</Link>
        </div>
    </div>
  )
}

export default EmptyCartItemTemplate