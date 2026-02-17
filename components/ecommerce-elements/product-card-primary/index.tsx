import { getStoreCurrency } from '@/functions/eCommerce-store'
import { ProductCardInterface } from '@/types/product'
import Image from 'next/image'

const ProductsCardPrimary = ({
    product,
    bgColor,
    fgColor,
}: {
    product: ProductCardInterface,
    bgColor: string,
    fgColor: string,
}) => {
    return (
        <div
            className='w-full space-y-3'
        >
            <div
                className='space-y-4 p-3 rounded-xl'
                style={{
                    backgroundColor: bgColor,
                }}
            >
                <div
                    className='w-full rounded-xl aspect-square overflow-hidden'
                >
                    <Image
                        alt={product.productData.name}
                        src={product.featuredImage}
                        width={200}
                        height={300}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div
                    className='text-sm text-center font-semibold space-y-2'
                    style={{
                        color: fgColor,
                    }}
                >
                    <p>{product.productData.name}</p>
                    <p>
                        {product.productData.salePrice && (
                            <del
                                className='text-[#afa2a2]'
                            >{getStoreCurrency()}{product.productData.price}</del>
                        )}
                        &nbsp;
                        {getStoreCurrency()}{product.productData.salePrice || product.productData.price}
                    </p>
                </div>

                <button
                    className='w-full p-2 text-sm rounded-lg text-white cursor-pointer'
                    style={{
                        backgroundColor: fgColor,
                    }}
                >Add to Cart</button>

            </div>

            <div
                className='flex justify-center'
            >
                <button
                    className='cursor-pointer font-semibold underline text-[#451F0F]'
                >View Details</button>
            </div>
        </div>
    )
}

export default ProductsCardPrimary